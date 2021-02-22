const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create item schema
const ItemSchema = new Schema({
  title: String,
  answer: String,
  created: {
    type: Date,
    default: Date.now,
  },
  topic: String,
  userId: String,
});

module.exports = Item = mongoose.model('item', ItemSchema);
