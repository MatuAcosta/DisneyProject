const Router = require('express');
//const {SignUp} = require('../middlewares');
module.exports = function({AuthController,Auth}){
    const router = Router();
    router.post('/',
    AuthController.signIn.bind(AuthController));
    return router
} 