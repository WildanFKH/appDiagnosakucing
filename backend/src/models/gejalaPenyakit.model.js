const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GejalaPenyakitSchema = new Schema({
  penyakit: {
    type: Schema.Types.ObjectId,
    ref: 'Penyakit',
    required: true
  },
  gejala: [{
    type: Schema.Types.ObjectId,
    ref: 'Gejala',
    required: true
  }],
  bobot: {
    type: Number,
    default: 1
  }
});

module.exports = mongoose.model('GejalaPenyakit', GejalaPenyakitSchema);
