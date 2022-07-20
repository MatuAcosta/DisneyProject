const {GenreDto} = require('../dtos/index');
const mapper = require('automapper-js');
class GenreController { 

    constructor({GenreService}){
        this.genreService = GenreService;
    }

    async getAll(req,res){
        try {
            let genres = await this.genreService.getAll();
            if(!genres) throw new Error();
            genres = genres.map(gr => mapper(GenreDto,gr))
            return res.send(genres);
        } catch (error) {
            res.send('genres not found');
        }


    }
    async getOne(req,res){
        try {
            let id = req.params.id;
            let genre = await this.genreService.getOne(id)
            if(!genre) throw new Error();
            genre = mapper(GenreDto,genre);
            return res.send(genre);
        } catch (error) {
            res.status(404).send('genre not found')
        }
    }
    async create(req,res){
        try {
            const path = req.file.path.replace(/\\/g, '/');
            let genre = req.body; 
            genre.image = path;
            const created = await this.genreService.create(genre);
            if(!created) throw new Error()
            const show = mapper(GenreDto,created);
            return res.status(200).send(show)
        } catch (error) {
            console.log(error)
            res.status(401).send('Genre not found')

        }

    }
    async delete(req,res){
        try {
            const {id} = req.params;
            const deleted = await this.genreService.delete(id);
            if(!deleted) throw new Error()
            return res.status(200).send(deleted)
        } catch (error) {
            console.log(error)
            res.status(404).send('Genre not found')

        }

    }
    async update(req,res){
        try {
            const {id} = req.params;    
            const path = req.file.path.replace(/\\/g, '/');
            let genre = req.body; 
            genre.image = path;
            let updated = await this.genreService.update(id,genre); 
            if (!updated) throw new Error()
            updated = mapper(GenreDto,updated)
            return res.status(200).send(updated);
        } catch (error) {
            console.log(error)
            res.status(404).send('Genre not found')
        }

    }


}

module.exports = GenreController