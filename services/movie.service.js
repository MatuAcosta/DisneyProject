const BaseService = require("./base.service");

class MovieService extends BaseService {
    constructor({MovieBusiness}){
        super(MovieBusiness)
    }

    async checkScore(score){
        if(score > 5) {
            return false
        }
        return true
    }

    async create(movie) {
        if(!this.checkScore(movie.score)){
            return new Error();
        }
        super.create(movie)
    }
    async update(movie) {
        if(!this.checkScore(movie.score)){
            return new Error();
        }
        super.update(movie)
    }

}

module.exports = MovieService