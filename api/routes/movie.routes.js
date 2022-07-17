const Router = require('express');

module.exports = function({MovieController}){
    const router = Router();
    router.get('/',MovieController.getAll.bind(MovieController));
    router.get('/:id',MovieController.getOne.bind(MovieController));
    router.post('/',MovieController.create.bind(MovieController));
    router.put('/:id',MovieController.update.bind(MovieController));
    router.delete('/:id',MovieController.delete.bind(MovieController));

    return router
} 