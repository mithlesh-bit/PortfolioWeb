const mongoose = require('mongoose');

// Define the schema for the 'msgschema'
const gtagschema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  tag: { type: String, required: true },
  url: { type: String},
  createdAt:{ type: String}
});

// Create the 'msgschema' model based on the schema
const gtagsmodel = mongoose.model('gtags', gtagschema);

module.exports = gtagsmodel;
