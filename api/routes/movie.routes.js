const Router = require('express');
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/movies')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = '.png'
      cb(null, file.originalname + uniqueSuffix)
    }
  })
  const upload = multer({storage:storage});
module.exports = function({MovieController}){
    const router = Router();
    router.get('/',MovieController.getAll.bind(MovieController));
    router.get('/:id',MovieController.getOne.bind(MovieController));
    router.post('/',upload.single('image'),MovieController.create.bind(MovieController));
    router.put('/:id',upload.single('image'),MovieController.update.bind(MovieController));
    router.delete('/:id',MovieController.delete.bind(MovieController));

    return router
} 