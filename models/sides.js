const mongoose = require('mongoose')
const { Schema, model } = mongoose

const sidesSchema = new Schema({
  name: {type: String, required: false},
  restaurant: {type: String, required: false},
  description: {type: String, required: false},
  img: {type: String, required: false},
  price: {type: Number, required: false},
  rating: {type: Number, required: false},
  review: {type: String, required: false}
})

const Sides = model('Sides', sidesSchema)

module.exports = Sides
