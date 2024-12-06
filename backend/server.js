// server
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const bandsRoute = require('./routes/bands')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

mongoose.connect(process.env.MONGO_URI)

app.use('/bands', bandsRoute)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})