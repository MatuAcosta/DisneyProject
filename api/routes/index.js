const {Router} = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
module.exports = function({CharacterRoutes,MovieRoutes,GenreRoutes,RegisterRoutes,LoginRoutes}){
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
    apiRoute.use('/register',RegisterRoutes)
    apiRoute.use('/login',LoginRoutes)

    router.use('/api',apiRoute);
    return router;
}