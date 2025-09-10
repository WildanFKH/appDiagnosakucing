const mongoose = require('mongoose');

const GejalaSchema = new mongoose.Schema({
  kode: {
    type: String,
    required: true,
    unique: true
  },
  nama: {
    type: String,
    required: true
  },
  deskripsi: {
    type: String,
    default: ''
  }
});

module.exports = mongoose.model('Gejala', GejalaSchema);
