const ROLES = require('../../roles');
class SignUp { 
    constructor({UserService}){
        this.userService = UserService
    }

    async checkDuplicateUsernameOrEmail (req,res,next){
        let {username,email} = req.body
        let check = await this.userService.checkDuplicateUsernameOrEmail(username,email)
        if(!check)  {
           res.status(400).send({message:'User or email already exists'}); 
           return;
        }
        next();
    }
    checkRolesExisted(req,res,next){
        if(req.body.roles){
            for (let i = 0; i < req.body.roles.length; i++) {
                if (!ROLES.includes(req.body.roles[i])) {
                  res.status(400).send({
                    message: "Failed! Role does not exist = " + req.body.roles[i]
                  });
                  return;
                }
              }
        }
        next();
    }

}

module.exports = SignUp;