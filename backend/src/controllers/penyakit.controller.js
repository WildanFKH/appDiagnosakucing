const Penyakit = require('../models/penyakit.model');

// Get all
exports.getAll = async (req, res) => {
  try {
    const data = await Penyakit.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Gagal mengambil data penyakit' });
  }
};

// Get by ID
exports.getById = async (req, res) => {
  try {
    const penyakit = await Penyakit.findById(req.params.id);
    if (!penyakit) return res.status(404).json({ message: 'Penyakit tidak ditemukan' });
    res.json(penyakit);
  } catch (err) {
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
};

// Create
exports.create = async (req, res) => {
  try {
    const { kode, nama, deskripsi, solusi } = req.body;
    const existing = await Penyakit.findOne({ kode });
    if (existing) return res.status(400).json({ message: 'Kode sudah digunakan' });

    const penyakit = new Penyakit({ kode, nama, deskripsi, solusi });
    await penyakit.save();
    res.status(201).json({ message: 'Penyakit berhasil ditambahkan' });
  } catch (err) {
    res.status(500).json({ message: 'Gagal menambahkan penyakit' });
  }
};

// Update
exports.update = async (req, res) => {
  try {
    const { kode, nama, deskripsi, solusi } = req.body;
    const penyakit = await Penyakit.findByIdAndUpdate(req.params.id, {
      kode, nama, deskripsi, solusi
    }, { new: true });

    if (!penyakit) return res.status(404).json({ message: 'Penyakit tidak ditemukan' });

    res.json({ message: 'Penyakit berhasil diperbarui' });
  } catch (err) {
    res.status(500).json({ message: 'Gagal memperbarui penyakit' });
  }
};

// Delete
exports.delete = async (req, res) => {
  try {
    const penyakit = await Penyakit.findByIdAndDelete(req.params.id);
    if (!penyakit) return res.status(404).json({ message: 'Penyakit tidak ditemukan' });
    res.json({ message: 'Penyakit berhasil dihapus' });
  } catch (err) {
    res.status(500).json({ message: 'Gagal menghapus penyakit' });
  }
};
