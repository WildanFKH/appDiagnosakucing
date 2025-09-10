<template>
  <div class="relative min-h-screen">
    <!-- Background decorative elements -->
    <div
      class="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl -z-10 animate-pulse"
    ></div>
    <div
      class="absolute top-32 right-0 w-80 h-80 bg-gradient-to-tl from-indigo-400/15 to-pink-400/15 rounded-full blur-3xl -z-10 animate-pulse delay-1000"
    ></div>

    <div class="relative z-10 p-6 max-w-7xl mx-auto">
      <!-- Enhanced Header Section -->
      <div class="mb-8">
        <div class="flex items-center space-x-4 mb-4">
          <div class="relative">
            <div
              class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur opacity-30"
            ></div>
            <div
              class="relative bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <div>
            <h1
              class="text-3xl font-bold bg-gradient-to-r from-gray-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent"
            >
              Riwayat Diagnosa
            </h1>
            <p class="text-gray-600 mt-1">
              Lihat semua hasil diagnosa peliharaan Anda
            </p>
          </div>
        </div>

        <!-- Stats Overview -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div
            class="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/50 rounded-2xl p-4 backdrop-blur-sm"
          >
            <div class="flex items-center justify-between">
              <div>
                <p class="text-blue-600 text-sm font-medium">Total Diagnosa</p>
                <p class="text-2xl font-bold text-blue-800">
                  {{ diagnosas.length }}
                </p>
              </div>
              <div class="p-2 bg-blue-500/20 rounded-xl">
                <svg
                  class="w-6 h-6 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-2.019 1 1 0 01-.285-1.05l1.715-5.349L11 5.477V16a1 1 0 11-2 0V5.477L6.237 6.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-2.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div
            class="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200/50 rounded-2xl p-4 backdrop-blur-sm"
          >
            <div class="flex items-center justify-between">
              <div>
                <p class="text-green-600 text-sm font-medium">Peliharaan</p>
                <p class="text-2xl font-bold text-green-800">
                  {{ uniquePets.length }}
                </p>
              </div>
              <div class="p-2 bg-green-500/20 rounded-xl">
                <svg
                  class="w-6 h-6 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div
            class="bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200/50 rounded-2xl p-4 backdrop-blur-sm"
          >
            <div class="flex items-center justify-between">
              <div>
                <p class="text-purple-600 text-sm font-medium">
                  Rata-rata Akurasi
                </p>
                <p class="text-2xl font-bold text-purple-800">
                  {{ averageAccuracy }}%
                </p>
              </div>
              <div class="p-2 bg-purple-500/20 rounded-xl">
                <svg
                  class="w-6 h-6 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="flex items-center justify-center py-16">
        <div class="text-center">
          <div class="relative">
            <div
              class="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"
            ></div>
            <div
              class="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-indigo-400 rounded-full animate-spin mx-auto"
              style="animation-delay: 0.1s; animation-duration: 1.2s"
            ></div>
          </div>
          <p class="text-gray-600 font-medium">Memuat riwayat diagnosa...</p>
          <p class="text-gray-400 text-sm mt-1">Harap tunggu sebentar</p>
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-16">
        <div class="relative mb-6">
          <div
            class="relative bg-gradient-to-br from-red-100 to-red-50 p-8 rounded-full w-32 h-32 mx-auto flex items-center justify-center border border-red-200/50"
          >
            <svg
              class="w-16 h-16 text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
              ></path>
            </svg>
          </div>
        </div>
        <h3 class="text-xl font-semibold text-red-800 mb-2">
          Terjadi Kesalahan
        </h3>
        <p class="text-red-600 mb-6 max-w-md mx-auto">{{ error }}</p>
        <button
          @click="fetchDiagnosa"
          class="inline-flex items-center space-x-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Coba Lagi</span>
        </button>
      </div>

      <!-- Empty State -->
      <div v-else-if="diagnosas.length === 0" class="text-center py-16">
        <div class="relative mb-6">
          <div
            class="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
          ></div>
          <div
            class="relative bg-gradient-to-br from-gray-100 to-blue-50 p-8 rounded-full w-32 h-32 mx-auto flex items-center justify-center border border-gray-200/50"
          >
            <svg
              class="w-16 h-16 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
          </div>
        </div>
        <h3 class="text-xl font-semibold text-gray-800 mb-2">
          Belum Ada Riwayat Diagnosa
        </h3>
        <p class="text-gray-600 mb-6 max-w-md mx-auto">
          Anda belum melakukan diagnosa apapun. Mulai diagnosa pertama Anda
          untuk melihat riwayat di sini.
        </p>
        <router-link
          to="/pasien/diagnosa/form"
          class="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Mulai Diagnosa</span>
        </router-link>
      </div>

      <!-- Diagnosis Cards -->
      <div v-else class="space-y-6">
        <div
          v-for="(item, index) in diagnosas"
          :key="item._id"
          class="group relative bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl rounded-2xl border border-gray-200/50 hover:border-blue-300/50 p-6 transform hover:-translate-y-1 transition-all duration-300"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <!-- Card Header -->
          <div class="flex items-start justify-between mb-6">
            <div class="flex items-center space-x-4">
              <div class="relative">
                <div
                  class="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                ></div>
                <div
                  class="relative bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-full"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div>
                <h3
                  class="text-xl font-bold text-gray-800 group-hover:text-blue-800 transition-colors duration-200"
                >
                  {{ item.namaPeliharaan }}
                </h3>
              </div>
            </div>

            <!-- Accuracy Badge -->
            <div class="flex items-center space-x-2">
              <div
                class="px-3 py-1 rounded-full text-sm font-medium border"
                :class="{
                  'bg-green-50 text-green-700 border-green-200':
                    getAccuracyLevel(item.hasilDiagnosa?.kecocokan) === 'high',
                  'bg-yellow-50 text-yellow-700 border-yellow-200':
                    getAccuracyLevel(item.hasilDiagnosa?.kecocokan) ===
                    'medium',
                  'bg-red-50 text-red-700 border-red-200':
                    getAccuracyLevel(item.hasilDiagnosa?.kecocokan) === 'low',
                }"
              >
                {{ item.hasilDiagnosa?.kecocokan || 0 }}% akurasi
              </div>
            </div>

            <div class="flex items-center space-x-2">
              <!-- Existing accuracy badge -->
              <div class="px-3 py-1 rounded-full...">
                {{ item.hasilDiagnosa?.kecocokan || 0 }}% akurasi
              </div>

              <!-- NEW: Action buttons -->
              <button
                @click="editDiagnosa(item)"
                class="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                  ></path>
                </svg>
              </button>
              <button
            @click="deleteDiagnosa(item._id)"
            class="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
            </div>
          </div>

          <!-- Pet Information -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div
              class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100"
            >
              <div class="flex items-center space-x-3">
                <div class="p-2 bg-blue-500/20 rounded-lg">
                  <svg
                    class="w-5 h-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p class="text-blue-600 text-sm font-medium">Jenis Kelamin</p>
                  <p class="font-semibold text-blue-800">
                    {{ item.jenisKelamin }}
                  </p>
                </div>
              </div>
            </div>

            <div
              class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100"
            >
              <div class="flex items-center space-x-3">
                <div class="p-2 bg-green-500/20 rounded-lg">
                  <svg
                    class="w-5 h-5 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p class="text-green-600 text-sm font-medium">Umur</p>
                  <p class="font-semibold text-green-800">
                    {{ item.umur }} bulan
                  </p>
                </div>
              </div>
            </div>

            <div
              class="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-4 border border-purple-100"
            >
              <div class="flex items-center space-x-3">
                <div class="p-2 bg-purple-500/20 rounded-lg">
                  <svg
                    class="w-5 h-5 text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p class="text-purple-600 text-sm font-medium">Berat</p>
                  <p class="font-semibold text-purple-800">
                    {{ item.berat }} kg
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Symptoms Section -->
          <div class="mb-6">
            <h4
              class="text-lg font-semibold text-gray-800 mb-3 flex items-center"
            >
              <svg
                class="w-5 h-5 text-orange-500 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Gejala yang Dipilih
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div
                v-for="gejala in item.gejalaIds || []"
                :key="gejala._id"
                class="flex items-center space-x-3 bg-orange-50 border border-orange-200 rounded-xl p-3 hover:bg-orange-100 transition-colors duration-200"
              >
                <div
                  class="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"
                ></div>
                <span class="text-orange-800 font-medium">{{
                  gejala.nama || "Nama gejala tidak tersedia"
                }}</span>
              </div>
            </div>
          </div>

          <!-- Diagnosis Result -->
          <div
            class="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200"
          >
            <h4
              class="text-lg font-semibold text-gray-800 mb-4 flex items-center"
            >
              <svg
                class="w-5 h-5 text-green-500 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Hasil Diagnosa
            </h4>

            <div class="flex items-center justify-between">
              <div>
                <p class="text-2xl font-bold text-gray-800 mb-1">
                  {{ item.hasilDiagnosa?.penyakit?.nama || "Tidak ditemukan" }}
                </p>
              </div>

              <div class="text-right">
                <div
                  class="text-3xl font-bold mb-1"
                  :class="{
                    'text-green-600':
                      getAccuracyLevel(item.hasilDiagnosa?.kecocokan) ===
                      'high',
                    'text-yellow-600':
                      getAccuracyLevel(item.hasilDiagnosa?.kecocokan) ===
                      'medium',
                    'text-red-600':
                      getAccuracyLevel(item.hasilDiagnosa?.kecocokan) === 'low',
                  }"
                >
                  {{ item.hasilDiagnosa?.kecocokan || 0 }}%
                </div>
                <div
                  class="text-sm font-medium"
                  :class="{
                    'text-green-600':
                      getAccuracyLevel(item.hasilDiagnosa?.kecocokan) ===
                      'high',
                    'text-yellow-600':
                      getAccuracyLevel(item.hasilDiagnosa?.kecocokan) ===
                      'medium',
                    'text-red-600':
                      getAccuracyLevel(item.hasilDiagnosa?.kecocokan) === 'low',
                  }"
                >
                  {{ getAccuracyText(item.hasilDiagnosa?.kecocokan) }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div dir="rtl">
      <router-link
        to="/pasien/diagnosa/form"
        class="action-button absolute start-0 top-0"
      >
        Kembali
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
        </svg>
      </router-link>
    </div>
    <!-- Modal Edit - Tambahkan sebelum closing div dari template utama -->
<div v-if="showEditModal" class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
  <div class="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
    <!-- Modal Header -->
    <div class="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <div class="p-3 bg-white/20 rounded-full">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
            </svg>
          </div>
          <div>
            <h2 class="text-2xl font-bold text-white">Edit Diagnosa</h2>
            <p class="text-blue-100">Perbarui informasi diagnosa peliharaan</p>
          </div>
        </div>
        <button 
          @click="closeEditModal" 
          class="p-2 hover:bg-white/20 rounded-full transition-colors"
        >
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Modal Body -->
    <div class="overflow-y-auto max-h-[calc(90vh-120px)]">
      <form @submit.prevent="updateDiagnosa" class="p-8 space-y-8">
        <!-- Informasi Peliharaan -->
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200/50">
          <h3 class="text-xl font-semibold text-blue-800 mb-6 flex items-center">
            <svg class="w-6 h-6 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"></path>
            </svg>
            Informasi Peliharaan
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Nama Peliharaan -->
            <div class="space-y-2">
              <label class="block text-sm font-semibold text-blue-800">
                Nama Peliharaan <span class="text-red-500">*</span>
              </label>
              <input
                v-model="editForm.namaPeliharaan"
                type="text"
                required
                class="w-full px-4 py-3 bg-white border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Masukkan nama peliharaan"
              />
            </div>

            <!-- Jenis Kelamin -->
            <div class="space-y-2">
              <label class="block text-sm font-semibold text-blue-800">
                Jenis Kelamin <span class="text-red-500">*</span>
              </label>
              <select
                v-model="editForm.jenisKelamin"
                required
                class="w-full px-4 py-3 bg-white border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">Pilih jenis kelamin</option>
                <option value="Jantan">Jantan</option>
                <option value="Betina">Betina</option>
              </select>
            </div>

            <!-- Umur -->
            <div class="space-y-2">
              <label class="block text-sm font-semibold text-blue-800">
                Umur (bulan) <span class="text-red-500">*</span>
              </label>
              <input
                v-model.number="editForm.umur"
                type="number"
                required
                min="1"
                max="300"
                class="w-full px-4 py-3 bg-white border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Masukkan umur dalam bulan"
              />
            </div>

            <!-- Berat -->
            <div class="space-y-2">
              <label class="block text-sm font-semibold text-blue-800">
                Berat (kg) <span class="text-red-500">*</span>
              </label>
              <input
                v-model.number="editForm.berat"
                type="number"
                required
                min="0.1"
                max="100"
                step="0.1"
                class="w-full px-4 py-3 bg-white border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Masukkan berat dalam kg"
              />
            </div>
          </div>
        </div>

        <!-- Pilihan Gejala -->
        <div class="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200/50">
          <h3 class="text-xl font-semibold text-orange-800 mb-6 flex items-center">
            <svg class="w-6 h-6 text-orange-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
            </svg>
            Gejala yang Dialami <span class="text-red-500">*</span>
          </h3>

          <!-- Loading state untuk gejala -->
          <div v-if="loadingGejala" class="flex items-center justify-center py-8">
            <div class="flex items-center space-x-3">
              <div class="w-6 h-6 border-2 border-orange-200 border-t-orange-600 rounded-full animate-spin"></div>
              <span class="text-orange-600 font-medium">Memuat daftar gejala...</span>
            </div>
          </div>

          <!-- Daftar gejala -->
          <div v-else class="space-y-3 max-h-64 overflow-y-auto">
            <div
              v-for="gejala in availableGejala"
              :key="gejala._id"
              class="flex items-center space-x-3 p-3 bg-white rounded-xl border border-orange-200 hover:border-orange-300 hover:bg-orange-50/50 transition-all duration-200"
            >
              <input
                :id="`gejala-${gejala._id}`"
                v-model="editForm.gejalaIds"
                :value="gejala._id"
                type="checkbox"
                class="w-5 h-5 text-orange-600 bg-white border-orange-300 rounded focus:ring-orange-500 focus:ring-2"
              />
              <label
                :for="`gejala-${gejala._id}`"
                class="flex-1 text-orange-800 font-medium cursor-pointer"
              >
                {{ gejala.nama }}
              </label>
            </div>
          </div>

          <p class="text-orange-600 text-sm mt-4 flex items-center">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
            </svg>
            Pilih minimal 1 gejala yang dialami peliharaan Anda
          </p>
        </div>

        <!-- Action Buttons -->
        <div class="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200">
          <button
            type="button"
            @click="closeEditModal"
            class="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-all duration-200 hover:scale-105"
          >
            Batal
          </button>
          <button
            type="submit"
            :disabled="updateLoading || editForm.gejalaIds.length === 0"
            class="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl disabled:shadow-none transform hover:scale-105 disabled:scale-100 transition-all duration-200 flex items-center space-x-2"
          >
            <svg v-if="updateLoading" class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
            <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
            <span>{{ updateLoading ? 'Menyimpan...' : 'Simpan Perubahan' }}</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import DiagnosaAPI from "@/api/pasien/diagnosa.service";
import GejalaAPI from "@/api/admin/gejala.service";

const diagnosas = ref([]);
const loading = ref(true);
const error = ref(null);
const showEditModal = ref(false);
const editingDiagnosa = ref(null);
const updateLoading = ref(false);
const loadingGejala = ref(false);
const availableGejala = ref([]);
const editForm = ref({
  namaPeliharaan: "",
  jenisKelamin: "",
  umur: "",
  berat: "",
  gejalaIds: [],
});

const editDiagnosa = async (item) => {
  editingDiagnosa.value = item;

  editForm.value = {
    namaPeliharaan: item.namaPeliharaan,
    jenisKelamin: item.jenisKelamin,
    umur: item.umur,
    berat: item.berat,
    gejalaIds: item.gejalaIds.map(g => g._id || g)
  };
  
  showEditModal.value = true;
  await fetchGejala();
};

const closeEditModal = () => {
  showEditModal.value = false;
  editingDiagnosa.value = null;
  editForm.value = {
    namaPeliharaan: '',
    jenisKelamin: '',
    umur: '',
    berat: '',
    gejalaIds: []
  };
};

// NEW: Update function
const updateDiagnosa = async () => {
  if (editForm.value.gejalaIds.length === 0) {
    alert('Pilih minimal 1 gejala!');
    return;
  }

  updateLoading.value = true;
  
  try {
    const response = await DiagnosaAPI.update(editingDiagnosa.value._id, {
      namaPeliharaan: editForm.value.namaPeliharaan,
      jenisKelamin: editForm.value.jenisKelamin,
      umur: editForm.value.umur,
      berat: editForm.value.berat,
      gejalaIds: editForm.value.gejalaIds
    });
    
    if (response.data.success) {
      // Success notification (bisa pakai toast library)
      alert('Diagnosa berhasil diperbarui!');
      closeEditModal();
      fetchDiagnosa(); // Refresh data
    }
  } catch (error) {
    console.error('Error updating diagnosa:', error);
    alert('Gagal memperbarui diagnosa. Silakan coba lagi.');
  } finally {
    updateLoading.value = false;
  }
};

const deleteDiagnosa = async (id) => {
  if (confirm('⚠️ Apakah Anda yakin ingin menghapus diagnosa ini?\n\nData yang dihapus tidak dapat dikembalikan.')) {
    try {
      const response = await DiagnosaAPI.delete(id);
      
      if (response.data.success) {
        alert('✅ Diagnosa berhasil dihapus!');
        fetchDiagnosa(); // Refresh data
      }
    } catch (error) {
      console.error('Error deleting diagnosa:', error);
      alert('❌ Gagal menghapus diagnosa. Silakan coba lagi.');
    }
  }
};

const uniquePets = computed(() => {
  if (!Array.isArray(diagnosas.value)) return [];
  const pets = new Set();
  diagnosas.value.forEach((item) => pets.add(item.namaPeliharaan));
  return Array.from(pets);
});

const averageAccuracy = computed(() => {
  if (!Array.isArray(diagnosas.value) || diagnosas.value.length === 0) return 0;
  const total = diagnosas.value.reduce(
    (sum, item) => sum + (item.hasilDiagnosa?.kecocokan || 0),
    0
  );
  return Math.round(total / diagnosas.value.length);
});

const fetchDiagnosa = async () => {
  loading.value = true;
  error.value = null;

  try {
    const res = await DiagnosaAPI.getAll("/api/diagnosa");

    console.log("API Response:", res); // Debug log

    // Handle different response structures
    if (res.data && res.data.success && Array.isArray(res.data.data)) {
      // New structure: { success: true, data: [...] }
      diagnosas.value = res.data.data;
    } else if (res.data && Array.isArray(res.data)) {
      // Old structure: direct array
      diagnosas.value = res.data;
    } else if (res && Array.isArray(res)) {
      // Sometimes res directly contains the array
      diagnosas.value = res;
    } else {
      // Fallback
      console.warn("Unexpected response structure:", res);
      diagnosas.value = [];
    }

    console.log("Processed diagnosas:", diagnosas.value); // Debug log
  } catch (err) {
    console.error("Gagal memuat diagnosa:", err);
    error.value = err.response?.data?.message || "Gagal memuat data diagnosa";
    diagnosas.value = [];
  } finally {
    loading.value = false;
  }
};

const fetchGejala = async () => {
  loadingGejala.value = true;
  try {
    // Sesuaikan dengan API endpoint gejala Anda
    const response = await GejalaAPI.getAll('/api/gejala');
    availableGejala.value = response.data.data || response.data;
  } catch (error) {
    console.error('Error fetching gejala:', error);
    availableGejala.value = [];
  } finally {
    loadingGejala.value = false;
  }
};

const getAccuracyLevel = (accuracy) => {
  if (accuracy >= 80) return "high";
  if (accuracy >= 60) return "medium";
  return "low";
};

const getAccuracyText = (accuracy) => {
  if (accuracy >= 80) return "Tinggi";
  if (accuracy >= 60) return "Sedang";
  return "Rendah";
};

onMounted(fetchDiagnosa);
</script>

<style scoped>
/* Animation for cards */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.group {
  animation: slideInUp 0.6s ease-out forwards;
}

/* Glassmorphism effects */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
}

/* Hover animations */
.group:hover {
  transform: translateY(-4px);
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

/* Custom scrollbar if needed */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #3b82f6, #6366f1);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #2563eb, #4f46e5);
}

/* Focus states for accessibility */
button:focus,
a:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Responsive improvements */
@media (max-width: 768px) {
  .group {
    transform: none;
  }

  .group:hover {
    transform: none;
  }
  .flex.items-center.space-x-2 {
    flex-direction: column;
    gap: 8px;
  }
}
</style>
