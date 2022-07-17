const BaseService = require("./base.service");
const {Blob} = require('buffer');
class CharacterService extends BaseService{
    constructor({CharacterBusiness}){
        super(CharacterBusiness);
    }


}

module.exports = CharacterService