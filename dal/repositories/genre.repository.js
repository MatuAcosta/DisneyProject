const { raw } = require("body-parser");
const BaseRepository = require("./base.repository");

class GenreRepository extends BaseRepository{
    constructor({db}){
        super(db,'Genre')
        this.db = db;
    }

    async findByName(name){
        let genreId = await this.db['Genre'].findOne({
            attributes:['id'],
            where:{
                name:name
            },
        })
        //if genre is not found we will return null to save null in db too.
        if(genreId) return genreId.dataValues.id
        return null

    }
}

module.exports = GenreRepository