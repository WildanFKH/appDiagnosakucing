const mongoose = require("mongoose");

const DiagnosaSchema = new mongoose.Schema({
  namaPeliharaan: {
    type: String,
    required: true,
  },
  jenisKelamin: {
    type: String,
    enum: ["Jantan", "Betina"],
    required: true,
  },
  umur: {
    type: Number,
    required: true,
  },
  berat: {
    type: Number,
    required: true,
  },
  gejalaIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Gejala",
      required: true,
    },
  ],
  hasilDiagnosa: {
    penyakit: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Penyakit",
      required: true,
    },
    kecocokan: {
      type: Number,
      required: true,
    },
  },
  tanggal: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Diagnosa", DiagnosaSchema);
