const BaseService = require("../services/base.service");
const {Role} = require('./domainModels')
class RoleBusiness extends BaseService{
    constructor({RoleRepository}){
        super(RoleRepository,Role)
        this.roleRepository = RoleRepository
    }
}

module.exports = RoleBusiness