const {MovieDto} = require('../dtos/index');
const mapper = require('automapper-js');
class MovieController { 

    constructor({MovieService}){
        this.movieService = MovieService;
    }

    async getAll(req,res){
        try {
            let movies = null;
            //check query params
            if(req.query.name) movies = await this.movieService.getByName(req.query.name);
            if(req.query.genre) movies = await this.movieService.getByGenre(req.query.genre);
            if(req.query.order) movies = await this.movieService.getOrderedByCreationDate(req.query.order);
            if(!movies) movies = await this.movieService.getAll();
            
            
            if(!movies) throw new Error();
            movies = movies.map(mv => mapper(MovieDto,mv))
            return res.send(movies);
        } catch (error) {
            console.log(error)
            res.send('movies not found');
        }


    }
    async getOne(req,res){
        try {
            let id = req.params.id;
            let movie = await this.movieService.getOne(id)
            if(!movie) throw new Error();
            movie = mapper(MovieDto,movie);
            return res.send(movie);
        } catch (error) {
            res.status(404).send('Movie not found')
        }
    }
    async create(req,res){
        try {
            const path = req.file.path.replace(/\\/g, '/');
            let movie = req.body; 
            movie.image = path;
            const created = await this.movieService.create(movie);
            if(created instanceof Error) throw {message:"El score debe ser entre 1 y 5"};
            if (!created) throw {message:"No se pudo crear la pelicula"}
            const show = mapper(MovieDto,created);
            return res.status(201).send(show)
        } catch (error) {
            res.status(401).send(error.message)

        }

    }
    async delete(req,res){
        try {
            const {id} = req.params;
            const deleted = await this.movieService.delete(id);
            console.log(deleted)
            if(!deleted) throw new Error()
            return res.status(200).send("Movie deleted")
        } catch (error) {
            console.log(error)
            res.status(404).send('Movie not found')

        }

    }
    async update(req,res){
        try {
            const {id} = req.params;
            const path = req.file.path.replace(/\\/g, '/');
            let movie = req.body; 
            movie.image = path;   
            let updated = await this.movieService.update(id,movie); 
            if(updated instanceof Error) throw {message:"El score debe ser entre 1 y 5"};
            if (!updated) throw {message:"No se pudo crear la pelicula"}  
            updated = mapper(MovieDto,updated)
            return res.status(200).send(updated);
        } catch (error) {
            res.status(404).send(error.message)
        }

    }
}
module.exports = MovieController