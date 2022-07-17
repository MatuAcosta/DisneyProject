const {CharacterDto} = require('../dtos/index');
const mapper = require('automapper-js');
class CharacterController { 

    constructor({CharacterService}){
        this.characterService = CharacterService;
    }

    async getAll(req,res){
        try {
            let characters = await this.characterService.getAll();
            if(!characters) throw new Error();
            characters = characters.map(ch => mapper(CharacterDto,ch))
            return res.send(characters);
        } catch (error) {
            res.send('Characters not found');
        }


    }
    async getOne(req,res){
        try {
            let id = req.params.id;
            let character = await this.characterService.getOne(id)
            if(!character) throw new Error();
            character = mapper(CharacterDto,character);
            return res.send(character);
        } catch (error) {
            res.status(404).send('Character not found')
        }
    }
    async create(req,res){
        try {
            const {body} = req;
            const created = await this.characterService.create(body);
            if(!created) throw new Error()
            const show = mapper(CharacterDto,created);
            return res.status(201).send(show)
        } catch (error) {
            res.status(401).send('Character not found')

        }

    }
    async delete(req,res){
        try {
            const {id} = req.params;
            const deleted = await this.characterService.delete(id);
            console.log(typeof deleted)
            if(!deleted) throw new Error()
            return res.send(deleted)
        } catch (error) {
            res.status(404).send('Character not found')

        }

    }
    async update(req,res){
        try {
            const {body} = req; 
            const {id} = req.params;    
            const updated = await this.characterService.update(id,body); 
            if (!updated) throw new Error()
            return res.status(204).send(updated);
        } catch (error) {
            res.status(404).send('Character not found')
        }

    }

    async getMoviesCharacter(req,res){
        try {
            const {id} = req.params;
            let movies = await this.characterService.getMoviesCharacter(id);
            if(!movies) throw new Error();
            //movies = movies.map(mv =>  mapper(MovieDto,mv))
            return res.status(204).send(movies);
        } catch (error) {
            res.status(404).send('No existe el actor')
        }
    }

}

module.exports = CharacterController;