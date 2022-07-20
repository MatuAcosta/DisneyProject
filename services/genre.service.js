const BaseService = require("./base.service");

class GenreService extends BaseService {
    constructor({GenreBusiness}){
        super(GenreBusiness)
        this.genreBusiness = GenreBusiness
    }

    async findByName(name){
        return await this.genreBusiness.findByName(name)
    }
}

module.exports = GenreService
