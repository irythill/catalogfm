// necessary packages
const express = require('express');
const router = express.Router();
const multer = require('multer')
const Band = require('../models/Band');

// handle image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

const upload = multer({ storage: storage })

// routes endpoints for bands
// get all bands
router.get('/', async (req, res) => {
  try {
    const bands = await Band.find();
    res.json(bands);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// get specific band
router.get('/:id', async (req, res) => {
  try {
    const band = await Band.findById(req.params.id)
    if (!band)
      return res.status(404).json({ message: 'Band not found!'})
    res.json(band);
  } catch (err) {
    res.status(500).json({ message: err.message})
  }
})

// add band
router.post('/', upload.single('image'), async (req, res) => {
  const newBand = new Band({
    name: req.body.name,
    genre: req.body.genre,
    year: req.body.year,
    description: req.body.description,
    image: req.file.path
  })

  try {
    const savedBand = await newBand.save();
    res.status(201).json(savedBand);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
})

// update band
router.put('/:id', async (req, res) => {
  try {
    const updatedBand = await Band.findByIdAndUpdate(req.params.id, req.body, { new: true})
    if (!updatedBand)
      return res.status(404).json({ message: 'Band not found!'})
    res.json(updatedBand)
  } catch (err) {
    res.status(400).json({ message: err.message})
  }
})

// delete band
router.delete('/:id', async (req, res) => {
  try {
    const deletedBand = await Band.findByIdAndDelete(req.params.id)
    if (!deletedBand)
      return res.status(404).json({ message: 'Band not found!'})
  } catch (err) {
    res.status(500).json({ message: err.message})
  }
})

module.exports = router;