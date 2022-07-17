const BaseRepository = require("./base.repository");

class CharacterRepository extends BaseRepository{
    constructor({db}){
        super(db,'Character')
    }
}

module.exports = CharacterRepository;