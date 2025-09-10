const mongoose = require('mongoose');

const penyakitSchema = new mongoose.Schema({
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
    required: true
  },
  solusi: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Penyakit', penyakitSchema);
