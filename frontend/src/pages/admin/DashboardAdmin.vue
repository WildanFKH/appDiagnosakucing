<template>
  <div class="relative">
    <!-- Header Section -->
    <div class="mb-8">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            Dashboard Overview
          </h1>
          <p class="text-gray-600">Ringkasan lengkap sistem pakar kucing Anda</p>
        </div>
        <div class="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full border border-green-200/50">
          <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span class="text-sm font-medium text-green-700">System Active</span>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="flex items-center justify-center py-20">
      <div class="relative">
        <div class="w-12 h-12 rounded-full border-4 border-purple-200 border-t-purple-600 animate-spin"></div>
        <div class="absolute inset-0 w-12 h-12 rounded-full border-4 border-transparent border-t-pink-400 animate-spin animation-delay-150"></div>
      </div>
      <span class="ml-4 text-gray-600 font-medium">Memuat data dashboard...</span>
    </div>
    
    <!-- Dashboard Cards -->
    <div v-else>
      <!-- Stats Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <!-- Total User Card -->
        <div class="group relative">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-purple-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          <div class="relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/30 p-6 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-400/50 transition-all duration-300">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div class="text-right">
                <div class="w-8 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></div>
              </div>
            </div>
            <h3 class="text-sm font-semibold text-gray-600 mb-1">Total User</h3>
            <p class="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {{ summary.totalUser.toLocaleString() }}
            </p>
            <div class="mt-2 flex items-center text-xs text-blue-600">
              <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
              </svg>
              <span>Pengguna terdaftar</span>
            </div>
          </div>
        </div>

        <!-- Total Gejala Card -->
        <a href="/admin/gejala" class="group relative">
          <div class="absolute inset-0 bg-gradient-to-br from-green-400/20 via-emerald-400/20 to-teal-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          <div class="relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/30 p-6 hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-green-400/50 transition-all duration-300">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div class="text-right">
                <div class="w-8 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></div>
              </div>
            </div>
            <h3 class="text-sm font-semibold text-gray-600 mb-1">Total Gejala</h3>
            <p class="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              {{ summary.totalGejala.toLocaleString() }}
            </p>
            <div class="mt-2 flex items-center text-xs text-green-600">
              <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span>Gejala tersedia</span>
            </div>
          </div>
        </a>

        <!-- Total Penyakit Card -->
        <a href="/admin/penyakit" class="group relative">
          <div class="absolute inset-0 bg-gradient-to-br from-red-400/20 via-pink-400/20 to-rose-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          <div class="relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/30 p-6 hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 bg-gradient-to-r from-red-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-red-400/50 transition-all duration-300">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div class="text-right">
                <div class="w-8 h-1 bg-gradient-to-r from-red-400 to-pink-500 rounded-full"></div>
              </div>
            </div>
            <h3 class="text-sm font-semibold text-gray-600 mb-1">Total Penyakit</h3>
            <p class="text-3xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              {{ summary.totalPenyakit.toLocaleString() }}
            </p>
            <div class="mt-2 flex items-center text-xs text-red-600">
              <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
              </svg>
              <span>Penyakit terdaftar</span>
            </div>
          </div>
        </a>
      </div>

      <!-- Quick Actions Section -->
      <div class="mt-8">
        <h2 class="text-xl font-bold text-gray-800 mb-6 flex items-center">
          <svg class="w-5 h-5 mr-2 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/>
          </svg>
          Akses yang dapat dilakukan
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Quick Action Cards -->
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-br from-indigo-400/10 via-purple-400/10 to-pink-400/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div class="relative bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg border border-white/30 p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] cursor-pointer">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <h3 class="font-semibold text-gray-800">Tambah Gejala Baru</h3>
              </div>
              <p class="text-sm text-gray-600 mb-4">Tambahkan gejala baru ke dalam sistem untuk meningkatkan akurasi diagnosa</p>
            </div>
          </div>

          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-br from-pink-400/10 via-red-400/10 to-orange-400/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div class="relative bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg border border-white/30 p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] cursor-pointer">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 bg-gradient-to-r from-pink-400 to-red-500 rounded-xl flex items-center justify-center mr-4">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <h3 class="font-semibold text-gray-800">Tambah Penyakit</h3>
              </div>
              <p class="text-sm text-gray-600 mb-4">Daftarkan penyakit baru beserta informasi detail dan solusi pengobatannya untuk mempercepat penyembuhan</p>
            </div>
          </div>

          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-br from-orange-400/10 via-yellow-400/10 to-amber-400/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div class="relative bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg border border-white/30 p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] cursor-pointer">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-xl flex items-center justify-center mr-4">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <h3 class="font-semibold text-gray-800">Atur Relasi</h3>
              </div>
              <p class="text-sm text-gray-600 mb-4">Kelola hubungan antara gejala dan penyakit untuk hasil diagnosa yang akurat</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import DashboardAPI from '@/api/admin/dashboard.service';

const summary = ref({
  totalUser: 0,
  totalGejala: 0,
  totalPenyakit: 0,
});
const loading = ref(true);

const fetchSummary = async () => {
  try {
    const response = await DashboardAPI.getSummary();
    summary.value = response.data;
  } catch (err) {
    console.error('Gagal memuat data dashboard:', err);
  } finally {
    loading.value = false;
  }
};

onMounted(fetchSummary);
</script>

<style scoped>
.animation-delay-150 {
  animation-delay: 150ms;
}

/* Custom animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
}

.hover\:animate-float:hover {
  animation: float 2s ease-in-out infinite;
}

/* Gradient text animation */
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

/* Custom scrollbar for better UX */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: rgba(139, 92, 246, 0.3);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(139, 92, 246, 0.5);
}
</style>