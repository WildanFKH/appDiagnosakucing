<template>
  <div class="diagnosa-container">
    <!-- Header Section -->
    <div class="diagnosa-header">
      <div class="header-icon">
        <div class="icon-wrapper">
          🏥
        </div>
      </div>
      <h1 class="page-title">Form Diagnosa Kesehatan</h1>
      <p class="page-subtitle">Isi data lengkap untuk mendapatkan diagnosa yang akurat</p>
    </div>

    <div class="form-wrapper">
      <form @submit.prevent="submitDiagnosa" class="diagnosa-form">
        <!-- Progress Indicator -->
        <div class="progress-indicator">
          <div class="progress-step active">
            <div class="step-number">1</div>
            <div class="step-label">Data Peliharaan</div>
          </div>
          <div class="progress-line"></div>
          <div class="progress-step active">
            <div class="step-number">2</div>
            <div class="step-label">Gejala</div>
          </div>
        </div>

        <!-- Biodata Peliharaan Section -->
        <div class="form-section">
          <div class="section-header">
            <div class="section-icon">🐱</div>
            <h3>Data Peliharaan</h3>
          </div>
          
          <div class="form-grid">
            <div class="form-group">
              <label class="form-label">
                <span class="label-text">Nama Peliharaan</span>
                <span class="required">*</span>
              </label>
              <div class="input-wrapper">
                <input 
                  v-model="form.namaPeliharaan" 
                  type="text"
                  class="form-input"
                  placeholder="Nama kucing kesayangan"
                  required 
                />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">
                <span class="label-text">Jenis Kelamin</span>
                <span class="required">*</span>
              </label>
              <div class="input-wrapper">
                <select v-model="form.jenisKelamin" class="form-select" required>
                  <option value="">Pilih Jenis Kelamin</option>
                  <option value="Jantan">♂ Jantan</option>
                  <option value="Betina">♀ Betina</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">
                <span class="label-text">Umur</span>
                <span class="required">*</span>
              </label>
              <div class="input-wrapper">
                <input 
                  type="number" 
                  v-model="form.umur" 
                  class="form-input"
                  placeholder="Umur dalam bulan"
                  min="1"
                  required 
                />
                <span class="input-suffix">bulan</span>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">
                <span class="label-text">Berat Badan</span>
                <span class="required">*</span>
              </label>
              <div class="input-wrapper">
                <input 
                  type="number" 
                  step="0.1" 
                  v-model="form.berat" 
                  class="form-input"
                  placeholder="Berat dalam kg"
                  min="0.1"
                  required 
                />
                <span class="input-suffix">kg</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Gejala Section -->
        <div class="form-section">
          <div class="section-header">
            <div class="section-icon">🩺</div>
            <h3>Pilih Gejala yang Dialami</h3>
            <p class="section-description">Centang semua gejala yang terlihat pada kucing Anda</p>
          </div>
          
          <div class="gejala-grid">
            <div 
              v-for="g in gejalaList" 
              :key="g._id"
              class="gejala-item"
              :class="{ 'selected': form.gejalaIds.includes(g._id) }"
              @click="toggleGejala(g._id)"
            >
              <div class="gejala-checkbox">
                <input 
                  type="checkbox" 
                  :value="g._id" 
                  v-model="form.gejalaIds"
                  :id="`gejala-${g._id}`"
                />
                <div class="custom-checkbox">
                  <svg viewBox="0 0 24 24" fill="currentColor" class="check-icon">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
              </div>
              <label :for="`gejala-${g._id}`" class="gejala-label">
                {{ g.nama }}
              </label>
            </div>
          </div>

          <div v-if="form.gejalaIds.length > 0" class="selected-count">
            <span class="count-badge">{{ form.gejalaIds.length }}</span>
            gejala dipilih
          </div>
        </div>

        <!-- Submit Button -->
        <div class="form-actions">
          <button type="submit" class="submit-button" :disabled="!isFormValid">
            <div class="button-content">
              <svg viewBox="0 0 24 24" fill="currentColor" class="button-icon">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>Mulai Diagnosa</span>
            </div>
          </button>
          
          <p class="form-disclaimer">
            💡 Sistem ini memberikan diagnosa awal. Konsultasikan dengan dokter hewan untuk penanganan lebih lanjut.
          </p>
        </div>
      </form>

      <!-- Hasil Diagnosa -->
      <div v-if="hasil" class="hasil-section">
        <div class="hasil-header">
          <div class="hasil-icon">✅</div>
          <h3>Hasil Diagnosa</h3>
        </div>
        
        <div class="hasil-content">
          <div class="hasil-card">
            <div class="hasil-item">
              <div class="hasil-label">Penyakit Terdeteksi:</div>
              <div class="hasil-value primary">{{ hasil.penyakit.nama }}</div>
            </div>
            
            <div class="hasil-item">
              <div class="hasil-label">Deskripsi:</div>
              <div class="hasil-value">{{ hasil.penyakit.deskripsi }}</div>
            </div>
            
            <div class="hasil-item">
              <div class="hasil-label">Tingkat Kecocokan:</div>
              <div class="hasil-value">
                <span class="kecocokan-badge">{{ hasil.kecocokan }}</span>
                gejala cocok
              </div>
            </div>
          </div>
          
          <div class="hasil-actions">
            <button @click="resetForm" class="secondary-button">
              Diagnosa Lagi
            </button>
            <router-link to="/pasien/diagnosa/list" class="primary-button">
              Lihat Riwayat
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div dir="rtl">
      <router-link
        to="/pasien/homepage"
        class="action-button absolute start-0 top-10"
      >
        Kembali
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script>
import gejalaAPI from "@/api/admin/gejala.service";
import diagnosaAPI from "@/api/pasien/diagnosa.service";

