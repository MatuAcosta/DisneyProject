class BaseService {
    constructor(entityBusiness){
        this.entityBusiness = entityBusiness;
    }
    
    async getAll(){
        const entities = await this.entityBusiness.getAll();
        return entities;
    }
    async getOne(id){
        const entity = await this.entityBusiness.getOne(id);
        return entity;
    }
    async create(entity){
       try {
            const createdEntity = await this.entityBusiness.create(entity);
            return createdEntity;
       } catch (error) {
            console.log(error)
       }

    }
    async update(id,entity){
        const updatedEntity = await this.entityBusiness.update(id,entity);
        return updatedEntity;
    }
    async delete(id){
        return await this.entityBusiness.delete(id);
    }
    async getByName(name){
        return await this.entityBusiness.getByName(name);
    }
}

module.exports = BaseService