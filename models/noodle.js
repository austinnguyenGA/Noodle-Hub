const mongoose = require('mongoose')
const { Schema, model } = mongoose

const noodleSchema = new Schema({
  name: {type: String, required: true},
  restaurant: {type: String, required: true},
  description: {type: String, required: true},
  img: {type: String, required: true},
  price: {type: String, required: true},
  rating: {type: String, required: true},
  review: {type: String, required: true}
})

const Noodle = model('Noodle', noodleSchema)

module.exports = Noodle
