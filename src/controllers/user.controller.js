const { getAll, create, remove, update,find } = require("../services/users.service")
const env = process.env;
var jwt = require('jsonwebtoken');
async function get(req, res, next) {
    try {
        res.json(await getAll())
    } catch (error) {
        console.log("error", error)
    }
}
async function findUser(req, res, next) {
    try {
        const user= await find(req.body);
        if(user!=undefined){
            res.status(200).json(user);
        }
       
    } catch (error) {
        console.log("error", error)
    }
}
async function getToken(req,res) {
    const authorizationClient = req.headers['authorization'];
    const token = authorizationClient && authorizationClient.split(' ')[1]
  
    if (!token) return res.sendStatus(401)
  
    try {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        next();
    } catch (e) {
        return res.sendStatus(403)
    }
}

async function createUser(req, res, next) {
    try {
        if (! find(req.body)) {
            res.status("400");
            res.send("Invalid details!");
        }
            else {
               
                const flag = await create(req.body);
               res.json(jwt.sign(flag,env.SECRET,{expiresIn:"1h"}))
            }

        } catch (error) {
            console.log("error", err)
        }
    }

async function updateUser(req, res, next) {
        try {
            res.json(await update(req.params.id, req.body))
        } catch (error) {
            console.log("error", error)
        }
    }
    async function removeUser(req, res, next) {
        try {
            res.json(await remove(req.params.id))
        } catch (error) {
            console.log("error", error)
        }
    }
    module.exports = {
        get,
        createUser,
        updateUser,
        removeUser,
        findUser,
    }