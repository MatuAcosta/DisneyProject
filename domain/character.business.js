const {Character} = require('./domainModels');
const BaseBusiness = require('./base.business')
class CharacterBusiness extends BaseBusiness{
    constructor({CharacterRepository}){
        super(CharacterRepository,Character)
    }
}

module.exports = CharacterBusiness