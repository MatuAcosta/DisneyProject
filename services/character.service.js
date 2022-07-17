const BaseService = require("./base.service");
const {Blob} = require('buffer');
class CharacterService extends BaseService{
    constructor({CharacterBusiness}){
        super(CharacterBusiness);
    }
    
    async getMoviesCharacter(id){
        return this.CharacterBusiness.getMoviesCharacter(id) 
    }

}

module.exports = CharacterService