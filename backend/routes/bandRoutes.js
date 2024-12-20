const express = require('express');
const router = express.Router();
const multer = require('multer')
const bandController = require('../controllers/bandControllers')

// multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

// multer upload configuration
const upload = multer({ storage: storage })

// routes
router.get('/', bandController.getAllBands)
router.get('/:id', bandController.getBandById)
router.post('/', upload.single('image'), bandController.addBand)
router.put('/:id', upload.single('image'), bandController.updateBand)
router.delete('/:id', bandController.deleteBand)

module.exports = router;