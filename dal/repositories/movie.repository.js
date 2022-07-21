const BaseRepository = require("./base.repository");

class MovieRepository extends BaseRepository{
    constructor({db}){
        super(db,'Movie')
        this.db = db;
    }
    async getByGenre(genreId) { 
        return await this.db['Movie'].findAll({
            where:{
                genreId
            }
        })
    }
    async getOrderedByCreationDate(order){
        return await this.db['Movie'].findAll({
            order:[
                ['creation_date',`${order}`]
            ]
        })
    }
    async getByCharacter(idCharacter){
        try {
            idCharacter = parseInt(idCharacter);
            let moviesId = await this.db['ActsIn'].findAll({
                attributes:['movieId'],
                where:{
                    characterId:idCharacter
                }
            })
            if(moviesId.length === 0) return new Error ()
            if(!moviesId) return new Error();
            return Promise.all(
                moviesId.map(async mv =>{
                    let id =  mv.dataValues.movieId;
                    return await super.getOne(id)
                })
            )
        } catch (error) {
            
        }
    }

}

module.exports = MovieRepository;