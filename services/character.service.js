const BaseService = require("./base.service");
const {Blob} = require('buffer');
const { DATE } = require("sequelize");
class CharacterService extends BaseService{
    constructor({CharacterBusiness}){
        super(CharacterBusiness);
        this.characterBusiness = CharacterBusiness
    }
    
    calculateAge(birthdate){
        let today = new Date();
        let age = today.getFullYear() - birthdate.getFullYear();
        let monthdiff = today.getMonth() - birthdate.getMonth();
        if(monthdiff < 0 || (monthdiff === 0 && today.getDate < birthdate.getDate())){
            age-- ;
        }
        return age;
    }

    async create(character){
        let age = this.calculateAge(new Date(character.birthdate));
        character.age = age;
        console.log('character age service', character.age)
        return await super.create(character)
    } 

    async update(id,character){
        let age = this.calculateAge(new Date(character.birthdate));
        character.age = age;
        console.log('character age service', character.age)
        return await super.update(id,character)
    }

    async getCharactersByAge(age){
        return await this.characterBusiness.getCharactersByAge(age)
    }
    async getCharactersByMovie(idMovie){
        return await this.characterBusiness.getCharactersByMovie(idMovie);
    }




}

module.exports = CharacterService