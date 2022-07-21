const BaseRepository = require("./base.repository");
class CharacterRepository extends BaseRepository{
    constructor({db}){
        super(db,'Character')
        this.db = db;
    }

    async getCharactersByAge(age){
        return await this.db['Character'].findAll({
            where:{
                age
            }
        })
    }
    async getCharactersByMovie(idMovie){
        try {
            let charactersId = await this.db['ActsIn'].findAll({
                attributes:['characterId'],
                where:{
                    movieId:idMovie 
                }
            })
            if(charactersId.length === 0) return new Error();
            if(!charactersId) throw new Error()
            return Promise.all(
                charactersId.map(async (ch) => {
                    let id =  await ch.dataValues.characterId
                    return await super.getOne(id)
                }))
        } catch (error) {
            console.log(error)
        }
  


    }
}

module.exports = CharacterRepository;