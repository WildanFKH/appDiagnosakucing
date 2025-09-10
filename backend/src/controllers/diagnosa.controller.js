const Diagnosa = require("../models/diagnosa.model");
const GejalaPenyakit = require("../models/gejalaPenyakit.model");
const Gejala = require("../models/gejala.model");

// Fungsi menghitung kecocokan berdasarkan gejala yang dipilih
const hitungKecocokan = async (gejalaUser) => {
  try {
    const semuaRelasi = await GejalaPenyakit.find()
      .populate("penyakit")
      .populate("gejala");

    // Validasi hasil populate
    if (!semuaRelasi || semuaRelasi.length === 0) {
      throw new Error("Tidak ada data relasi gejala-penyakit ditemukan");
    }

    const penyakitMap = new Map();

    for (const relasi of semuaRelasi) {
      // Validasi populate hasil - ini yang penting!
      if (!relasi.penyakit || !relasi.penyakit._id) {
        console.warn(
          "Relasi dengan penyakit null ditemukan, skip:",
          relasi._id
        );
        continue; // Skip relasi yang penyakitnya null
      }

      if (!relasi.gejala || !Array.isArray(relasi.gejala)) {
        console.warn(
          "Relasi dengan gejala null/invalid ditemukan, skip:",
          relasi._id
        );
        continue; // Skip relasi yang gejalanya null
      }

      const penyakitId = relasi.penyakit._id.toString();

      // Filter gejala yang valid (tidak null)
      const gejalaRelasi = relasi.gejala
        .filter((g) => g && g._id) // Filter gejala yang tidak null
        .map((g) => g._id.toString());

      if (gejalaRelasi.length === 0) {
        console.warn("Tidak ada gejala valid untuk penyakit:", penyakitId);
        continue; // Skip jika tidak ada gejala valid
      }

      const cocok = gejalaUser.filter((g) =>
        gejalaRelasi.includes(g.toString())
      );
      const persentase = (cocok.length / gejalaRelasi.length) * 100;

      if (
        !penyakitMap.has(penyakitId) ||
        persentase > penyakitMap.get(penyakitId).kecocokan
      ) {
        penyakitMap.set(penyakitId, {
          penyakit: relasi.penyakit,
          kecocokan: Math.round(persentase),
        });
      }
    }

    // Ambil hasil terbaik
    let hasilTerbaik = { penyakit: null, kecocokan: 0 };
    for (const hasil of penyakitMap.values()) {
      if (hasil.kecocokan > hasilTerbaik.kecocokan) {
        hasilTerbaik = {
          penyakit: hasil.penyakit._id,
          kecocokan: hasil.kecocokan,
        };
      }
    }

    return hasilTerbaik;
  } catch (error) {
    console.error("Error dalam hitungKecocokan:", error);
    throw error;
  }
};

// POST /api/diagnosa
exports.create = async (req, res) => {
  try {
    const { namaPeliharaan, jenisKelamin, umur, berat, gejalaIds } = req.body;

    // Validasi input
    if (!gejalaIds || !Array.isArray(gejalaIds) || gejalaIds.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Gejala harus diisi minimal 1",
      });
    }

    // Validasi gejala exists di database
    const gejalaExists = await Gejala.find({ _id: { $in: gejalaIds } });
    if (gejalaExists.length !== gejalaIds.length) {
      return res.status(400).json({
        success: false,
        message: "Beberapa gejala tidak ditemukan di database",
      });
    }

    const hasilDiagnosa = await hitungKecocokan(gejalaIds);

    if (!hasilDiagnosa.penyakit) {
      return res.status(400).json({
        success: false,
        message: "Tidak ditemukan penyakit yang cocok berdasarkan gejala",
      });
    }

    const newDiagnosa = new Diagnosa({
      namaPeliharaan,
      jenisKelamin,
      umur,
      berat,
      gejalaIds,
      hasilDiagnosa,
    });

    const saved = await newDiagnosa.save();

    res.status(201).json({
      success: true,
      data: saved,
    });
  } catch (err) {
    console.error("Error saat membuat diagnosa:", err);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat diagnosa",
      error: process.env.NODE_ENV === "development" ? err.message : undefined,
    });
  }
};

// PUT /api/diagnosa/:id - Update diagnosa
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { namaPeliharaan, jenisKelamin, umur, berat, gejalaIds } = req.body;

    // Validasi input
    if (!gejalaIds || !Array.isArray(gejalaIds) || gejalaIds.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Gejala harus diisi minimal 1",
      });
    }

    // Validasi gejala exists di database
    const gejalaExists = await Gejala.find({ _id: { $in: gejalaIds } });
    if (gejalaExists.length !== gejalaIds.length) {
      return res.status(400).json({
        success: false,
        message: "Beberapa gejala tidak ditemukan di database",
      });
    }

    // Hitung ulang diagnosa dengan gejala baru
    const hasilDiagnosa = await hitungKecocokan(gejalaIds);

    if (!hasilDiagnosa.penyakit) {
      return res.status(400).json({
        success: false,
        message: "Tidak ditemukan penyakit yang cocok berdasarkan gejala",
      });
    }

    const updatedDiagnosa = await Diagnosa.findByIdAndUpdate(
      id,
      {
        namaPeliharaan,
        jenisKelamin,
        umur,
        berat,
        gejalaIds,
        hasilDiagnosa,
        updatedAt: new Date()
      },
      { new: true }
    )
      .populate("gejalaIds")
      .populate("hasilDiagnosa.penyakit");

    if (!updatedDiagnosa) {
      return res.status(404).json({
        success: false,
        message: "Diagnosa tidak ditemukan",
      });
    }

    res.json({
      success: true,
      data: updatedDiagnosa,
      message: "Diagnosa berhasil diperbarui",
    });
  } catch (err) {
    console.error("Error update diagnosa:", err);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat memperbarui diagnosa",
      error: process.env.NODE_ENV === "development" ? err.message : undefined,
    });
  }
};

// DELETE /api/diagnosa/:id - Delete diagnosa
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedDiagnosa = await Diagnosa.findByIdAndDelete(id);

    if (!deletedDiagnosa) {
      return res.status(404).json({
        success: false,
        message: "Diagnosa tidak ditemukan",
      });
    }

    res.json({
      success: true,
      message: "Diagnosa berhasil dihapus",
      data: deletedDiagnosa,
    });
  } catch (err) {
    console.error("Error delete diagnosa:", err);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat menghapus diagnosa",
    });
  }
};

// GET /api/diagnosa
exports.getAll = async (req, res) => {
  try {
    const data = await Diagnosa.find()
      .populate("gejalaIds")
      .populate("hasilDiagnosa.penyakit")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      data: data,
    });
  } catch (err) {
    console.error("Error getDiagnosa:", err);
    res.status(500).json({
      success: false,
      message: "Gagal memuat data diagnosa",
    });
  }
};

// GET /api/diagnosa/:id - Get single diagnosa by ID
exports.getById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const data = await Diagnosa.findById(id)
      .populate("gejalaIds")
      .populate("hasilDiagnosa.penyakit");

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Diagnosa tidak ditemukan",
      });
    }

    res.json({
      success: true,
      data: data,
    });
  } catch (err) {
    console.error("Error getById diagnosa:", err);
    res.status(500).json({
      success: false,
      message: "Gagal memuat data diagnosa",
    });
  }
};
