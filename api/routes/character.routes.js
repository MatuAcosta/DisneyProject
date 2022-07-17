const Router = require('express');

module.exports = function({CharacterController}){
    const router = Router();
    router.get('/',CharacterController.getAll.bind(CharacterController));
    router.get('/:id',CharacterController.getOne.bind(CharacterController));
    router.post('/',CharacterController.create.bind(CharacterController));
    router.put('/:id',CharacterController.update.bind(CharacterController));
    router.delete('/:id',CharacterController.delete.bind(CharacterController));

    return router
}