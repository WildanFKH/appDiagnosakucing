const Gejala = require('../models/gejala.model');

// GET semua gejala
exports.getAllGejala = async (req, res) => {
  try {
    const gejala = await Gejala.find();
    res.json(gejala);
  } catch (err) {
    res.status(500).json({ message: 'Gagal mengambil data gejala' });
  }
};

// GET gejala berdasarkan ID
exports.getGejalaById = async (req, res) => {
  try {
    const gejala = await Gejala.findById(req.params.id);
    if (!gejala) return res.status(404).json({ message: 'Gejala tidak ditemukan' });
    res.json(gejala);
  } catch (err) {
    res.status(500).json({ message: 'Gagal mengambil gejala' });
  }
};

// POST gejala baru
exports.createGejala = async (req, res) => {
  try {
    const { kode, nama, deskripsi } = req.body;
    const existing = await Gejala.findOne({ kode });
    if (existing) return res.status(400).json({ message: 'Kode gejala sudah ada' });

    const gejala = new Gejala({ kode, nama, deskripsi });
    await gejala.save();
    res.status(201).json({ message: 'Gejala berhasil ditambahkan', gejala });
  } catch (err) {
    res.status(500).json({ message: 'Gagal menambahkan gejala' });
  }
};

// PUT update gejala
exports.updateGejala = async (req, res) => {
  try {
    const { kode, nama, deskripsi } = req.body;
    const updated = await Gejala.findByIdAndUpdate(
      req.params.id,
      { kode, nama, deskripsi },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: 'Gejala tidak ditemukan' });

    res.json({ message: 'Gejala berhasil diupdate', gejala: updated });
  } catch (err) {
    res.status(500).json({ message: 'Gagal mengupdate gejala' });
  }
};

// DELETE gejala
exports.deleteGejala = async (req, res) => {
  try {
    const deleted = await Gejala.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Gejala tidak ditemukan' });

    res.json({ message: 'Gejala berhasil dihapus' });
  } catch (err) {
    res.status(500).json({ message: 'Gagal menghapus gejala' });
  }
};
