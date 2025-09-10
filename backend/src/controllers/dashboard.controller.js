const User = require('../models/user.model');
const Gejala = require('../models/gejala.model');
const Penyakit = require('../models/penyakit.model');

exports.getSummary = async (req, res) => {
  try {
    const [totalUser, totalGejala, totalPenyakit ] = await Promise.all([
      User.countDocuments(),
      Gejala.countDocuments(),
      Penyakit.countDocuments()
    ]);

    res.json({
      totalUser,
      totalGejala,
      totalPenyakit
    });
  } catch (error) {
    console.error('Error dashboard summary:', error);
    res.status(500).json({ message: 'Gagal memuat data dashboard' });
  }
};


