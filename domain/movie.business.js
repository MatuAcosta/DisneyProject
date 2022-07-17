const BaseService = require("../services/base.service");
const Movie = require('./domainModels/movie')
class MovieBusiness extends BaseService{
    constructor({MovieRepository}){
        super({MovieRepository},Movie)
    }
}

module.exports = MovieBusiness