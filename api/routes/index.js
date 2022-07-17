const {Router} = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

module.exports = function({CharacterRoutes,MovieRoutes}){
    const router = Router();
    const apiRoute = Router();

    apiRoute
    .use(bodyParser.json())
    .use(cors())

    apiRoute.use('/characters',CharacterRoutes)
    apiRoute.use('/movies',MovieRoutes)

    router.use('/api',apiRoute);
    return router;
}