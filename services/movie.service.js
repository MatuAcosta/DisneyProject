const BaseService = require("./base.service");

class MovieService extends BaseService {
    constructor({MovieBusiness,GenreService}){
        super(MovieBusiness)
        this.genreService = GenreService

    }

    checkScore(score){
        if(score > 5 || score < 1) {
            return false
        }
        return true
    }


    //we catch genreId by receiving his name, if the genre doesnt exist we save null.
    //this is valid for create and update.
     async create(movie) {
        if(!this.checkScore(movie.score)){
            return new Error('Score cannot be higher than five and lower than 1');
        }
        let genreId = await this.genreService.findByName(movie.genre);
        movie.genreId = genreId
        return await super.create(movie)
    } 
    async update(id,movie) {
        if(!this.checkScore(movie.score)){
            return new Error('Score cannot be higher than five and lower than 1');
        }
        let genreId = await this.genreService.findByName(movie.genre);
        movie.genreId = genreId
        return await super.update(id,movie)
    }

}

module.exports = MovieService