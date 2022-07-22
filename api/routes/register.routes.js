module.exports = function({MovieController}){
    const router = Router();
    router.get('/',MovieController.getAll.bind(MovieController));
    router.get('/:id',MovieController.getOne.bind(MovieController));
    router.post('/',upload.single('image'),MovieController.create.bind(MovieController));
    router.put('/:id',upload.single('image'),MovieController.update.bind(MovieController));
    router.delete('/:id',MovieController.delete.bind(MovieController));

    return router
} 