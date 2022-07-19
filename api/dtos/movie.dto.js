
class MovieDto{
    constructor(){
        this.image = "";
        this.title = "";
        this.creation_date = new Date().toDateString();
    }
}

module.exports = MovieDto