const Router = require('express');
//const {SignUp} = require('../middlewares');
module.exports = function({AuthController,SignUp}){
    const router = Router();
    router.post('/register',[SignUp.checkDuplicateUsernameOrEmail.bind(SignUp),SignUp.checkRolesExisted.bind(SignUp)],
    AuthController.signUp.bind(AuthController));
    router.post('/login',
    AuthController.signIn.bind(AuthController));
    return router
} 