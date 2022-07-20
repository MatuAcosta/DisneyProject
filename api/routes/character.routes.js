const Router = require('express');
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/characters')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = '.png'
      cb(null, file.originalname + uniqueSuffix)
    }
  })
const upload = multer({storage:storage});
module.exports = function({CharacterController}){
    const router = Router();
    router.get('/',CharacterController.getAll.bind(CharacterController));
    router.get('/:id',CharacterController.getOne.bind(CharacterController));
    router.post('/',upload.single('image'),CharacterController.create.bind(CharacterController));
    router.put('/:id',upload.single('image'),CharacterController.update.bind(CharacterController));
    router.delete('/:id',CharacterController.delete.bind(CharacterController));

    return router
}