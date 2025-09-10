<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center px-6 py-12">
    <div class="w-full max-w-lg relative">
      <!-- Logo Section -->
      <div class="text-center mb-8">
        <div class="flex justify-center mb-4">
          <div class="relative">
            <!-- Container untuk gambar -->
            <div
              class="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-xl overflow-hidden"
            >
              <img
                src="@/assets/Cat.jpg"
                alt="Cat Expert System Logo"
                class="w-full h-full object-cover"
              />
            </div>
            <div
              class="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center"
            >
              <svg
                class="w-3 h-3 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <h1 class="text-3xl font-bold text-gray-800 mb-2">
          Selamat Datang Kembali!
        </h1>
        <p class="text-gray-600">
          Masuk ke akun Anda untuk melanjutkan diagnosis
        </p>
      </div>

      <!-- Register Form Card -->
      <div class="bg-white rounded-2xl shadow-2xl p-8 backdrop-blur-lg border border-white/20">
        <form @submit.prevent="handleRegister" class="space-y-6">
          <!-- Name Input -->
          <div class="space-y-2">
            <label for="name" class="block text-sm font-semibold text-gray-700">
              Nama Lengkap
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/>
                </svg>
              </div>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                placeholder="Masukkan nama lengkap"
                class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
              />
            </div>
          </div>

          <!-- Email Input -->
          <div class="space-y-2">
            <label for="email" class="block text-sm font-semibold text-gray-700">
              Email Address
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
                </svg>
              </div>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                placeholder="nama@email.com"
                class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
              />
            </div>
          </div>

          <!-- Password Input -->
<div class="space-y-2">
  <label for="password" class="block text-sm font-semibold text-gray-700">
    Password
  </label>
  <div class="relative">
    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"/>
      </svg>
    </div>
    <input
      id="password"
      v-model="form.password"
      :type="showPassword ? 'text' : 'password'"
      required
      placeholder="Minimal 6 karakter"
      class="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
    />
    <!-- Tambahkan tombol show/hide di sini -->
    <button
      type="button"
      @click="showPassword = !showPassword"
      class="absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none"
      aria-label="Toggle password visibility"
    >
      <svg
        class="w-5 h-5 text-gray-400 hover:text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          v-if="!showPassword"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
        <path
          v-if="showPassword"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
        />
      </svg>
    </button>
  </div>
  <div class="text-xs text-gray-500 mt-1">
    Password harus minimal 6 karakter
  </div>
</div>

          <!-- Role Selection -->
          <div class="space-y-2">
            <label for="role" class="block text-sm font-semibold text-gray-700">
              Daftar Sebagai
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16,4C18.21,4 20,5.79 20,8C20,10.21 18.21,12 16,12C13.79,12 12,10.21 12,8C12,5.79 13.79,4 16,4M16,14C18.67,14 24,15.33 24,18V20H8V18C8,15.33 13.33,14 16,14M8.5,14L7.5,13H4.5L3.5,14H1V16H3.5L4.5,15H7.5L8.5,16H11V14H8.5M12.71,12.37C11.19,11.32 9.21,11.32 7.69,12.37C6.41,13.25 6.41,14.75 7.69,15.63C9.21,16.68 11.19,16.68 12.71,15.63C14,14.75 14,13.25 12.71,12.37Z"/>
                </svg>
              </div>
              <select
                id="role"
                v-model="form.role"
                required
                class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white appearance-none"
              >
                <option value="pasien">Pemilik Kucing (Pasien)</option>
                <option value="admin">Administrator</option>
              </select>
              <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
                </svg>
              </div>
            </div>
            <div class="text-xs text-gray-500 mt-1">
              <span v-if="form.role === 'pasien'">Untuk pemilik kucing yang ingin melakukan diagnosis</span>
              <span v-else>Untuk mengelola sistem dan data pengguna</span>
            </div>
          </div>

          <!-- Terms and Conditions -->
          <div class="flex items-start space-x-3">
            <input 
              id="terms" 
              v-model="acceptTerms"
              type="checkbox" 
              required
              class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 mt-1"
            >
            <label for="terms" class="text-sm text-gray-600 leading-relaxed">
              Saya menyetujui 
              <a href="#" class="text-purple-600 hover:text-purple-800 font-medium">Syarat & Ketentuan</a> 
              dan 
              <a href="#" class="text-purple-600 hover:text-purple-800 font-medium">Kebijakan Privasi</a>
            </label>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="isLoading || !acceptTerms"
            class="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 focus:ring-4 focus:ring-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            <span v-if="!isLoading">Buat Akun</span>
            <span v-else>Memproses...</span>
            <svg v-if="!isLoading" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/>
            </svg>
            <svg v-else class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </button>
        </form>

        <!-- Error/Success Message -->
        <div v-if="message" class="mt-6">
          <div :class="messageClass" class="p-4 rounded-xl flex items-center space-x-3">
            <svg v-if="messageType === 'error'" class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z"/>
            </svg>
            <svg v-else class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M17,9L16.25,8.25L10.5,14L7.75,11.25L7,12L10.5,15.5L17,9Z"/>
            </svg>
            <span class="text-sm font-medium">{{ message }}</span>
          </div>
        </div>

        <!-- Login Link -->
        <div class="mt-8 text-center">
          <p class="text-gray-600">
            Sudah punya akun? 
            <router-link to="/login" class="text-purple-600 hover:text-purple-800 font-semibold no-underline">
              Masuk sekarang
            </router-link>
          </p>
        </div>

        <!-- Back to Home -->
        <div class="mt-4 text-center">
          <router-link to="/" class="text-gray-500 hover:text-gray-700 text-sm no-underline flex items-center justify-center space-x-1">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"/>
            </svg>
            <span>Kembali ke Beranda</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../../axios';

export default {
  name: 'RegisterPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        role: 'pasien'
      },
      showPassword: false,
      message: '',
      messageType: 'error', // "error" or "success"
      isLoading: false,
      acceptTerms: false
    };
  },
  computed: {
    messageClass() {
      return {
        'bg-red-50 text-red-700 border border-red-200': this.messageType === 'error',
        'bg-green-50 text-green-700 border border-green-200': this.messageType === 'success'
      };
    }
  },
  methods: {
    async handleRegister() {
      // Validation
      if (!this.form.name || !this.form.email || !this.form.password) {
        this.showMessage("Harap isi semua field", "error");
        return;
      }

      if (this.form.password.length < 6) {
        this.showMessage("Password harus minimal 6 karakter", "error");
        return;
      }

      if (!this.acceptTerms) {
        this.showMessage("Harap setujui syarat dan ketentuan", "error");
        return;
      }

      this.isLoading = true;
      this.message = "";

      try {
        await axios.post('/auth/register', this.form);
        this.showMessage('Registrasi berhasil! Silakan login dengan akun baru Anda.', 'success');
        
        // Reset form
        this.form = {
          name: '',
          email: '',
          password: '',
          role: 'pasien'
        };
        this.acceptTerms = false;

        // Redirect to login after success
        setTimeout(() => {
          this.$router.push('/login');
        }, 2000);

      } catch (err) {
        const errorMessage = err.response?.data?.message || 'Registrasi gagal. Silakan coba lagi.';
        this.showMessage(errorMessage, 'error');
      } finally {
        this.isLoading = false;
      }
    },

    showMessage(text, type) {
      this.message = text;
      this.messageType = type;
      
      // Auto hide message after 5 seconds
      setTimeout(() => {
        this.message = "";
      }, 5000);
    }
  }
};
</script>