export default {
  name: "DiagnosaForm",
  data() {
    return {
      form: {
        namaPeliharaan: "",
        jenisKelamin: "",
        umur: "",
        berat: "",
        gejalaIds: [],
      },
      gejalaList: [],
      hasil: null,
    };
  },
  computed: {
    isFormValid() {
      return this.form.namaPeliharaan && 
             this.form.jenisKelamin && 
             this.form.umur && 
             this.form.berat && 
             this.form.gejalaIds.length > 0;
    }
  },
  mounted() {
    this.fetchGejala();
  },
  methods: {
    fetchGejala() {
      gejalaAPI.getAll().then((res) => {
        this.gejalaList = res.data;
      }).catch(() => {
        alert("Gagal memuat data gejala");
      });
    },
    
    toggleGejala(gejalaId) {
      const index = this.form.gejalaIds.indexOf(gejalaId);
      if (index > -1) {
        this.form.gejalaIds.splice(index, 1);
      } else {
        this.form.gejalaIds.push(gejalaId);
      }
    },
    
    submitDiagnosa() {
  if (!this.isFormValid) return;

  // Konfirmasi sebelum submit
  if (!confirm("Apakah Anda yakin ingin melakukan diagnosa sekarang?")) return;

  diagnosaAPI
    .create(this.form)
    .then((res) => {
      this.hasil = res.data.hasil;
      

      // Alert sukses
      alert("Diagnosa berhasil dilakukan!");

      // Scroll ke hasil section
      this.$nextTick(() => {
        const hasilSection = document.querySelector('.hasil-section');
        if (hasilSection) {
          hasilSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
      this.resetForm();
      this.$router.push("/pasien/diagnosa/list");
    })
    .catch(() => {
      alert("Gagal melakukan diagnosa. Silakan coba lagi.");
    });
},

    
    resetForm() {
      this.form = {
        namaPeliharaan: "",
        jenisKelamin: "",
        umur: "",
        berat: "",
        gejalaIds: [],
      };
      this.hasil = null;
    }
  },
};
</script>

<style scoped>
.diagnosa-container {
  margin: 0 auto;
}

/* Header */
.diagnosa-header {
  text-align: center;
  margin-bottom: 20px;
}

.header-icon {
  margin-bottom: 24px;
}

.icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 24px;
  font-size: 2.5rem;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 12px;
}

.page-subtitle {
  font-size: 1.125rem;
  color: #64748b;
  margin: 0;
}

/* Form Wrapper */
.form-wrapper {
  background: white;
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: 1px solid #f1f5f9;
}

.diagnosa-form {
  padding: 40px;
}

/* Progress Indicator */
.progress-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 48px;
  padding: 24px;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-radius: 16px;
}

.progress-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.step-number {
  width: 40px;
  height: 40px;
  border-radius: 40%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
}

.step-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #1a202c;
}

