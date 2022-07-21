const BaseService = require("../services/base.service");
const {Movie} = require('./domainModels')
class MovieBusiness extends BaseService{
    constructor({MovieRepository}){
        super(MovieRepository,Movie)
        this.movieRepository = MovieRepository
    }
    async getByGenre(genreId){
        return await this.movieRepository.getByGenre(genreId);
    }
    async getOrderedByCreationDate(order){
        return await this.movieRepository.getOrderedByCreationDate(order);
    }
    async getByCharacter(idCharacter){
        return await this.movieRepository.getByCharacter(idCharacter);
    }
}

module.exports = MovieBusiness