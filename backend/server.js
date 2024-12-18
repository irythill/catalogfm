const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const bandsRoute = require('./routes/bandRoutes')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('MongoDB connected!')
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}

connectDB()

app.use('/bands', bandsRoute)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})