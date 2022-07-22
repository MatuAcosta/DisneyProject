const BaseService = require("../services/base.service");
const {User} = require('./domainModels')
class UserBusiness extends BaseService{
    constructor({UserRepository}){
        super(UserRepository,User)
        this.userRepository = UserRepository
    }
    async checkDuplicateUsernameOrEmail(username,email){
        return await this.userRepository.checkDuplicateUsernameOrEmail(username,email)
    }
    async isAdmin(id){
        return await this.userRepository.isAdmin(id)
    }
}

module.exports = UserBusiness