<template>
  <div class="relative min-h-screen">
    <!-- Background decoration -->
    <div class="relative">
      <!-- Header Section -->
      <div class="mb-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
              Edit Gejala
            </h1>
            <p class="text-gray-600">Perbarui informasi gejala dalam sistem pakar kucing</p>
          </div>
          <router-link 
            to="/admin/gejala"
            class="group relative inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-500 to-slate-600 text-white text-sm font-medium rounded-xl shadow-lg hover:shadow-xl hover:shadow-gray-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <div class="absolute inset-0 bg-gradient-to-r from-gray-600 to-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            <svg class="relative w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"/>
            </svg>
            <span class="relative">Kembali</span>
          </router-link>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="group relative">
        <div class="absolute inset-0 bg-gradient-to-br from-green-400/10 via-emerald-400/10 to-teal-400/10 rounded-2xl blur-xl"></div>
        <div class="relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/30 p-12">
          <div class="flex items-center justify-center">
            <div class="relative">
              <div class="w-12 h-12 rounded-full border-4 border-green-200 border-t-green-600 animate-spin"></div>
              <div class="absolute inset-0 w-12 h-12 rounded-full border-4 border-transparent border-t-emerald-400 animate-spin animation-delay-150"></div>
            </div>
            <span class="ml-4 text-gray-600 font-medium">Memuat data gejala...</span>
          </div>
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="group relative">
        <div class="absolute inset-0 bg-gradient-to-br from-red-400/20 via-pink-400/20 to-rose-400/20 rounded-2xl blur-xl"></div>
        <div class="relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-red-200/30 p-8 text-center">
          <div class="w-16 h-16 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-2">Gagal Memuat Data</h3>
          <p class="text-gray-600 mb-4">{{ error }}</p>
          <button 
            @click="loadData" 
            class="bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
          >
            Coba Lagi
          </button>
        </div>
      </div>

      <!-- Form Section -->
      <div v-else class="group relative">
        <div class="absolute inset-0 bg-gradient-to-br from-green-400/10 via-emerald-400/10 to-teal-400/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
        <div class="relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/30 overflow-hidden">
          <!-- Form Header -->
          <div class="bg-gradient-to-r from-green-50/80 to-emerald-50/80 backdrop-blur-sm border-b border-green-100/50 px-8 py-6">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-800">Form Edit Gejala</h3>
                <p class="text-sm text-gray-600">Lengkapi semua field yang diperlukan</p>
              </div>
            </div>
          </div>

          <!-- Form Content -->
          <form @submit.prevent="updateGejala" class="p-8 space-y-8">
            <!-- Kode Gejala Field -->
            <div class="group/field">
              <label for="kode" class="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <div class="w-5 h-5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mr-2">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clip-rule="evenodd"/>
                  </svg>
                </div>
                Kode Gejala
                <span class="text-red-500 ml-1">*</span>
              </label>
              <div class="relative">
                <input
                  v-model="form.kode"
                  id="kode"
                  type="text"
                  required
                  class="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-xl focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all duration-300 placeholder-gray-400 group-hover/field:border-green-300 group-hover/field:shadow-lg group-hover/field:shadow-green-500/10"
                  placeholder="Masukkan kode gejala (contoh: G001)"
                />
                <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500/5 to-emerald-500/5 opacity-0 group-hover/field:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              <p class="text-xs text-gray-500 mt-2 flex items-center">
                <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                </svg>
                Kode unik untuk mengidentifikasi gejala
              </p>
            </div>

            <!-- Nama Gejala Field -->
            <div class="group/field">
              <label for="nama" class="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <div class="w-5 h-5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mr-2">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z" clip-rule="evenodd"/>
                  </svg>
                </div>
                Nama Gejala
                <span class="text-red-500 ml-1">*</span>
              </label>
              <div class="relative">
                <input
                  v-model="form.nama"
                  id="nama"
                  type="text"
                  required
                  class="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-xl focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all duration-300 placeholder-gray-400 group-hover/field:border-green-300 group-hover/field:shadow-lg group-hover/field:shadow-green-500/10"
                  placeholder="Masukkan nama gejala yang jelas dan deskriptif"
                />
                <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover/field:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              <p class="text-xs text-gray-500 mt-2 flex items-center">
                <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                </svg>
                Nama gejala yang mudah dipahami
              </p>
            </div>

            <!-- Deskripsi Field -->
            <div class="group/field">
              <label for="deskripsi" class="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <div class="w-5 h-5 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex items-center justify-center mr-2">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>
                  </svg>
                </div>
                Deskripsi Gejala
                <span class="text-red-500 ml-1">*</span>
              </label>
              <div class="relative">
                <textarea
                  v-model="form.deskripsi"
                  id="deskripsi"
                  rows="4"
                  required
                  class="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-xl focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all duration-300 placeholder-gray-400 resize-none group-hover/field:border-green-300 group-hover/field:shadow-lg group-hover/field:shadow-green-500/10"
                  placeholder="Berikan deskripsi detail tentang gejala ini, termasuk ciri-ciri yang dapat diamati pada kucing..."
                ></textarea>
                <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/5 to-red-500/5 opacity-0 group-hover/field:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              <p class="text-xs text-gray-500 mt-2 flex items-center">
                <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                </svg>
                Jelaskan secara detail ciri-ciri dan karakteristik gejala
              </p>
            </div>

            <!-- Form Actions -->
            <div class="flex items-center justify-between pt-6 border-t border-gray-100/50">
              <router-link 
                to="/admin/gejala"
                class="group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-400 to-slate-500 text-white font-medium rounded-xl shadow-lg hover:shadow-xl hover:shadow-gray-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <div class="absolute inset-0 bg-gradient-to-r from-gray-500 to-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                <svg class="relative w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
                <span class="relative">Batal</span>
              </router-link>

              <button 
                type="submit"
                :disabled="submitting"
                class="group relative inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <div class="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                
                <!-- Loading spinner -->
                <div v-if="submitting" class="relative w-4 h-4 mr-2">
                  <div class="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"></div>
                </div>
                <svg v-else class="relative w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                
                <span class="relative">
                  {{ submitting ? 'Menyimpan...' : 'Simpan Perubahan' }}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gejalaAPI from "@/api/admin/gejala.service";

