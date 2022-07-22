const BaseService = require("./base.service");
class RoleService extends BaseService{
    constructor({RoleBusiness}){
        super(RoleBusiness);
        this.roleBusiness = RoleBusiness;
    }

}

module.exports = RoleService