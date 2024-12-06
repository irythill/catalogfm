// bd model for band
const mongoose = require('mongoose')

const bandSchema = new mongoose.Schema({
  name: { type: String, required: true },
  genre: { type: String, required: true },
  year: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }
})

module.exports = mongoose.model('Band', bandSchema)