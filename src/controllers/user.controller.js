const { getAll, create, remove, update, find } = require("../services/users.service")
const env = process.env;
var jwt = require('jsonwebtoken');

async function get(req, res, next) {
    try {
        res.json(await getAll())

    } catch (error) {
        console.log("error", error)
    }
}

function getCookies(req, res, next){
        const CookieID = req.cookies['jwt'];
        res.send(`CookieID: ${CookieID}`);
}
function generateAccessToken(username) {
    return jwt.sign({name:username}, env.SECRET, { expiresIn: "1h" });
}
 function logout(req, res, next) {
      res.clearCookie('jwt').status(200).send('succesull');
}
async function findUser(req, res, next) {
    try {
        const name = req.body.User_Name;
        const token = generateAccessToken(name);
        const user = await find(req.body);
        if (user != undefined) {
            res.cookie('jwt', token, {
                sameSite: 'None',
                httpOnly: true,
            }).status(200).send('succesfull');
          
        }

    } catch (error) {
        console.log("error", error)
    }
}


async function createUser(req, res, next) {
    try {
        if (!find(req.body)) {
            res.status("400");
            res.send("Invalid details!");
        }
        else {
            const flag = await create(req.body);
            if (flag == 1) {
                res.status("400");
                res.send("Invalid details!");
            }
            else {
                // res.clearCookie('jwt').status(200).send('succesull');
                res.cookie('jwt', jwt.sign(flag, env.SECRET, { expiresIn: 60*60 }), {
                    sameSite: 'None',
                    httpOnly: true,

                }).status(200).send('succesfull');

            }

        }

    } catch (error) {
        console.log("error", error)
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
    logout,
    getCookies,
}