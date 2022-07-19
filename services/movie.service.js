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

/*     async create(movie) {
        if(!this.checkScore(movie.score)){
            return new Error();
        }
        super.create(movie)
    } */
    async update(id,movie) {
        if(!this.checkScore(movie.score)){
            return new Error();
        }
        return super.update(id,movie)
    }

}

module.exports = MovieService