const jwt = require("jsonwebtoken");
const config = require('../../config/auth.config')
class Auth {
    constructor({UserService}){
        this.userService = UserService;
    }
    verifyToken(req,res,next){
        let token = req.headers['x-access-token']
        if(!token)  res.status(403).send({message:'No token provided'});

        jwt.verify(token,config.secret,(err,decoded) => {
            if(err)  return res.status(401).send({message:'Unauthorized'})
            req.userId = decoded.id;
            next();
            return ;

        })
    }

    async isAdmin(req,res,next){
        try {
            let userRoles = await this.userService.isAdmin(req.userId)
            if(!userRoles) return res.status(403).send({message:'Required admin role'})
            for (let i = 0; i < userRoles.length; i++) {
                if (userRoles[i] === "admin") {
                    next();
                    return;
                }
            }
            throw {msg:'Required admin permissions'}
        } catch (error) {
            console.log("ERROR")
            res.status(404).send(error.msg)
            return ;
        }

    }
}

module.exports = Auth