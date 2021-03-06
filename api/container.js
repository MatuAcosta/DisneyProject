const  {asClass,createContainer,asFunction,asValue} = require('awilix');

const StartUp = require('./startup');
const Server = require('./server');
const Routes = require('./routes')
const db = require('../dal/models/index');
const {SignUp} = require('./middlewares');
const {Auth} = require('./middlewares');

//character
const {CharacterController} = require('./controllers')
const CharacterRoutes = require('./routes/character.routes');
const { CharacterService } = require('../services');
const {CharacterBusiness} = require('../domain');
const {CharacterRepository} = require('../dal/repositories')

//movie
const {MovieController} = require('./controllers');
const MovieRoutes = require('./routes/movie.routes');
const {MovieService} = require('../services')
const {MovieBusiness}= require('../domain')
const {MovieRepository} = require('../dal/repositories')


//genre
const {GenreController} = require('./controllers');
const GenreRoutes = require('./routes/genre.route');
const {GenreService} = require('../services')
const {GenreBusiness}= require('../domain')
const {GenreRepository} = require('../dal/repositories')

//user
//const {GenreController} = require('./controllers');
//const GenreRoutes = require('./routes/genre.route');
const {UserService} = require('../services')
const {UserBusiness}= require('../domain')
const {UserRepository} = require('../dal/repositories')

//role
//const {GenreController} = require('./controllers');
//const GenreRoutes = require('./routes/genre.route');
const {RoleService} = require('../services')
const {RoleBusiness}= require('../domain')
const {RoleRepository} = require('../dal/repositories')

//auth
const {AuthController} = require("./controllers");
const AuthRoutes = require('./routes/auth.routes')

const container = createContainer();


container.register({
    app: asClass(StartUp).singleton(),
    server: asClass(Server).singleton(),
    router: asFunction(Routes).singleton(),
    db:asValue(db),
    SignUp: asClass(SignUp).singleton(),
    Auth: asClass(Auth).singleton()

})
.register({
    CharacterRoutes:asFunction(CharacterRoutes).singleton(),
    MovieRoutes: asFunction(MovieRoutes).singleton(),
    GenreRoutes: asFunction(GenreRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton(),
}) 
.register({
    CharacterController: asClass(CharacterController).singleton(),
    MovieController: asClass(MovieController).singleton(),
    GenreController: asClass(GenreController).singleton(),
    AuthController:asClass(AuthController).singleton()
})

.register({
    CharacterService:asClass(CharacterService).singleton(),
    MovieService: asClass(MovieService).singleton(),
    GenreService: asClass(GenreService).singleton(),
    UserService:asClass(UserService).singleton(),
    RoleService: asClass(RoleService).singleton()
})
.register({
    CharacterBusiness:asClass(CharacterBusiness).singleton(),
    MovieBusiness:asClass(MovieBusiness).singleton(),
    GenreBusiness: asClass(GenreBusiness).singleton(),
    UserBusiness: asClass(UserBusiness).singleton(),
    RoleBusiness:asClass(RoleBusiness).singleton()
})
.register({
    CharacterRepository: asClass(CharacterRepository).singleton(),
    MovieRepository: asClass(MovieRepository).singleton(),
    GenreRepository: asClass(GenreRepository).singleton(),
    UserRepository:asClass(UserRepository).singleton(),
    RoleRepository:asClass(RoleRepository).singleton()
})
module.exports = container;