export default {
  name: "GejalaEdit",
  data() {
    return {
      form: {
        kode: "",
        nama: "",
        deskripsi: "",
      },
      loading: true,
      submitting: false,
      error: null,
    };
  },
  async mounted() {
    await this.loadData();
  },
  methods: {
    async loadData() {
      this.loading = true;
      this.error = null;
      
      const id = this.$route.params.id;
      try {
        const response = await gejalaAPI.getById(id);
        this.form = { ...response.data };
      } catch (error) {
        console.error("Gagal memuat data gejala:", error);
        this.error = "Gagal memuat data gejala. Silakan coba lagi.";
        
        if (this.$toast) {
          this.$toast.error("Gagal memuat data gejala");
        }
      } finally {
        this.loading = false;
      }
    },

    async updateGejala() {
      if (this.submitting) return;
      
      this.submitting = true;
      const id = this.$route.params.id;
      
      try {
        await gejalaAPI.update(id, this.form);
        
        // Show success message
        this.showSuccessMessage("Gejala berhasil diperbarui");
        
        // Navigate back to list
        this.$router.push("/admin/gejala");
        
      } catch (error) {
        console.error("Gagal update gejala:", error);
        this.showErrorMessage("Gagal memperbarui gejala. Silakan coba lagi.");
      } finally {
        this.submitting = false;
      }
    },
    
    showSuccessMessage(message) {
      if (this.$toast) {
        this.$toast.success(message);
      } else {
        alert("✅ " + message);
      }
    },
    
    showErrorMessage(message) {
      if (this.$toast) {
        this.$toast.error(message);
      } else {
        alert("❌ " + message);
      }
    }
  },
};
</script>

<style scoped>
.animation-delay-150 {
  animation-delay: 150ms;
}

/* Custom form field hover effects */
.group\/field:hover input,
.group\/field:hover textarea {
  transform: translateY(-1px);
}

/* Enhanced focus states */
input:focus,
textarea:focus {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -5px rgba(34, 197, 94, 0.1), 0 10px 10px -5px rgba(34, 197, 94, 0.04);
}

/* Smooth transitions for all interactive elements */
input, textarea, button {
  transition: all 0.3s ease;
}

/* Custom scrollbar for textarea */
textarea::-webkit-scrollbar {
  width: 6px;
}

textarea::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}

textarea::-webkit-scrollbar-thumb {
  background: rgba(34, 197, 94, 0.3);
  border-radius: 3px;
}

textarea::-webkit-scrollbar-thumb:hover {
  background: rgba(34, 197, 94, 0.5);
}

/* Responsive design */
@media (max-width: 768px) {
  .flex.items-center.justify-between {
    flex-direction: column;
    gap: 1rem;
  }
  
  .flex.items-center.justify-between:last-child {
    flex-direction: column-reverse;
  }
}

/* Form validation states */
input:invalid:not(:placeholder-shown),
textarea:invalid:not(:placeholder-shown) {
  border-color: #ef4444;
  box-shadow: 0 0 0 1px #ef4444;
}

input:valid:not(:placeholder-shown),
textarea:valid:not(:placeholder-shown) {
  border-color: #10b981;
  box-shadow: 0 0 0 1px #10b981;
}

/* Enhanced button states */
button:disabled {
  transform: none !important;
  filter: grayscale(0.3);
}

/* Gradient animations */
@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
}
</style>