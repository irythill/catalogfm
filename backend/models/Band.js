// bd model for band
const mongoose = require('mongoose')

const bandSchema = new mongoose.Schema({
  name: String,
  genre: String,
  year: Number,
  description: String,
  image: String
})

module.exports = mongoose.model('Band', bandSchema)