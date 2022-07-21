const mapper = require('automapper-js')

class BaseBusiness { 
    constructor(EntityRepository,EntityToMap){
        this.entityRepository = EntityRepository;
        this.entityToMap = EntityToMap;
    }

    async getAll(){
        const entities = await this.entityRepository.getAll();
        return entities.map(entity => mapper(this.entityToMap,entity));
    }
    async getOne(id){
        const entity = await this.entityRepository.getOne(id);
        return mapper(this.entityToMap,entity);
    }

    async create(entity){
        entity = mapper(this.entityToMap,entity);
        const createdEntity = await this.entityRepository.create(entity);
        return mapper(this.entityToMap,createdEntity);
    }
    async update(id,entity){
        entity.id = id;
        entity = mapper(this.entityToMap,entity);
        console.log('bussiness', entity)
        const updatedEntity = await this.entityRepository.update(id,entity);
        return mapper(this.entityToMap,updatedEntity);
    }

    async delete(id){
        return await this.entityRepository.delete(id);
    }

   async getByName(name) { 
        return await this.entityRepository.getByName(name);
    }
    
}
module.exports = BaseBusiness
