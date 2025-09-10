<template>
  <div class="relative min-h-screen">    
    <div class="relative">
      <!-- Header Section -->
      <div class="mb-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
              Tambah Gejala
            </h1>
            <p class="text-gray-600">Tambahkan gejala baru dalam sistem pakar kucing</p>
          </div>
        </div>
      </div>

      <!-- Form Section -->
      <div class="group relative">
        <div class="absolute inset-0 bg-gradient-to-br from-green-400/10 via-emerald-400/10 to-teal-400/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
        <div class="relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/30 overflow-hidden">
          <!-- Form Header -->
          <div class="bg-gradient-to-r from-green-50/80 to-emerald-50/80 backdrop-blur-sm border-b border-green-100/50 px-8 py-6">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-800">Form Tambah Gejala</h3>
                <p class="text-sm text-gray-600">Lengkapi semua field yang diperlukan</p>
              </div>
            </div>
          </div>

          <!-- Form Content -->
          <form @submit.prevent="submitForm" class="p-8 space-y-8">
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

            <!-- Success Message -->
            <div v-if="showSuccess" class="group relative animate-fade-in">
              <div class="absolute inset-0 bg-gradient-to-br from-green-400/20 via-emerald-400/20 to-teal-400/20 rounded-xl blur-xl"></div>
              <div class="relative bg-green-50/80 backdrop-blur-lg rounded-xl border border-green-200/50 p-4">
                <div class="flex items-center">
                  <div class="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-3">
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-green-800">Berhasil!</h4>
                    <p class="text-sm text-green-700">Gejala berhasil ditambahkan ke sistem</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Form Actions -->
            <div class="flex items-center justify-between pt-6 border-t border-gray-100/50">
              <button 
                type="button"
                @click="resetForm"
                class="group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-400 to-slate-500 text-white font-medium rounded-xl shadow-lg hover:shadow-xl hover:shadow-gray-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <div class="absolute inset-0 bg-gradient-to-r from-gray-500 to-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                <svg class="relative w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"/>
                </svg>
                <span class="relative">Reset Form</span>
              </button>

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
                  <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/>
                </svg>
                
                <span class="relative">
                  {{ submitting ? 'Menyimpan...' : 'Tambah Gejala' }}
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
  name: "GejalaForm",
  data() {
    return {
      form: {
        kode: "",
        nama: "",
        deskripsi: "",
      },
      submitting: false,
      showSuccess: false,
    };
  },
  methods: {
    async submitForm() {
      if (this.submitting) return;
      
      this.submitting = true;
      this.showSuccess = false;
      
      try {
        await gejalaAPI.create(this.form);
        
        // Show success message
        this.showSuccessMessage("Gejala berhasil ditambahkan");
        this.showSuccess = true;
        
        // Emit success event
        this.$emit("success");
        
        // Reset form after a short delay
        setTimeout(() => {
          this.resetForm();
          this.showSuccess = false;
        }, 2000);
        
      } catch (error) {
        console.error("Gagal menambah gejala:", error);
        this.showErrorMessage("Gagal menambahkan gejala. Silakan coba lagi.");
      } finally {
        this.submitting = false;
      }
    },
    
    resetForm() {
      this.form = {
        kode: "",
        nama: "",
        deskripsi: "",
      };
      this.showSuccess = false;
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

/* Fade in animation for success message */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out;
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

/* Pulse animation for success state */
@keyframes pulse-green {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);
  }
}

.animate-pulse-green {
  animation: pulse-green 2s infinite;
}
</style>