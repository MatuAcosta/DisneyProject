const {Character} = require('./domainModels');
const BaseBusiness = require('./base.business')
class CharacterBusiness extends BaseBusiness{
    constructor({CharacterRepository}){
        super(CharacterRepository,Character)
        this.characterRepository = CharacterRepository;
    }

    async getCharactersByAge(age){
        return await this.characterRepository.getCharactersByAge(age);
    }

    async getCharactersByMovie(idMovie){
        return await this.characterRepository.getCharactersByMovie(idMovie);
    }
}

module.exports = CharacterBusiness