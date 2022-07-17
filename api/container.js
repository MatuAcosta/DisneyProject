const  {asClass,createContainer,asFunction,asValue} = require('awilix');

const StartUp = require('./startup');
const Server = require('./server');
const Routes = require('./routes')
const db = require('../dal/models/index');


const {CharacterController} = require('./controllers')
const CharacterRoutes = require('./routes/character.routes');
const { CharacterService } = require('../services');
const {CharacterBusiness} = require('../domain');
const {CharacterRepository} = require('../dal/repositories')
const container = createContainer();




container.register({
    app: asClass(StartUp).singleton(),
    server: asClass(Server).singleton(),
    router: asFunction(Routes).singleton(),
    db:asValue(db)
})
.register({
    CharacterRoutes:asFunction(CharacterRoutes).singleton()
})
.register({
    CharacterController: asClass(CharacterController).singleton()
})

.register({
    CharacterService:asClass(CharacterService).singleton()
})
.register({
    CharacterBusiness:asClass(CharacterBusiness).singleton()
})
.register({
    CharacterRepository: asClass(CharacterRepository).singleton()
})
module.exports = container;