class Movie {
    constructor (){
        this.title = ""
        this.creation_date = new Date();
        this.score = 0
        this.image = "";
        this.genreId = 0;
    }
}
module.exports = Movie

/* title: DataTypes.STRING,
creation_date: DataTypes.DATE,
score: DataTypes.INTEGER,
image: DataTypes.STRING */