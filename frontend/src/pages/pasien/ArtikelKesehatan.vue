<template>
  <div class="artikel-container min-h-screen relative">
    <!-- Decorative Background Elements -->
    <div class="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
    <div class="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-tl from-purple-400/15 to-pink-400/15 rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>
    <div class="absolute bottom-0 left-1/4 w-72 h-72 bg-gradient-to-tr from-indigo-400/20 to-cyan-400/20 rounded-full blur-3xl -z-10 animate-pulse delay-500"></div>

    <!-- Enhanced Header Section -->
    <div class="hero-section relative overflow-hidden bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm rounded-3xl border border-white/50 shadow-2xl mb-12 p-8 md:p-12">
      <!-- Background Pattern -->
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <!-- Floating Icons -->
      <div class="absolute top-6 right-6 animate-bounce delay-300">
        <div class="bg-green-500/20 backdrop-blur-sm rounded-2xl p-3 border border-green-300/30">
          <svg class="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        </div>
      </div>

      <div class="relative z-10">
        <div class="flex items-center space-x-4 mb-6">
          <div class="relative">
            <div class="absolute -inset-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur opacity-20 animate-pulse"></div>
            <div class="relative bg-gradient-to-r from-green-500 to-blue-600 rounded-full p-4">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
              </svg>
            </div>
          </div>
          <div>
            <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-green-600 bg-clip-text text-transparent mb-2 animate-fade-in">
              Artikel Kesehatan Hewan
            </h1>
            <div class="h-1 w-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-scale-in"></div>
          </div>
        </div>
        
        <p class="text-lg md:text-xl text-gray-600 leading-relaxed animate-slide-up delay-300">
          Temukan berbagai tips dan panduan lengkap untuk merawat hewan peliharaan agar tetap sehat, bahagia, dan aktif setiap hari!
        </p>

        <!-- Stats Cards -->
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          <div class="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50 hover:bg-white/70 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div class="text-2xl font-bold text-green-600">{{ artikelList.length }}</div>
            <div class="text-sm text-gray-600">Artikel Tersedia</div>
          </div>
          <div class="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50 hover:bg-white/70 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div class="text-2xl font-bold text-blue-600">16</div>
            <div class="text-sm text-gray-600">Tips Berguna</div>
          </div>
          <div class="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50 hover:bg-white/70 transition-all duration-300 hover:scale-105 hover:shadow-lg col-span-2 md:col-span-1">
            <div class="text-2xl font-bold text-purple-600">100%</div>
            <div class="text-sm text-gray-600">Gratis Akses</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Enhanced Articles Grid -->
    <div class="articles-grid space-y-8">
      <div 
        v-for="(artikel, index) in artikelList" 
        :key="artikel.id"
        class="artikel-card group relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-3xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-slide-up"
        :style="{ 'animation-delay': `${index * 200}ms` }"
      >
        <!-- Card Background Pattern -->
        <div class="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-blue-50/30 opacity-50"></div>
        <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-400/10 to-transparent rounded-full blur-2xl"></div>
        
        <!-- Content -->
        <div class="relative z-10 p-8 md:p-10">
          <!-- Header -->
          <div class="flex items-start justify-between mb-6">
            <div class="flex-1">
              <div class="flex items-center space-x-3 mb-4">
                <div class="relative">
                  <div class="absolute -inset-1 bg-gradient-to-r from-blue-400 to-green-400 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div class="relative bg-gradient-to-r from-blue-500 to-green-500 rounded-lg p-2">
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                </div>
                <div class="h-6 w-1 bg-gradient-to-b from-blue-500 to-green-500 rounded-full"></div>
                <span class="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  Panduan Lengkap
                </span>
              </div>
              
              <h3 class="text-2xl md:text-3xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {{ artikel.judul }}
              </h3>
              
              <p class="text-gray-600 text-lg leading-relaxed mb-6">
                {{ artikel.deskripsi }}
              </p>
            </div>
            
            <!-- Article Number -->
            <div class="ml-4 flex-shrink-0">
              <div class="relative">
                <div class="absolute -inset-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur opacity-20"></div>
                <div class="relative bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                  {{ index + 1 }}
                </div>
              </div>
            </div>
          </div>

          <!-- Tips Section -->
          <div class="bg-gradient-to-br from-gray-50/80 to-blue-50/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
            <div class="flex items-center space-x-2 mb-4">
              <div class="bg-yellow-500 rounded-full p-1">
                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <h4 class="font-semibold text-gray-800">Tips Penting:</h4>
            </div>
            
            <div class="space-y-3">
              <div 
                v-for="(item, tipIndex) in artikel.tips" 
                :key="tipIndex"
                class="flex items-start space-x-3 p-3 bg-white/70 backdrop-blur-sm rounded-xl border border-white/50 hover:bg-white/90 hover:shadow-md transition-all duration-300 hover:scale-[1.01] group/tip"
              >
                <div class="flex-shrink-0 mt-0.5">
                  <div class="relative">
                    <div class="absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur opacity-30 group-hover/tip:opacity-50 transition-opacity duration-300"></div>
                    <div class="relative bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                      {{ tipIndex + 1 }}
                    </div>
                  </div>
                </div>
                <p class="text-gray-700 leading-relaxed flex-1">{{ item }}</p>
                <div class="flex-shrink-0 opacity-0 group-hover/tip:opacity-100 transition-opacity duration-300">
                  <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Hover Effect Overlay -->
        <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
      </div>
    </div>

    <!-- Call to Action Section -->
    <div class="mt-16 bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-0"></div>
      <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl -z-0"></div>
      
      <div class="relative z-10 text-center">
        <div class="flex justify-center mb-6">
          <div class="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
            <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"></path>
            </svg>
          </div>
        </div>
        
        <h3 class="text-3xl md:text-4xl font-bold mb-4">
          Butuh Konsultasi Lebih Lanjut?
        </h3>
        <p class="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          Tim ahli kami siap membantu memberikan saran terbaik untuk kesehatan hewan peliharaan Anda
        </p>
        
        <a href="https://wa.me/6285780775462" class="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl">
          Hubungi Dokter Hewan
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArtikelPage",
  data() {
    return {
      artikelList: [
        {
          id: 1,
          judul: "Solusi Scabies",
          deskripsi: "Scabies disebabkan oleh tungau Sarcoptes scabiei yang menggali ke dalam kulit kucing. Gejalanya berupa kulit ruam, berkerak, bersisik, rasa gatal intens, dan kucing menggaruk berlebihan. Area yang sering terkena adalah wajah, telinga, dan perut.",
          tips: [
            "Mandikan kucing dengan shampo anti-parasit khusus.",
            "Oleskan salep atau obat topikal yang mengandung ivermectin atau selamectin sesuai anjuran dokter hewan.",
            "Bersihkan kandang dan lingkungan sekitar secara menyeluruh.",
            "Isolasi kucing agar tidak menular ke hewan lain."
          ]
        },
        {
          id: 2,
          judul: "Solusi Ear Mites",
          deskripsi: "Infeksi tungau telinga disebabkan oleh Otodectes cynotis, menyebabkan rasa gatal di telinga, telinga kotor (berwarna coklat kehitaman), bau tidak sedap, dan kucing sering menggaruk telinga atau menggelengkan kepala.",
          tips: [
            "Bersihkan telinga dengan cairan pembersih khusus telinga kucing.",
            "Berikan obat tetes telinga antiparasit seperti ivermectin atau selamectin.",
            "Periksa dan obati semua kucing di rumah, karena tungau mudah menular.",
            "Jaga kebersihan lingkungan."
          ]
        },
        {
          id: 3,
          judul: "Solusi Cacingan",
          deskripsi: "Cacingan terjadi akibat infeksi cacing seperti cacing gelang (roundworm), cacing pita (tapeworm), atau cacing tambang (hookworm). Gejala meliputi perut membesar, muntah atau feses mengandung cacing, lemas, dan tidak nafsu makan.",
          tips: [
            "Berikan obat cacing rutin setiap 3 bulan (pyrantel pamoate, praziquantel, dll).",
            "Bersihkan feses segera dan jaga kebersihan kandang.",
            "Hindari kucing berburu tikus atau memakan makanan mentah.",
            "Konsultasi ke dokter hewan jika gejala parah."
          ]
        },
        {
          id: 4,
          judul: "Solusi Ringworm",
          deskripsi: "Infeksi jamur dermatofit (umumnya Microsporum canis), ditandai dengan bulu rontok membentuk lingkaran botak, kulit kemerahan dan berkerak, dan bisa menular ke manusia.",
          tips: [
            "Gunakan shampoo anti-jamur dan salep topikal (seperti miconazole, ketoconazole).",
            "Berikan obat oral antijamur jika infeksi luas (seperti itraconazole).",
            "Sterilkan kandang, mainan, dan peralatan kucing.",
            "Cuci tangan setelah kontak dan hindari memegang kucing jika memiliki luka terbuka."
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.artikel-container {
  margin: 0 auto;
  padding: 2rem 1rem;
}

.bg-grid-pattern {
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* Custom Animations */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scale-in {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

.animate-slide-up {
  animation: slide-up 0.8s ease-out;
}

.animate-scale-in {
  animation: scale-in 0.8s ease-out 0.5s both;
}

/* Custom delay classes */
.delay-300 {
  animation-delay: 300ms;
}

.delay-500 {
  animation-delay: 500ms;
}

.delay-1000 {
  animation-delay: 1000ms;
}

/* Enhanced focus states */
button:focus {
  outline: none;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .artikel-container {
    padding: 1rem 0.5rem;
  }
  
  .hero-section {
    padding: 2rem 1.5rem;
  }
  
  .artikel-card {
    margin: 1rem 0;
  }
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(243, 244, 246, 0.5);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: rgba(59, 130, 246, 0.3);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(59, 130, 246, 0.5);
}

/* Loading animation for images */
.artikel-card img {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.artikel-card:hover img {
  transform: scale(1.05);
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Print styles */
@media print {
  .artikel-container {
    background: white !important;
  }
  
  .artikel-card {
    break-inside: avoid;
    box-shadow: none !important;
    border: 1px solid #ccc !important;
  }
}
</style>