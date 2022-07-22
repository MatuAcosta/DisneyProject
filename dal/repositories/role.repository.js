const BaseRepository = require("./base.repository");
const { Op } = require("sequelize");
class RoleRepository extends BaseRepository{
    constructor({db}){
        super(db,'Role')
        this.db = db;
    }

    //I know there is a generic getbyname but to make it cleaner i will override
    async getByName(name){
        return await this.db['Role'].findAll({
            where:{
                name: {
                    [Op.or]: name
                  }
            }
        })
    }


}

module.exports = RoleRepository