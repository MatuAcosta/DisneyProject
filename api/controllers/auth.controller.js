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
                rolesSet = await this.userService.setRoles(user,[1]);
                res.status(200).send('User register')
            }
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = AuthController;