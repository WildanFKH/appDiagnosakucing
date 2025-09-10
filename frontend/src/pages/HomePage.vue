<template>
  <div
    class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50"
  >
    <!-- Header Section -->
    <header
      class="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500"
    >
      <div class="relative px-6 py-20 mx-auto max-w-7xl">
        <div class="text-center">
          <!-- Logo Section -->
          <div class="flex justify-center mb-8">
            <div class="relative">
              <div
                class="flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-2xl overflow-hidden"
              >
                <!-- logo image -->
                <img 
                  src="@/assets/Cat.jpg" 
                  alt="Cat Expert System Logo" 
                  class="w-20 h-20 object-contain"
                />
              </div>
              <div
                class="absolute -top-2 -right-2 flex items-center justify-center w-8 h-8 bg-pink-500 rounded-full"
              >
                <!-- Small Cat Paw -->
                <svg
                  class="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.5,4C7.67,4 7,4.67 7,5.5C7,6.33 7.67,7 8.5,7C9.33,7 10,6.33 10,5.5C10,4.67 9.33,4 8.5,4M15.5,4C14.67,4 14,4.67 14,5.5C14,6.33 14.67,7 15.5,7C16.33,7 17,6.33 17,5.5C17,4.67 16.33,4 15.5,4M5.5,7C4.67,7 4,7.67 4,8.5C4,9.33 4.67,10 5.5,10C6.33,10 7,9.33 7,8.5C7,7.67 6.33,7 5.5,7M18.5,7C17.67,7 17,7.67 17,8.5C17,9.33 17.67,10 18.5,10C19.33,10 20,9.33 20,8.5C20,7.67 19.33,7 18.5,7M12,10C9.79,10 8,11.79 8,14C8,16.21 9.79,18 12,18C14.21,18 16,16.21 16,14C16,11.79 14.21,10 12,10M12,12C13.1,12 14,12.9 14,14C14,15.1 13.1,16 12,16C10.9,16 10,15.1 10,14C10,12.9 10.9,12 12,12Z"/>
                </svg>
              </div>
            </div>
          </div>

          <!-- Main Title -->
          <h1 class="mb-6 text-5xl font-bold text-white md:text-6xl">
            Sistem Pakar
            <span
              class="block text-transparent bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text"
            >
              Deteksi Penyakit Kucing
            </span>
          </h1>

          <!-- Subtitle -->
          <p
            class="mb-8 text-xl text-blue-100 md:text-2xl max-w-4xl mx-auto leading-relaxed"
          >
            Website canggih yang membantu kamu mendiagnosa penyakit kucing
            kesayangan secara
            <span class="font-semibold text-yellow-300">
              cepat, tepat, dan terpercaya
            </span>
            menggunakan sistem pakar berbasis aturan (rule-based expert system).
          </p>

          <!-- CTA Buttons -->
          <div
            class="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <router-link
              to="/login"
              class="group px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 no-underline"
            >
              <span>Mulai Diagnosis</span>
              <!-- Cat Paw Arrow -->
              <svg
                class="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.5,4C7.67,4 7,4.67 7,5.5C7,6.33 7.67,7 8.5,7C9.33,7 10,6.33 10,5.5C10,4.67 9.33,4 8.5,4M15.5,4C14.67,4 14,4.67 14,5.5C14,6.33 14.67,7 15.5,7C16.33,7 17,6.33 17,5.5C17,4.67 16.33,4 15.5,4M5.5,7C4.67,7 4,7.67 4,8.5C4,9.33 4.67,10 5.5,10C6.33,10 7,9.33 7,8.5C7,7.67 6.33,7 5.5,7M18.5,7C17.67,7 17,7.67 17,8.5C17,9.33 17.67,10 18.5,10C19.33,10 20,9.33 20,8.5C20,7.67 19.33,7 18.5,7M12,10C9.79,10 8,11.79 8,14C8,16.21 9.79,18 12,18C14.21,18 16,16.21 16,14C16,11.79 14.21,10 12,10"/>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </header>

    <!-- Diseases Section -->
    <section class="py-20 px-6 bg-gradient-to-r from-purple-50 to-pink-50">
      <div class="mx-auto max-w-7xl">
        <div class="text-center mb-8">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">
            Yuk, Deteksi penyakit kucingmu!
          </h2>
          <p class="text-xl text-gray-600">
            Sistem kami dapat mendiagnosa berbagai jenis penyakit kucing
          </p>
          <img src="../assets/gemoy.jpg" alt=" " 
          class="mx-auto mt-4 w-64 h-64 object-cover rounded-lg shadow-xl" />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div
            v-for="disease in diseases"
            :key="disease"
            class="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <div
              class="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3"
            >
              <!-- Cat with Medical Cross -->
              <svg
                class="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12,8L10.67,8.09C9.81,7.07 7.4,4.5 5,4.5C5,4.5 3.03,7.46 4.96,11.41C4.41,12.24 4.07,12.67 4,13.66L2.07,13.95L2.28,14.93L4.04,14.67L4.18,15.38L2.61,16.32L3.08,17.21L4.53,16.32C5.68,18.76 8.59,20 11,20C13.41,20 16.32,18.76 17.47,16.32L18.92,17.21L19.39,16.32L17.82,15.38L17.96,14.67L19.72,14.93L19.93,13.95L18,13.66C17.93,12.67 17.59,12.24 17.04,11.41C18.97,7.46 17,4.5 17,4.5C14.6,4.5 12.19,7.07 11.33,8.09L12,8M9,11A1,1 0 0,1 10,12A1,1 0 0,1 9,13A1,1 0 0,1 8,12A1,1 0 0,1 9,11M15,11A1,1 0 0,1 16,12A1,1 0 0,1 15,13A1,1 0 0,1 14,12A1,1 0 0,1 15,11M11,14H13L12.3,15.39C12.5,16.03 13.06,16.5 13.75,16.5A1.5,1.5 0 0,1 15.25,18A1.5,1.5 0 0,1 13.75,19.5C12.28,19.5 11.06,18.44 10.75,17H10.5C9.67,17 9,16.33 9,15.5C9,14.67 9.67,14 10.5,14H11Z"/>
              </svg>
            </div>
            <p class="font-semibold text-gray-700 text-sm">{{ disease }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-6 bg-white">
      <div class="mx-auto max-w-4xl text-center">
        <h2 class="text-4xl font-bold text-gray-800 mb-6">
          Siap Memulai Diagnosis?
        </h2>
        <p class="text-xl text-gray-600 mb-8">
          Dapatkan diagnosis yang akurat untuk kucing kesayangan Anda dalam
          hitungan menit
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link
            to="/register"
            class="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 no-underline"
          >
            Daftar Sekarang
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      diseases: [
       
      ]
    };
  },
};
</script>