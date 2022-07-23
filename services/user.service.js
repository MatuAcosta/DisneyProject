const BaseService = require("./base.service");
const bcrypt = require("bcryptjs");
class UserService extends BaseService{
    constructor({UserBusiness}){
        super(UserBusiness);
        this.userBusiness = UserBusiness;
    }
    async comparePassword(received,saved){
        return await bcrypt.compareSync(received,saved);
    }

    async getUserByUsername(username){
        return await this.userBusiness.getUserByUsername(username);
    }
    async setRoles(user,roles) { 
        return await this.userBusiness.setRoles(user,roles)
    } 
    async checkDuplicateUsernameOrEmail(username,email){
        return await this.userBusiness.checkDuplicateUsernameOrEmail(username,email)
    }
    async isAdmin(id){
        try {
            return await this.userBusiness.isAdmin(id)
        } catch (error) {   
            console.log(error)
        }
    }
}

module.exports = UserService