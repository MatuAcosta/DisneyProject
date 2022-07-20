const Router = require('express');
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/genres')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = '.png'
      cb(null, file.originalname + uniqueSuffix)
    }
  })
const upload = multer({storage:storage});
module.exports = function({GenreController}){
    const router = Router();
    router.get('/',GenreController.getAll.bind(GenreController));
    router.get('/:id',GenreController.getOne.bind(GenreController));
    router.post('/',upload.single('image'),GenreController.create.bind(GenreController));
    router.put('/:id',upload.single('image'),GenreController.update.bind(GenreController));
    router.delete('/:id',GenreController.delete.bind(GenreController));

    return router
}