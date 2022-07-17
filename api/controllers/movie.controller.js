const {MovieDto} = require('../dtos/index');
const mapper = require('automapper-js');
class MovieController { 

    constructor({MovieService}){
        this.movieService = MovieService;
    }

    async getAll(req,res){
        try {
            let movies = await this.movieService.getAll();
            if(!movies) throw new Error();
            movies = movies.map(mv => mapper(MovieDto,mv))
            return res.send(movies);
        } catch (error) {
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
            const {body} = req;
            const created = await this.movieService.create(body);
            if(!created) throw new Error()
            const show = mapper(MovieDto,created);
            return res.status(201).send(show)
        } catch (error) {
            res.status(401).send('Movie not found')

        }

    }
    async delete(req,res){
        try {
            const {id} = req.params;
            const deleted = await this.movieService.delete(id);
            console.log(typeof deleted)
            if(!deleted) throw new Error()
            return res.send(deleted)
        } catch (error) {
            res.status(404).send('Movie not found')

        }

    }
    async update(req,res){
        try {
            const {body} = req; 
            const {id} = req.params;    
            const updated = await this.movieService.update(id,body); 
            if (!updated) throw new Error()
            return res.status(204).send(updated);
        } catch (error) {
            res.status(404).send('Movie not found')
        }

    }
}
module.exports = MovieController