// controller for CRUD operations
const Band = require('../models/Band')

// get all bands
exports.getAllBands = async (req, res) => {
  try {
    const bands = await Band.find()
    res.json(bands)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// get a single band by id
exports.getBandById = async (req, res) => {
  try {
    const band = await Band.findById(req.params.id)
    if (!band)
      return res.status(404).json({ message: 'Band not found!'})
    res.json(band)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// add a new band
exports.addBand = async (req, res) => {
  const newBand = new Band({
    name: req.body.name,
    genre: req.body.genre,
    year: req.body.year,
    description: req.body.description,
    image: req.file.path
  })

  try {
    const savedBand = await newBand.save()
    res.status(201).json(savedBand)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

// update a band
exports.updateBand = async (req, res) => {
  try {
    const updates = {
      name: req.body.name,
      genre: req.body.genre,
      year: req.body.year,
      description: req.body.description,
    }

    if (req.file) {
      updates.image = req.file.path
    }

    const updatedBand = await Band.findByIdAndUpdate(req.params.id, updates, {
      new: true
    })

    if (!updatedBand) {
      return res.status(404).json({ message: 'Band not found!'})
    }

    res.json(updatedBand)
} catch (err) {
    res.status(400).json({ message: err.message })
  }
}

// delete a band
exports.deleteBand = async (req, res) => {
  try {
    const deletedBand = await Band.findByIdAndDelete(req.params.id)
    if (!deletedBand)
      return res.status(404).json({ message: 'Band not found!'})
    res.json({ message: 'Band successfully deleted!'})
  } catch (err) {
    res.status(500).json( { message: err.message })
  }
}