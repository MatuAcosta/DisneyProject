const BaseService = require("./base.service");
class UserService extends BaseService{
    constructor({UserBusiness}){
        super(UserBusiness);
        this.userBusiness = UserBusiness;
    }
    async setRoles(user,roles) { 
        return await this.userBusiness.setRoles(user,roles)
    } 
    async checkDuplicateUsernameOrEmail(username,email){
        return await this.userBusiness.checkDuplicateUsernameOrEmail(username,email)
    }
    async isAdmin(id){
        return await this.userBusiness.isAdmin(id)
    }
}

module.exports = UserService