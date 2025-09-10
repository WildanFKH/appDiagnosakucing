<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
    <!-- Enhanced Header with Glassmorphism Effect -->
    <header class="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 shadow-2xl backdrop-blur-sm">
      <!-- Background Pattern -->
      <div class="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-800/90 backdrop-blur-sm"></div>
      <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div class="relative container mx-auto px-6 py-5">
        <div class="flex items-center justify-between">
          <!-- Enhanced Logo/Brand -->
          <div class="flex items-center space-x-4 group">
            <div class="relative">
              <div class="absolute -inset-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div class="relative bg-white/20 backdrop-blur-sm rounded-full p-2 border border-white/30">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </div>
            <div>
              <h1 class="text-2xl font-bold text-white bg-gradient-to-r from-white to-blue-100 bg-clip-text">
                Sistem Pakar Diagnosa
              </h1>
              <p class="text-blue-100 text-sm opacity-80">Medical Expert System</p>
            </div>
          </div>

          <!-- Enhanced Navigation -->
          <nav class="hidden lg:flex items-center space-x-2">
            <router-link 
              to="/pasien/homepage" 
              class="nav-link group relative px-4 py-2 rounded-xl text-white/90 hover:text-white transition-all duration-300 hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-white/20"
              active-class="text-white font-semibold bg-white/20 border-white/30"
            >
              <div class="flex items-center space-x-2">
                <div class="p-1 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors duration-200">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                </div>
                <span class="font-medium">Homepage</span>
              </div>
            </router-link>
            
            <router-link 
              to="/pasien/artikel" 
              class="nav-link group relative px-4 py-2 rounded-xl text-white/90 hover:text-white transition-all duration-300 hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-white/20"
              active-class="text-white font-semibold bg-white/20 border-white/30"
            >
              <div class="flex items-center space-x-2">
                <div class="p-1 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors duration-200">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
                  </svg>
                </div>
                <span class="font-medium">Artikel</span>
              </div>
            </router-link>

            <div class="h-6 w-px bg-white/20 mx-2"></div>

            <router-link 
              to="/" 
              class="nav-link group relative px-4 py-2 rounded-xl text-white/90 hover:text-red-200 transition-all duration-300 hover:bg-red-500/20 backdrop-blur-sm border border-transparent hover:border-red-300/30"
            >
              <div class="flex items-center space-x-2">
                <div class="p-1 rounded-lg bg-red-500/20 group-hover:bg-red-500/30 transition-colors duration-200">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="font-medium">Logout</span>
              </div>
            </router-link>
          </nav>

          <!-- Enhanced Mobile menu button -->
          <div class="lg:hidden">
            <button 
              @click="toggleMobileMenu"
              class="relative p-2 text-white focus:outline-none focus:ring-2 focus:ring-white/30 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200"
            >
              <svg 
                class="w-6 h-6 transition-transform duration-300" 
                :class="{ 'transform rotate-90': mobileMenuOpen }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Enhanced Mobile menu -->
        <transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="transform -translate-y-4 opacity-0"
          enter-to-class="transform translate-y-0 opacity-100"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="transform translate-y-0 opacity-100"
          leave-to-class="transform -translate-y-4 opacity-0"
        >
          <div 
            v-if="mobileMenuOpen"
            class="lg:hidden mt-6"
          >
            <div class="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl p-4">
              <div class="space-y-2">
                <router-link 
                  to="/pasien/homepage" 
                  class="flex items-center space-x-3 px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium"
                  @click="mobileMenuOpen = false"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                  <span>Homepage</span>
                </router-link>
                
                <div class="relative">
                  <button 
                    @click="toggleMobileDropdown"
                    class="w-full flex justify-between items-center px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium focus:outline-none"
                  >
                    <div class="flex items-center space-x-3">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
                      </svg>
                      <span>Diagnosa</span>
                    </div>
                    <svg 
                      class="w-4 h-4 transition-transform duration-300" 
                      :class="{ 'transform rotate-180': mobileDropdownOpen }"
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                  </button>
                  
                  <transition
                    enter-active-class="transition duration-200 ease-out"
                    enter-from-class="transform scale-95 opacity-0"
                    enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-150 ease-in"
                    leave-from-class="transform scale-100 opacity-100"
                    leave-to-class="transform scale-95 opacity-0"
                  >
                    <div 
                      v-if="mobileDropdownOpen"
                      class="ml-8 mt-2 space-y-1"
                    >
                      <router-link 
                        to="/pasien/diagnosa/form" 
                        class="block px-4 py-2 rounded-lg text-blue-200 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium text-sm"
                        @click="closeMobileMenu"
                      >
                        Form Diagnosa
                      </router-link>
                      <router-link 
                        to="/pasien/diagnosa/list" 
                        class="block px-4 py-2 rounded-lg text-blue-200 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium text-sm"
                        @click="closeMobileMenu"
                      >
                        Riwayat Diagnosa
                      </router-link>
                    </div>
                  </transition>
                </div>
                
                <router-link 
                  to="/pasien/artikel" 
                  class="flex items-center space-x-3 px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium"
                  @click="mobileMenuOpen = false"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
                  </svg>
                  <span>Artikel</span>
                </router-link>
                
                <div class="h-px bg-white/20 my-2"></div>
                
                <router-link 
                  to="/" 
                  class="flex items-center space-x-3 px-4 py-3 rounded-xl text-red-200 hover:text-white hover:bg-red-500/20 transition-all duration-200 font-medium"
                  @click="mobileMenuOpen = false"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Logout</span>
                </router-link>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </header>

    <!-- Enhanced Main Content -->
    <main class="flex-grow container mx-auto px-4 py-8 md:px-6 md:py-12 relative">
      <!-- Decorative Elements -->
      <div class="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl -z-10"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-indigo-400/10 to-pink-400/10 rounded-full blur-3xl -z-10"></div>
      
      <router-view />
    </main>

    <!-- Enhanced Footer -->
    <footer class="bg-white/80 backdrop-blur-sm border-t border-gray-200/50 py-6">
      <div class="container mx-auto px-6">
        <div class="flex flex-col items-center space-y-4 md:space-y-0">
          <div class="text-gray-600 text-sm">
            © 2025 Sistem Pakar Diagnosa. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "PasienLayout",
  data() {
    return {
      dropdownOpen: false,
      mobileMenuOpen: false,
      mobileDropdownOpen: false
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    openDropdown() {
      this.dropdownOpen = true;
    },
    closeDropdown() {
      this.dropdownOpen = false;
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
      if (!this.mobileMenuOpen) {
        this.mobileDropdownOpen = false;
      }
    },
    toggleMobileDropdown() {
      this.mobileDropdownOpen = !this.mobileDropdownOpen;
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false;
      this.mobileDropdownOpen = false;
    }
  },
  mounted() {
    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.$el.contains(e.target)) {
        this.dropdownOpen = false;
        this.mobileMenuOpen = false;
        this.mobileDropdownOpen = false;
      }
    });
  }
};
</script>

