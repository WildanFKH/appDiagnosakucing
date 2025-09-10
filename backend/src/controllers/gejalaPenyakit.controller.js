const GejalaPenyakit = require('../models/gejalaPenyakit.model');

// Dapatkan semua relasi gejala-penyakit
exports.getAll = async (req, res) => {
  try {
    const data = await GejalaPenyakit.find()
      .populate('penyakit', 'nama')   // populate nama penyakit saja
      .populate('gejala', 'nama deskripsi'); // populate nama dan deskripsi gejala
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Dapatkan relasi berdasar ID
exports.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await GejalaPenyakit.findById(id)
      .populate('penyakit', 'nama')
      .populate('gejala', 'nama deskripsi');
    if (!data) return res.status(404).json({ message: 'Relasi tidak ditemukan' });

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Buat relasi baru dengan bobot
exports.create = async (req, res) => {
  try {
    const { penyakit, gejala, bobot } = req.body;
    const newRelasi = new GejalaPenyakit({ penyakit, gejala, bobot });
    await newRelasi.save();

    res.status(201).json({ message: 'Relasi gejala-penyakit berhasil dibuat', data: newRelasi });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Update relasi berdasarkan ID
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { penyakit, gejala, bobot } = req.body;

    const updatedRelasi = await GejalaPenyakit.findByIdAndUpdate(
      id,
      { penyakit, gejala, bobot },
      { new: true }
    );

    if (!updatedRelasi) return res.status(404).json({ message: 'Relasi tidak ditemukan' });

    res.json({ message: 'Relasi berhasil diupdate', data: updatedRelasi });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Hapus relasi berdasarkan ID
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await GejalaPenyakit.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'Relasi tidak ditemukan' });

    res.json({ message: 'Relasi berhasil dihapus' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
