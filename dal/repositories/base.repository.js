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
        try {
            return await this.db[this.entity].findOne({where:{id}});
        } catch (error) {
            console.log(error)
        }
    }

    async create(entity){
        return  await this.db[this.entity].create(entity)
    }

    async update(id,entity){
        let updated = false
        //sequelize update returns [0] or [1] if rows were updated or not, but cant differenciate this with if conditionals.
        //i make a previous query to make sure that the id of the char exists 
        let exist =  await this.db[this.entity].findOne({where:{id}});
        if(!exist) return null
        let res = await this.db[this.entity].update(entity,{where:{id}});
        res.forEach(el => {
            if(el === 1) updated = true
        });
        if(updated) return entity
        return {msg:'No rows updated'}
    }
    async delete(id){
        return await this.db[this.entity].destroy({where:{id}});
    }
    //we create a generic getByName because movies and characters will use this request.
    async getByName(name){
        if(this.entity === 'Character'){
            return await this.db[this.entity].findAll(
                {
                    where:{
                       name: {[Op.substring]:`${name}`}
                    }
                }
            )
        }
        return await this.db[this.entity].findAll({
            where:{
                title:{[Op.eq]:`${name}`}
            }
        })

    }
}

module.exports = BaseRepository