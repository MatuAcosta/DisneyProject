const {Router} = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
module.exports = function({CharacterRoutes,MovieRoutes,GenreRoutes}){
    const router = Router();
    const apiRoute = Router();
    apiRoute
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ 
        extended: true 
     }))
    .use(cors())

    apiRoute.use('/characters',CharacterRoutes)
    apiRoute.use('/movies',MovieRoutes)
    apiRoute.use('/genres',GenreRoutes)

    router.use('/api',apiRoute);
    return router;
}