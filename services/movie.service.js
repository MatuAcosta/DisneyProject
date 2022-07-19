const BaseService = require("./base.service");

class MovieService extends BaseService {
    constructor({MovieBusiness}){
        super(MovieBusiness)
    }

    checkScore(score){
        if(score > 5 || score < 1) {
            return false
        }
        return true
    }

     async create(movie) {
        if(!this.checkScore(movie.score)){
            return new Error('Score cannot be higher than five and lower than 1');
        }
        return await super.create(movie)
    } 
    async update(id,movie) {
        if(!this.checkScore(movie.score)){
            return new Error('Score cannot be higher than five and lower than 1');
        }
        return await super.update(id,movie)
    }

}

module.exports = MovieService