const BaseRepository = require("./base.repository");

class CharacterRepository extends BaseRepository{
    constructor({db}){
        super(db,'Character')
    }

    async getMoviesCharacter(){
        
    }
}

module.exports = CharacterRepository;