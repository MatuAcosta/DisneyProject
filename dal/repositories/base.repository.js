class BaseRepository { 
    constructor(db,entity){
        this.db = db;
        this.entity = entity;
    }
    getAll(){
        return  this.db[this.entity].findAll();
    }

    getOne(id){
        return this.db[this.entity].findOne({where:{id}});
    }

    create(entity){
        return  this.db[this.entity].create(entity)
    }

    update(id,entity){
        return this.db[this.entity].update(entity,{where:{id}});
    }
    delete(id){
        return this.db[this.entity].destroy({where:{id}});
    }
}

module.exports = BaseRepository