<style scoped>
.bg-grid-pattern {
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
}

.nav-link {
  position: relative;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.5s;
}

.nav-link:hover::before {
  left: 100%;
}

/* Custom scrollbar for dropdown */
.dropdown-content::-webkit-scrollbar {
  width: 4px;
}

.dropdown-content::-webkit-scrollbar-track {
  background: transparent;
}

.dropdown-content::-webkit-scrollbar-thumb {
  background: rgba(59, 130, 246, 0.3);
  border-radius: 2px;
}

.dropdown-content::-webkit-scrollbar-thumb:hover {
  background: rgba(59, 130, 246, 0.5);
}

/* Animate router-link-active */
.router-link-active {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
}

/* Glassmorphism effect */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
}

.backdrop-blur-md {
  backdrop-filter: blur(12px);
}

/* Enhanced hover animations */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-2px); }
}

.nav-link:hover {
  animation: float 1s ease-in-out infinite;
}

/* Glow effect for active states */
.router-link-active {
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
}

/* Mobile responsive improvements */
@media (max-width: 1024px) {
  .nav-link:hover {
    animation: none;
  }
}

/* Focus states for accessibility */
.focus\:ring-2:focus {
  ring-width: 2px;
}

.focus\:ring-white\/30:focus {
  ring-color: rgba(255, 255, 255, 0.3);
}
</style>