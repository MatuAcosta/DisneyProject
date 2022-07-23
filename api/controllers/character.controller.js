const {CharacterDto} = require('../dtos/index');
const mapper = require('automapper-js');
class CharacterController { 

    constructor({CharacterService}){
        this.characterService = CharacterService;
    }

    async getAll(req,res){
        try {
            let characters = null; 
            console.log(req.query)
            //ccheck query params
            //we create a generic getByName because movies and characters will use this request.        
            const queryKeys = Object.keys(req.query).length;
            if(queryKeys > 0){
                if(req.query.name) characters = await this.characterService.getByName(req.query.name);
                if(req.query.age) characters = await this.characterService.getCharactersByAge(req.query.age);
                if(req.query.movies) characters = await this.characterService.getCharactersByMovie(req.query.movies);
            }else{
                characters = await this.characterService.getAll();
            }
            if(characters instanceof Error) throw {msg:'Movie not found'}
            if(!characters) throw {msg:'Characteres not found'}
            characters = characters.map(ch => mapper(CharacterDto,ch))
            return res.send(characters);
        } catch (error) {
            console.log(error)
            res.status(404).send(error.msg);
        }


    }
    async getOne(req,res){
        try {
            let id = req.params.id;
            let character = await this.characterService.getOne(id)
            if(!character) throw new Error();
            //character = mapper(CharacterDto,character);
            return res.send(character);
        } catch (error) {
            res.status(404).send('Character not found')
        }
    }
    async create(req,res){
        try {
            console.log('create')
            const path = req.file.path.replace(/\\/g, '/');
            let character = req.body; 
            character.image = path;
            const created = await this.characterService.create(character);
            if(!created) throw new Error()
            const show = mapper(CharacterDto,created);
            return res.status(200).send(show)
        } catch (error) {
            console.log(error)
            res.status(401).send('Character not found')

        }

    }
    async delete(req,res){
        try {
            const {id} = req.params;
            const deleted = await this.characterService.delete(id);
            if(!deleted) throw new Error()
            return res.send(deleted)
        } catch (error) {
            res.status(404).send('Character not found')

        }

    }
    async update(req,res){
        try {
            const body = req.body; 
            const {id} = req.params;    
            const path = req.file.path.replace(/\\/g, '/');
            let character = req.body; 
            character.image = path;
            let updated = await this.characterService.update(id,character); 
            if (!updated) throw new Error()
            updated = mapper(CharacterDto,updated)
            return res.status(200).send(updated);
        } catch (error) {
            res.status(404).send('Character not found')
        }

    }




}

module.exports = CharacterController;
