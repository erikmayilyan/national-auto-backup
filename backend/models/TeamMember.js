const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  cell: { type: String, required: true },
  email: { type: String, required: true }
});

const TeamModel = mongoose.model("team", TeamSchema);

module.exports = TeamModel;