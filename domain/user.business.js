const BaseService = require("../services/base.service");
const {User} = require('./domainModels')
class UserBusiness extends BaseService{
    constructor({UserRepository}){
        super(UserRepository,User)
        this.userRepository = UserRepository
    }
    async getUserByUsername(username){
        return await this.userRepository.getUserByUsername(username)
    }
    async setRoles(user,roles) { 
        return await this.userRepository.setRoles(user,roles)
    } 
    async checkDuplicateUsernameOrEmail(username,email){
        return await this.userRepository.checkDuplicateUsernameOrEmail(username,email)
    }
    async isAdmin(id){
        return await this.userRepository.isAdmin(id)
    }
}

module.exports = UserBusiness