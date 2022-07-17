const {Character} = require('./domainModels');
const BaseBusiness = require('./base.business')
class CharacterBusiness extends BaseBusiness{
    constructor({CharacterRepository}){
        super(CharacterRepository,Character)
    }

    async getMoviesCharacter(){
        return await this.CharacterRepository.getMoviesCharacter(id);
    }
}

module.exports = CharacterBusiness