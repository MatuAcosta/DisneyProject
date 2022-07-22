const BaseService = require("./base.service");
class UserService extends BaseService{
    constructor({UserBusiness}){
        super(UserBusiness);
        this.userBusiness = UserBusiness;
    }
    async checkDuplicateUsernameOrEmail(username,email){
        return await this.userBusiness.checkDuplicateUsernameOrEmail(username,email)
    }
    async isAdmin(id){
        return await this.userBusiness.isAdmin(id)
    }
}

module.exports = UserService