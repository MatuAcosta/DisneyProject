const {Genre} = require('./domainModels');
const BaseBusiness = require('./base.business')
class GenreBusiness extends BaseBusiness{
    constructor({GenreRepository}){
        super(GenreRepository,Genre)
        this.genreRepository = GenreRepository;
    }
    async findByName(name){
        return await this.genreRepository.findByName(name);
    }
}
module.exports = GenreBusiness