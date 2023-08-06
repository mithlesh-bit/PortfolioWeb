const mongoose = require('mongoose');

// Define the schema for the 'msgschema'
const msgSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
});

// Create the 'msgschema' model based on the schema
const msgschema = mongoose.model('msgschema', msgSchema);

module.exports = msgschema;
