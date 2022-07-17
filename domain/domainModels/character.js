const { Blob } = require("buffer");

class Character{
    constructor(){
        this.id = 0;
        this.name = ""
        this.age = 0
        this.weight = 0
        this.history = ""
        this.mov_serie = []
        this.image = ""
    }
}

module.exports = Character;