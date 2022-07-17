const BaseRepository = require("./base.repository");

class MovieRepository extends BaseRepository{
    constructor({db}){
        super(db,'Movie')
    }
}

module.exports = MovieRepository;