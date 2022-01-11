const mongoose = requier('mongoose')
const { Schema, model } = mongoose

const noodleSchema = new Schema({
  name: {type: String, required: true},
  restaurant: {type: String, required: true},
  description: {type: String, required: true},
  img: {type: String, required: true},
  price: {type: Number, required: true},
  rating: {type: Number, required: true},
  wouldRecommend: {type: Boolean, required: true}
})

const Noodle = model('Noodle', storeSchema)

module.exports = Noodle
