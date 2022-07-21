const { Op } = require("sequelize");
class BaseRepository { 
    constructor(db,entity){
        this.db = db;
        this.entity = entity;
    }
    async getAll(){
        return await  this.db[this.entity].findAll();
    }

    async getOne(id){
        return await this.db[this.entity].findOne({where:{id}});
    }

    async create(entity){
        return  await this.db[this.entity].create(entity)
    }

    async update(id,entity){
        let res = await this.db[this.entity].update(entity,{where:{id}});
        if(res !== 0) {
            return entity;
        }
        return null 
    }
    async delete(id){
        return await this.db[this.entity].destroy({where:{id}});
    }
    //we create a generic getByName because movies and characters will use this request.
    async getByName(name){
        return await this.db[this.entity].findAll(
            {
                where:{
                   name: {[Op.substring]:`${name}`}
                }
            }
        )
    }
}

module.exports = BaseRepository