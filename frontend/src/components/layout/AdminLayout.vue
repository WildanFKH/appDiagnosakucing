<template>
  <div class="flex min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
    <!-- Sidebar -->
    <aside class="w-72 bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 shadow-2xl relative overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20"></div>
      <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-pink-400/20 to-transparent rounded-full blur-2xl"></div>
      
      <div class="relative z-10 p-8">
        <!-- Logo Section -->
        <div class="mb-10">
          <div class="flex items-center mb-6">
            <div class="relative">
              <div class="w-14 h-14 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-2xl shadow-lg flex items-center justify-center mr-4">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-white">Admin Panel</h2>
              <p class="text-indigo-200 text-sm">Cat Expert System</p>
            </div>
          </div>
        </div>
        
        <nav class="space-y-3">
          <!-- Dashboard -->
          <div class="group">
            <router-link 
              to="/admin/dashboard" 
              class="flex items-center px-5 py-4 text-white hover:bg-white/10 rounded-2xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-indigo-500/25 backdrop-blur-sm border border-white/10 hover:border-white/20 transform hover:scale-[1.02]"
            >
              <div class="w-10 h-10 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:shadow-indigo-400/50 transition-all duration-300">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <span class="font-semibold">Dashboard</span>
            </router-link>
          </div>

          <!-- Dropdown Kelola Gejala -->
          <div class="group">
            <button 
              @click="toggleDropdown('gejala')" 
              class="w-full flex items-center justify-between px-5 py-4 text-white hover:bg-white/10 rounded-2xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/25 backdrop-blur-sm border border-white/10 hover:border-white/20 transform hover:scale-[1.02]"
            >
              <div class="flex items-center">
                <div class="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:shadow-purple-400/50 transition-all duration-300">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span class="font-semibold">Kelola Gejala</span>
              </div>
              <svg 
                class="w-5 h-5 transform transition-transform duration-300 ease-out" 
                :class="{ 'rotate-180': dropdowns.gejala }"
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </button>
            <div 
              v-show="dropdowns.gejala" 
              class="mt-3 ml-6 space-y-2 overflow-hidden transition-all duration-300 ease-out"
              :class="dropdowns.gejala ? 'animate-slide-down' : ''"
            >
              <router-link 
                to="/admin/gejala" 
                class="flex items-center px-4 py-3 text-indigo-200 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200 text-sm font-medium backdrop-blur-sm border border-white/5 hover:border-white/20 transform hover:scale-[1.02] hover:shadow-lg"
              >
                <div class="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mr-3"></div>
                List Gejala
              </router-link>
              <router-link 
                to="/admin/gejala/tambah" 
                class="flex items-center px-4 py-3 text-indigo-200 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200 text-sm font-medium backdrop-blur-sm border border-white/5 hover:border-white/20 transform hover:scale-[1.02] hover:shadow-lg"
              >
                <div class="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mr-3"></div>
                Tambah Gejala
              </router-link>
            </div>
          </div>

          <!-- Dropdown Kelola Penyakit -->
          <div class="group">
            <button 
              @click="toggleDropdown('penyakit')" 
              class="w-full flex items-center justify-between px-5 py-4 text-white hover:bg-white/10 rounded-2xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-pink-500/25 backdrop-blur-sm border border-white/10 hover:border-white/20 transform hover:scale-[1.02]"
            >
              <div class="flex items-center">
                <div class="w-10 h-10 bg-gradient-to-r from-pink-400 to-red-400 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:shadow-pink-400/50 transition-all duration-300">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span class="font-semibold">Kelola Penyakit</span>
              </div>
              <svg 
                class="w-5 h-5 transform transition-transform duration-300 ease-out" 
                :class="{ 'rotate-180': dropdowns.penyakit }"
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </button>
            <div 
              v-show="dropdowns.penyakit" 
              class="mt-3 ml-6 space-y-2 overflow-hidden transition-all duration-300 ease-out"
              :class="dropdowns.penyakit ? 'animate-slide-down' : ''"
            >
              <router-link 
                to="/admin/penyakit" 
                class="flex items-center px-4 py-3 text-indigo-200 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200 text-sm font-medium backdrop-blur-sm border border-white/5 hover:border-white/20 transform hover:scale-[1.02] hover:shadow-lg"
              >
                <div class="w-2 h-2 bg-gradient-to-r from-pink-400 to-red-400 rounded-full mr-3"></div>
                List Penyakit
              </router-link>
              <router-link 
                to="/admin/penyakit/tambah" 
                class="flex items-center px-4 py-3 text-indigo-200 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200 text-sm font-medium backdrop-blur-sm border border-white/5 hover:border-white/20 transform hover:scale-[1.02] hover:shadow-lg"
              >
                <div class="w-2 h-2 bg-gradient-to-r from-pink-400 to-red-400 rounded-full mr-3"></div>
                Tambah Penyakit
              </router-link>
            </div>
          </div>

          <!-- Dropdown Kelola Relasi Gejala Penyakit -->
          <div class="group">
            <button 
              @click="toggleDropdown('gejala-penyakit')" 
              class="w-full flex items-center justify-between px-5 py-4 text-white hover:bg-white/10 rounded-2xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-orange-500/25 backdrop-blur-sm border border-white/10 hover:border-white/20 transform hover:scale-[1.02]"
            >
              <div class="flex items-center">
                <div class="w-10 h-10 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:shadow-orange-400/50 transition-all duration-300">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span class="font-semibold">Kelola Relasi</span>
              </div>
              <svg 
                class="w-5 h-5 transform transition-transform duration-300 ease-out" 
                :class="{ 'rotate-180': dropdowns['gejala-penyakit'] }"
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </button>
            <div 
              v-show="dropdowns['gejala-penyakit']" 
              class="mt-3 ml-6 space-y-2 overflow-hidden transition-all duration-300 ease-out"
              :class="dropdowns['gejala-penyakit'] ? 'animate-slide-down' : ''"
            >
              <router-link 
                to="/admin/gejala-penyakit" 
                class="flex items-center px-4 py-3 text-indigo-200 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200 text-sm font-medium backdrop-blur-sm border border-white/5 hover:border-white/20 transform hover:scale-[1.02] hover:shadow-lg"
              >
                <div class="w-2 h-2 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mr-3"></div>
                List Relasi
              </router-link>
              <router-link 
                to="/admin/gejala-penyakit/tambah" 
                class="flex items-center px-4 py-3 text-indigo-200 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200 text-sm font-medium backdrop-blur-sm border border-white/5 hover:border-white/20 transform hover:scale-[1.02] hover:shadow-lg"
              >
                <div class="w-2 h-2 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mr-3"></div>
                Tambah Relasi
              </router-link>
            </div>
          </div>
        </nav>

        <!-- Logout Button -->
        <div class="mt-12 pt-8 border-t border-white/20">
          <button 
            @click="logout" 
            class="w-full flex items-center px-5 py-4 text-indigo-200 hover:text-white hover:bg-red-500/20 rounded-2xl transition-all duration-300 group backdrop-blur-sm border border-white/10 hover:border-red-400/50 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-red-500/25"
          >
            <div class="w-10 h-10 bg-gradient-to-r from-red-400 to-pink-400 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:shadow-red-400/50 transition-all duration-300">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"/>
              </svg>
            </div>
            <span class="font-semibold">Logout</span>
          </button>
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 overflow-y-auto relative">
      <!-- Background decorations -->
      <div class="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50"></div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-200/20 via-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-200/20 via-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
      
      <!-- Header -->
      <header class="relative z-10 bg-white/80 backdrop-blur-lg border-b border-white/20 shadow-sm">
        <div class="px-8 py-6">
          <div class="flex items-center justify-between">
            <div>
              <h1 class="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Admin Dashboard
              </h1>
              <p class="text-gray-600 mt-1">Kelola sistem pakar kucing Anda</p>
            </div>
            <div class="flex items-center space-x-4">
              <div class="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full border border-indigo-200/50">
                <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span class="text-sm font-medium text-indigo-700">Online</span>
              </div>
              <div class="w-10 h-10 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full flex items-center justify-center shadow-lg">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Content Area -->
      <div class="relative z-10 p-8">
        <div class="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 min-h-[calc(100vh-200px)] p-8">
          <router-view />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "AdminLayout",
  data() {
    return {
      dropdowns: {
        gejala: false,
        penyakit: false,
        'gejala-penyakit': false,
      },
    };
  },
  methods: {
    toggleDropdown(menu) {
      this.dropdowns[menu] = !this.dropdowns[menu];
    },
    logout() {
      localStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
@keyframes slide-down {
  from {
    opacity: 0;
    transform: translateY(-10px);
    max-height: 0;
  }
  to {
    opacity: 1;
    transform: translateY(0);
    max-height: 200px;
  }
}

.animate-slide-down {
  animation: slide-down 0.3s ease-out forwards;
}

/* Custom scrollbar */
.overflow-y-auto::-webkit-scrollbar {
  width: 8px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}
</style>