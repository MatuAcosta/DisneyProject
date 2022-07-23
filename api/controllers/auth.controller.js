var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const config = require('../../config/auth.config')

class AuthController { 
    constructor({UserService,RoleService}){
        this.userService = UserService;
        this.roleService = RoleService;
    }

    async signUp(req,res){
        try {
            let {body} = req;
            let rolesSet;
            body.password = bcrypt.hashSync(body.password,8);
            let user = await this.userService.create(body);
            if(req.body.roles){
                let roles = await this.roleService.getByName(req.body.roles);
                if(roles){
                    rolesSet = await this.userService.setRoles(user,roles)
                    res.status(200).send('User register')
                } 
            } else{
                //if role not specified is user
                rolesSet = await this.userService.setRoles(user,[2]);
                res.status(200).send('User register')
            }
        } catch (error) {
            console.log(error)
            res.status(401).send('User already exists')
        }
    }

    async signIn(req,res){
        try {
            let {body} = req;
            let user = await this.userService.getUserByUsername(body.username);
            if(!user) throw {msg:'User does not exist'}
            let passwordIsValid = this.userService.comparePassword(body.password,user.password);
            if(!passwordIsValid) throw {msg:'Wrong password'};
            let token = jwt.sign({id:user.id},config.secret,{
                expiresIn:86400
            })
            user.token = token;
            return res.status(200).send({
                user,
                token
            })
        } catch (error) {
            console.log(error)
            res.status(400).send(error.msg);
        }

    }

}

module.exports = AuthController;