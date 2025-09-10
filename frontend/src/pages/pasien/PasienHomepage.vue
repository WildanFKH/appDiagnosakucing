<template>
  <div class="homepage-container">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="welcome-badge">
          <span class="badge-text">Selamat Datang</span>
        </div>
        
        <h1 class="hero-title">
          Hi, <span class="user-name">Cat Lovers</span>! 👋
        </h1>
        
        <p class="hero-subtitle">
          Sistem pakar diagnosa penyakit kucing yang membantu Anda memahami kondisi kesehatan kucing kesayangan
        </p>
      </div>
      
      <div class="hero-visual">
        <div class="visual-card">
          <div class="cat-icon">
            🐱
          </div>
          <div class="pulse-ring"></div>
          <div class="pulse-ring delay-1"></div>
          <div class="pulse-ring delay-2"></div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <h2 class="section-title">Cara Menggunakan Sistem</h2>
      
      <div class="features-grid">
        <div class="feature-card" v-for="(step, index) in steps" :key="index">
          <div class="feature-number">{{ index + 1 }}</div>
          <div class="feature-icon">
            <component :is="step.icon"></component>
          </div>
          <h3 class="feature-title">{{ step.title }}</h3>
          <p class="feature-description">{{ step.description }}</p>
        </div>
      </div>
    </section>

    <!-- Quick Actions -->
    <section class="actions-section">
      <div class="actions-grid">
        <div class="action-card primary">
          <div class="action-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5 0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5c0-1.93 1.57-3.5 3.5-3.5zm7 13H5v-1.4c0-2 4-3.1 7-3.1s7 1.1 7 3.1V19z"/>
            </svg>
          </div>
          <div class="action-content">
            <h3>Mulai Diagnosa</h3>
            <p>Identifikasi gejala dan dapatkan hasil diagnosa</p>
            <router-link to="/pasien/diagnosa/form" class="action-button">
              Mulai Sekarang
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
            </router-link>
          </div>
        </div>
        
        <div class="action-card secondary">
          <div class="action-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
            </svg>
          </div>
          <div class="action-content">
            <h3>Riwayat Diagnosa</h3>
            <p>Lihat hasil diagnosa yang telah dilakukan</p>
            <router-link to="/pasien/diagnosa/list" class="action-button">
              Lihat Riwayat
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Tips Section -->
    <section class="tips-section">
      <div class="tips-container">
        <div class="tips-header">
          <div class="tips-icon">💡</div>
          <h3>Tips Penting</h3>
        </div>
        
        <div class="tips-grid">
          <div class="tip-item" v-for="(tip, index) in tips" :key="index">
            <div class="tip-check">✓</div>
            <p>{{ tip }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "WelcomePage",
  data() {
    return {
      steps: [
        {
          icon: 'DiagnosisIcon',
          title: 'Pilih Gejala',
          description: 'Masuk ke menu Diagnosa dan pilih gejala yang dialami kucing Anda'
        },
        {
          icon: 'ProcessIcon', 
          title: 'Proses Diagnosa',
          description: 'Sistem akan menganalisis gejala dan memberikan hasil diagnosa yang akurat'
        },
        {
          icon: 'HistoryIcon',
          title: 'Lihat Hasil',
          description: 'Dapatkan hasil diagnosa dan simpan riwayat untuk referensi di masa depan'
        }
      ],
      tips: [
        'Pastikan memilih gejala dengan tepat untuk hasil yang akurat',
        'Konsultasikan dengan dokter hewan jika gejala semakin parah',
        'Gunakan riwayat diagnosa untuk memantau perkembangan kesehatan',
        'Sistem ini sebagai panduan awal, bukan pengganti konsultasi medis'
      ]
    }
  },
  components: {
    DiagnosisIcon: {
      template: `
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5 0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5c0-1.93 1.57-3.5 3.5-3.5zm7 13H5v-1.4c0-2 4-3.1 7-3.1s7 1.1 7 3.1V19z"/>
        </svg>
      `
    },
    ProcessIcon: {
      template: `
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      `
    },
    HistoryIcon: {
      template: `
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
        </svg>
      `
    }
  }
};
</script>

