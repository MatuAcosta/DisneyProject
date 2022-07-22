const Router = require('express');
//const {SignUp} = require('../middlewares');
module.exports = function({AuthController,SignUp}){
    const router = Router();
    router.post('/',[SignUp.checkDuplicateUsernameOrEmail.bind(SignUp),SignUp.checkRolesExisted.bind(SignUp)],
    AuthController.signUp.bind(AuthController));
    return router
} 