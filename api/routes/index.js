const {Router} = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
module.exports = function({CharacterRoutes,MovieRoutes,GenreRoutes,AuthRoutes}){
    const router = Router();
    const apiRoute = Router();
    const authRoutes = Router();
    apiRoute
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ 
        extended: true 
     }))
    .use(cors())

    apiRoute.use('/characters',CharacterRoutes)
    apiRoute.use('/movies',MovieRoutes)
    apiRoute.use('/genres',GenreRoutes)
    apiRoute.use('/auth',AuthRoutes)

    router.use('/',apiRoute);
    return router;
}