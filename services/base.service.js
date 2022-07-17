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
        const createdEntity = await this.entityBusiness.create(entity);
        return createdEntity;
    }
    async update(id,entity){
        const updatedEntity = await this.entityBusiness.update(id,entity);
        return updatedEntity;
    }
    async delete(id){
        return await this.entityBusiness.delete(id);
    }
}

module.exports = BaseService