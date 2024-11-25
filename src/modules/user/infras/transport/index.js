
const env = process.env;
const jwt = require('jsonwebtoken');
const { getAll, create, update,find,remove } = require('../../usecase/index');
const { Resend } = require('resend');
const resend = new Resend("re_Ktfm6B7S_L1kSAHcHAmZaxmDKJkiYKvia");
async function get(req, res, next) {
    try {

        res.json(await getAll())

    } catch (error) {
        console.log("error", error)
    }
}
function generateAccessToken(user) {
    console.log(user);
    return jwt.sign(user, env.SECRET, { expiresIn: "1h" });
}
function decodedAccess(token) {
    return jwt.verify(token,process.env.SECRET);
};
function authenticateBearerToken(req, res, next) {
    const token = req.header('Authorization')?.split(" ")[1];
    if (!token) {
        return res.status(403).json({ message: 'Access denied, no token provided' });
    }
    try {
        const decoded = jwt.verify(token, process.env.SECRET);

        if (decoded.name != 'vandong') {
            return res.status(400).json({ message: 'No permission' });
        }
        next();

    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}
function authenticateCookiesToken(req, res, next) {
    const token = req.cookies['jwt'];
    if (!token) {
        return res.status(403).json({ message: 'Access denied, no token provided' });
    }
    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        console.log(decoded);
        if (decoded.role != 'admin' || decoded.status != 'active') {
            return res.status(400).json({ message: 'No permission' });
        }
        next();

    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}
function logout(req, res, next) {
    res.clearCookie('jwt').status(200).send('succesull');
}
async function findUser(req, res, next) {
    try {
        const user = await find(req.body);
        if (user != undefined) {
            if (user.status == "unactive") {
                res.send('unactive').status(400);
            } else {
                const token = generateAccessToken(user);
                res.cookie('jwt', token, {
                    sameSite: 'None',
                    httpOnly: true,
                    secure: true,
                    maxAge: 3600000,
                }).status(200).json(user);
            }
        }
        else {
            res.status(400).send("invalid details");
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
            const verify = generateAccessToken(req.body);
            res.cookie("Verify", verify,
                {
                    sameSite: 'None',
                    httpOnly: true,
                    secure: true,
                    maxAge: 3600000,
                }).status(200).json(verify);
        }

    } catch (error) {
        console.log("error", error)
    }
}
async function verifyMail(req, res, next) {
    const verify = req.cookies['verify'];
    console.log(req.body.code);
    const acceptAccount = decodedAccess(verify);
    console.log(acceptAccount);
    const {User_Name,password,mail,code} =acceptAccount;
    if (code == req.body.code) {
    const data =await create({User_Name,password,mail});
    if(data){
        res.send("successfully").status(200);
    }}

}
async function sendMail(req, res, next) {
    try {
        if (!find(req.body)) {
            res.status("400");
            res.send("Invalid details!");
        } {
            const code = Math.floor(1000 + Math.random() * 9000);
            const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
            if (validEmail.test(req.body.mail)) {
                const { data, error } = await resend.emails.send({
                    from: "Acme <onboarding@resend.dev>",
                    to: req.body.mail,
                    subject: "Vandong is comming",
                    html: `<strong>it works!</strong>
                    <h1> Code is you ${code}</h1>
                    <button>Please Click Me</button>`,
                });

                if (error) {
                    res.send(error);
                }
                const Verify = generateAccessToken({
                    ...req.body,
                    code: code
                });
                res.cookie("verify", Verify,
                    {
                        sameSite: 'None',
                        httpOnly: true,
                        secure: true,
                        maxAge: 3600000,
                    }).status(200).json(Verify);
            }
            else {
                res.status(400).send("email not valid" + "  " + req.body.mail);

            }

        }
    }
    catch (error) {
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

async function Remove(req, res) {
    try {
       const data=await remove(req.params.id);
        res.json(data).status(200);
    } catch (error) {
        throw error;
    }
}
module.exports = {
    get,
    createUser,
    updateUser,
    findUser,
    logout,
    authenticateBearerToken,
    authenticateCookiesToken,
    sendMail,
    verifyMail,
    Remove
}