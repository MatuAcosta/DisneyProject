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
}

module.exports = MovieRepository;