.progress-line {
  width: 500px;
  height: 2px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  margin: 0 16px;
}

/* Form Sections */
.form-section {
  margin-bottom: 40px;
  padding-bottom: 32px;
  border-bottom: 1px solid #f1f5f9;
}

.form-section:last-of-type {
  border-bottom: none;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}

.section-icon {
  font-size: 1.5rem;
}

.section-header h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0;
}

.section-description {
  color: #64748b;
  font-size: 0.875rem;
  margin: 8px 0 0 44px;
}

/* Form Grid */
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

.action-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.action-button {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.action-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.action-button:hover {
  transform: translateX(4px);
}

.action-button svg {
  width: 16px;
  height: 16px;
}

@media (max-width: 640px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
}

/* Form Elements */
.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 600;
  color: #374151;
  font-size: 0.875rem;
}

.required {
  color: #ef4444;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: 16px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.input-suffix {
  position: absolute;
  right: 16px;
  color: #64748b;
  font-size: 0.875rem;
  font-weight: 500;
  pointer-events: none;
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
}

/* Gejala Grid */
.gejala-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}

.gejala-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: white;
}

.gejala-item:hover {
  border-color: #667eea;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
}

.gejala-item.selected {
  border-color: #667eea;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
}

.gejala-checkbox {
  position: relative;
  flex-shrink: 0;
}

.gejala-checkbox input[type="checkbox"] {
  opacity: 0;
  position: absolute;
  width: 20px;
  height: 20px;
}

.custom-checkbox {
  width: 20px;
  height: 20px;
  border: 2px solid #e5e7eb;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  background: white;
}

.gejala-item.selected .custom-checkbox {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-color: #667eea;
}

.check-icon {
  width: 12px;
  height: 12px;
  color: white;
  opacity: 0;
  transform: scale(0);
  transition: all 0.3s ease;
}

.gejala-item.selected .check-icon {
  opacity: 1;
  transform: scale(1);
}

.gejala-label {
  flex: 1;
  font-size: 0.875rem;
  color: #374151;
  cursor: pointer;
  line-height: 1.4;
}

.selected-count {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%);
  border-radius: 12px;
  font-size: 0.875rem;
  color: #1565c0;
  font-weight: 600;
}

.count-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  height: 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0 8px;
}

/* Form Actions */
.form-actions {
  text-align: center;
  padding-top: 32px;
}

.submit-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 16px;
  padding: 20px 40px;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
  margin-bottom: 16px;
  min-width: 200px;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(102, 126, 234, 0.4);
}

.submit-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.button-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.button-icon {
  width: 20px;
  height: 20px;
}

.form-disclaimer {
  color: #64748b;
  font-size: 0.875rem;
  margin: 0;
  padding: 0 24px;
  line-height: 1.5;
}

/* Hasil Section */
.hasil-section {
  margin-top: 40px;
  padding: 32px;
  background: linear-gradient(135deg, #f0f9ff 0%, #f8fafc 100%);
  border-radius: 20px;
  border: 1px solid #e0f2fe;
}

.hasil-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
  justify-content: center;
}

.hasil-icon {
  font-size: 2rem;
}

.hasil-header h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0;
}

.hasil-card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid #f1f5f9;
}

.hasil-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
}

.hasil-item:last-child {
  margin-bottom: 0;
}

.hasil-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.hasil-value {
  font-size: 1rem;
  color: #374151;
  line-height: 1.5;
}

.hasil-value.primary {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a202c;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.kecocokan-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 24px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 700;
  padding: 0 8px;
  margin-right: 8px;
}

.hasil-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.primary-button,
.secondary-button {
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 0.875rem;
}

.primary-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.secondary-button {
  background: white;
  color: #374151;
  border: 2px solid #e5e7eb;
}

.primary-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.secondary-button:hover {
  border-color: #667eea;
  color: #667eea;
}

/* Responsive */
@media (max-width: 640px) {
  .diagnosa-container {
    padding: 16px;
  }
  
  .diagnosa-form {
    padding: 24px;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .progress-indicator {
    flex-direction: column;
    gap: 16px;
  }
  
  .progress-line {
    width: 2px;
    height: 30px;
    margin: 0;
  }
  
  .gejala-grid {
    grid-template-columns: 1fr;
  }
  
  .hasil-actions {
    flex-direction: column;
  }
}
</style>