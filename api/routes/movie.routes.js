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
module.exports = function({MovieController,Auth}){
    const router = Router();
    router.get('/',MovieController.getAll.bind(MovieController));
    router.get('/:id',MovieController.getOne.bind(MovieController));
    router.post('/',[upload.single('image'),Auth.verifyToken,Auth.isAdmin.bind(Auth)],
      MovieController.create.bind(MovieController));
    router.put('/:id',[upload.single('image'),Auth.verifyToken,Auth.isAdmin.bind(Auth)],
      MovieController.update.bind(MovieController));
    router.delete('/:id',[Auth.verifyToken,Auth.isAdmin.bind(Auth)],
    MovieController.delete.bind(MovieController));

    return router
} 