<style scoped>
.homepage-container {
  max-width: 2000px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Hero Section */
.hero-section {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  align-items: center;
  margin-bottom: 80px;
  min-height: 500px;
}

@media (min-width: 768px) {
  .hero-section {
    grid-template-columns: 1fr 1fr;
    gap: 64px;
  }
}

.hero-content {
  text-align: center;
}

@media (min-width: 768px) {
  .hero-content {
    text-align: left;
  }
}

.welcome-badge {
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%);
  border: 1px solid #e1f5fe;
  border-radius: 24px;
  margin-bottom: 24px;
}

.badge-text {
  font-size: 14px;
  font-weight: 600;
  color: #1565c0;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 16px;
  line-height: 1.2;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
}

.user-name {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #64748b;
  margin-bottom: 32px;
  line-height: 1.6;
  max-width: 500px;
}

@media (min-width: 768px) {
  .hero-subtitle {
    max-width: none;
  }
}

.hero-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 24px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid #f1f5f9;
}

@media (min-width: 768px) {
  .hero-stats {
    justify-content: flex-start;
  }
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 0.875rem;
  color: #64748b;
  font-weight: 500;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: #e2e8f0;
}

/* Hero Visual */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.visual-card {
  position: relative;
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
}

.cat-icon {
  font-size: 4rem;
  z-index: 2;
}

.pulse-ring {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid rgba(102, 126, 234, 0.3);
  border-radius: 32px;
  animation: pulse 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
}

.pulse-ring.delay-1 {
  animation-delay: 0.5s;
}

.pulse-ring.delay-2 {
  animation-delay: 1s;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.3);
    opacity: 0;
  }
}

/* Features Section */
.features-section {
  margin-bottom: 80px;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1a202c;
  text-align: center;
  margin-bottom: 48px;
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
}

@media (min-width: 768px) {
  .features-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.feature-card {
  position: relative;
  padding: 32px 24px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid #f1f5f9;
  text-align: center;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
}

.feature-number {
  position: absolute;
  top: -16px;
  left: 24px;
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.875rem;
}

.feature-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 24px;
  background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3b82f6;
}

.feature-icon svg {
  width: 32px;
  height: 32px;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 12px;
}

.feature-description {
  color: #64748b;
  line-height: 1.6;
  margin: 0;
}

/* Actions Section */
.actions-section {
  margin-bottom: 80px;
}

.actions-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 768px) {
  .actions-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.action-card {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 32px;
  border-radius: 20px;
  transition: all 0.3s ease;
  border: 1px solid #f1f5f9;
}

.action-card.primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
}

.action-card.secondary {
  background: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.action-card:hover {
  transform: translateY(-4px);
}

.action-card.primary:hover {
  box-shadow: 0 12px 40px rgba(102, 126, 234, 0.3);
}

.action-card.secondary:hover {
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
}

.action-icon {
  flex-shrink: 0;
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.action-card.primary .action-icon {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.action-card.secondary .action-icon {
  background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%);
  color: #3b82f6;
}

.action-icon svg {
  width: 32px;
  height: 32px;
}

.action-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.action-content p {
  margin-bottom: 16px;
  opacity: 0.8;
}

.action-card.secondary .action-content h3,
.action-card.secondary .action-content p {
  color: #1a202c;
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

.action-card.primary .action-button {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.action-card.secondary .action-button {
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

/* Tips Section */
.tips-section {
  margin-bottom: 40px;
}

.tips-container {
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-radius: 20px;
  padding: 40px;
  border: 1px solid #e2e8f0;
}

.tips-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 32px;
  justify-content: center;
}

.tips-icon {
  font-size: 2rem;
}

.tips-header h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0;
}

.tips-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

@media (min-width: 768px) {
  .tips-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.tip-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.tip-check {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
}

.tip-item p {
  margin: 0;
  color: #374151;
  line-height: 1.5;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .homepage-container {
    padding: 0 16px;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: 16px;
  }
  
  .stat-divider {
    width: 80%;
    height: 1px;
  }
  
  .action-card {
    flex-direction: column;
    text-align: center;
  }
  
  .tips-container {
    padding: 24px;
  }
  
  .tips-header {
    flex-direction: column;
    text-align: center;
  }
}
</style>