<template>
  <div class="relative">
    <!-- Header Section -->
    <div class="mb-8">
      <div class="flex items-center justify-between">
        <div>
          <h1
            class="text-3xl font-bold bg-gradient-to-r from-blue-600 via-blue-600 to-blue-600 bg-clip-text text-transparent mb-2"
          >
            Daftar Penyakit
          </h1>
          <p class="text-gray-600">
            Kelola data penyakit dalam sistem pakar kucing
          </p>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="flex items-center justify-center py-20">
      <div class="relative">
        <div
          class="w-12 h-12 rounded-full border-4 border-blue-200 border-t-blue-600 animate-spin"
        ></div>
        <div
          class="absolute inset-0 w-12 h-12 rounded-full border-4 border-transparent border-t-indigo-400 animate-spin animation-delay-150"
        ></div>
      </div>
      <span class="ml-4 text-gray-600 font-medium">Memuat data penyakit...</span>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="group relative">
      <div
        class="absolute inset-0 bg-gradient-to-br from-red-400/20 via-pink-400/20 to-rose-400/20 rounded-2xl blur-xl"
      ></div>
      <div
        class="relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-red-200/30 p-8 text-center"
      >
        <div
          class="w-16 h-16 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <svg
            class="w-8 h-8 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-800 mb-2">Terjadi Kesalahan</h3>
        <p class="text-gray-600 mb-4">{{ error }}</p>
        <button
          @click="getDataPenyakit"
          class="bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
        >
          Coba Lagi
        </button>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else-if="penyakitList.length === 0" class="group relative">
      <div
        class="absolute inset-0 bg-gradient-to-br from-gray-400/10 via-slate-400/10 to-zinc-400/10 rounded-2xl blur-xl"
      ></div>
      <div
        class="relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/30 p-12 text-center"
      >
        <div
          class="w-20 h-20 bg-gradient-to-r from-gray-400 to-slate-500 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <svg
            class="w-10 h-10 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path
              fill-rule="evenodd"
              d="M4 5a2 2 0 012-2v1a2 2 0 00-2 2v6a2 2 0 102 2v1a2 2 0 01-2-2V5zM14 5a2 2 0 012-2v1a2 2 0 002 2v6a2 2 0 11-2 2v1a2 2 0 01-2-2V5z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-gray-800 mb-3">Belum Ada Penyakit</h3>
        <p class="text-gray-600 mb-6">
          Tambahkan penyakit pertama untuk memulai sistem diagnosa
        </p>
        <router-link
          to="/admin/penyakit/tambah"
          class="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clip-rule="evenodd"
            />
          </svg>
          <span>Tambah Penyakit Pertama</span>
        </router-link>
      </div>
    </div>

    <!-- Data Table -->
    <div v-else class="group relative">
      <div
        class="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-indigo-400/10 to-purple-400/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"
      ></div>
      <div
        class="relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/30 overflow-hidden"
      >
        <!-- Table Header -->
        <div
          class="bg-gradient-to-r from-blue-50/80 to-indigo-50/80 backdrop-blur-sm border-b border-blue-100/50 px-6 py-4"
        >
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <div
                class="w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center"
              >
                <svg
                  class="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path
                    fill-rule="evenodd"
                    d="M4 5a2 2 0 012-2v1a2 2 0 00-2 2v6a2 2 0 102 2v1a2 2 0 01-2-2V5zM14 5a2 2 0 012-2v1a2 2 0 002 2v6a2 2 0 11-2 2v1a2 2 0 01-2-2V5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-800">Data Penyakit</h3>
            </div>
            <div class="flex items-center space-x-4">
              <div
                class="text-sm text-gray-600 bg-white/50 px-3 py-1 rounded-full"
              >
                {{ penyakitList.length }} penyakit terdaftar
              </div>
              <div
                class="text-sm text-gray-600 bg-white/50 px-3 py-1 rounded-full"
              >
                Halaman {{ currentPage }} dari {{ totalPages }}
              </div>
            </div>
          </div>
        </div>

        <!-- Table Content -->
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gradient-to-r from-gray-50 to-slate-50">
              <tr>
                <th
                  class="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider w-24"
                >
                  <div class="flex items-center space-x-2">
                    <div class="w-3 h-3 bg-blue-400 rounded-sm"></div>
                    <span>Kode</span>
                  </div>
                </th>
                <th
                  class="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider w-1/5"
                >
                  <div class="flex items-center space-x-2">
                    <div class="w-3 h-3 bg-indigo-400 rounded-sm"></div>
                    <span>Nama</span>
                  </div>
                </th>
                <th
                  class="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  <div class="flex items-center space-x-2">
                    <div class="w-3 h-3 bg-purple-400 rounded-sm"></div>
                    <span>Deskripsi</span>
                  </div>
                </th>
                <th
                  class="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  <div class="flex items-center space-x-2">
                    <div class="w-3 h-3 bg-green-400 rounded-sm"></div>
                    <span>Solusi</span>
                  </div>
                </th>
                <th
                  class="px-6 py-4 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider w-40"
                >
                  <div class="flex items-center justify-center space-x-2">
                    <div class="w-3 h-3 bg-orange-400 rounded-sm"></div>
                    <span>Aksi</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(penyakit, index) in paginatedPenyakit"
                :key="penyakit._id"
                class="hover:bg-gradient-to-r hover:from-blue-50/30 hover:to-indigo-50/30 transition-all duration-300"
                :class="{ 'bg-white/20': index % 2 === 0 }"
              >
                <td class="px-6 py-6 border-b border-gray-100/30">
                  <div class="flex items-center">
                    <div
                      class="w-8 h-8 bg-gradient-to-r from-blue-400/20 to-indigo-500/20 rounded-lg flex items-center justify-center"
                    >
                      <span class="text-xs font-bold text-blue-700">{{
                        penyakit.kode
                      }}</span>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-6 border-b border-gray-100/30">
                  <div class="font-medium text-gray-900">{{ penyakit.nama }}</div>
                </td>
                <td class="px-6 py-6 border-b border-gray-100/30">
                  <div class="text-gray-600 text-sm">
                    <div
                      v-if="!expandedRows.includes(penyakit._id) && penyakit.deskripsi.length > 100"
                      class="space-y-2"
                    >
                      <p>{{ penyakit.deskripsi.substring(0, 100) }}...</p>
                      <button
                        @click="toggleExpand(penyakit._id)"
                        class="text-blue-600 hover:text-blue-800 text-xs font-medium underline flex items-center space-x-1"
                      >
                        <span>Lihat selengkapnya</span>
                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                      </button>
                    </div>
                    <div v-else class="space-y-2">
                      <p class="leading-relaxed">{{ penyakit.deskripsi }}</p>
                      <button
                        v-if="penyakit.deskripsi.length > 100"
                        @click="toggleExpand(penyakit._id)"
                        class="text-blue-600 hover:text-blue-800 text-xs font-medium underline flex items-center space-x-1"
                      >
                        <span>Lihat lebih sedikit</span>
                        <svg class="w-3 h-3 transform rotate-180" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-6 border-b border-gray-100/30">
                  <div class="text-gray-600 text-sm">
                    <div
                      v-if="!expandedSolutiRows.includes(penyakit._id) && penyakit.solusi.length > 100"
                      class="space-y-2"
                    >
                      <p>{{ penyakit.solusi.substring(0, 100) }}...</p>
                      <button
                        @click="toggleExpandSolusi(penyakit._id)"
                        class="text-green-600 hover:text-green-800 text-xs font-medium underline flex items-center space-x-1"
                      >
                        <span>Lihat selengkapnya</span>
                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                      </button>
                    </div>
                    <div v-else class="space-y-2">
                      <p class="leading-relaxed">{{ penyakit.solusi }}</p>
                      <button
                        v-if="penyakit.solusi.length > 100"
                        @click="toggleExpandSolusi(penyakit._id)"
                        class="text-green-600 hover:text-green-800 text-xs font-medium underline flex items-center space-x-1"
                      >
                        <span>Lihat lebih sedikit</span>
                        <svg class="w-3 h-3 transform rotate-180" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-6 border-b border-gray-100/30">
                  <div class="flex items-center justify-center space-x-2">
                    <!-- Edit Button -->
                    <router-link
                      :to="`/admin/penyakit/edit/${penyakit._id}`"
                      class="group/btn relative inline-flex items-center px-3 py-2 bg-gradient-to-r from-emerald-400 to-teal-500 text-white text-xs font-medium rounded-lg shadow-md hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105"
                    >
                      <div
                        class="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-lg"
                      ></div>
                      <svg
                        class="relative w-3 h-3 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                        />
                      </svg>
                      <span class="relative">Edit</span>
                    </router-link>

                    <!-- Delete Button -->
                    <button
                      @click="hapusPenyakit(penyakit._id, penyakit.nama)"
                      class="group/btn relative inline-flex items-center px-3 py-2 bg-gradient-to-r from-red-400 to-pink-500 text-white text-xs font-medium rounded-lg shadow-md hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105"
                    >
                      <div
                        class="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-lg"
                      ></div>
                      <svg
                        class="relative w-3 h-3 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span class="relative">Hapus</span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div v-if="totalPages > 1" class="bg-gradient-to-r from-gray-50/80 to-slate-50/80 backdrop-blur-sm border-t border-gray-100/50 px-6 py-4">
          <div class="flex items-center justify-between">
            <div class="text-sm text-gray-600">
              Menampilkan {{ startIndex + 1 }} - {{ Math.min(endIndex, penyakitList.length) }} dari {{ penyakitList.length }} penyakit
            </div>
            <div class="flex items-center space-x-2">
              <!-- Previous Button -->
              <button
                @click="goToPage(currentPage - 1)"
                :disabled="currentPage === 1"
                :class="[
                  'flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300',
                  currentPage === 1 
                    ? 'text-gray-400 bg-gray-100 cursor-not-allowed' 
                    : 'text-gray-700 bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 shadow-sm hover:shadow-md'
                ]"
              >
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Sebelumnya
              </button>

              <!-- Page Numbers -->
              <div class="flex items-center space-x-1">
                <button
                  v-for="page in visiblePages"
                  :key="page"
                  @click="goToPage(page)"
                  :class="[
                    'px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300',
                    page === currentPage
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg'
                      : 'text-gray-700 bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 shadow-sm hover:shadow-md'
                  ]"
                >
                  {{ page }}
                </button>
              </div>

              <!-- Next Button -->
              <button
                @click="goToPage(currentPage + 1)"
                :disabled="currentPage === totalPages"
                :class="[
                  'flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300',
                  currentPage === totalPages 
                    ? 'text-gray-400 bg-gray-100 cursor-not-allowed' 
                    : 'text-gray-700 bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 shadow-sm hover:shadow-md'
                ]"
              >
                Selanjutnya
                <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div
      v-if="showDeleteModal"
      class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
    >
      <div class="group relative max-w-md w-full">
        <div
          class="absolute inset-0 bg-gradient-to-br from-red-400/20 via-pink-400/20 to-rose-400/20 rounded-2xl blur-xl"
        ></div>
        <div
          class="relative bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/30 p-6"
        >
          <div class="text-center">
            <div
              class="w-16 h-16 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">
              Konfirmasi Hapus
            </h3>
            <p class="text-gray-600 mb-6">
              Yakin ingin menghapus penyakit
              <strong>{{ deleteTarget.nama }}</strong
              >?<br />
              <span class="text-sm text-red-600"
                >Tindakan ini tidak dapat dibatalkan.</span
              >
            </p>
            <div class="flex space-x-3">
              <button
                @click="showDeleteModal = false"
                class="flex-1 px-4 py-2 bg-gradient-to-r from-gray-400 to-slate-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              >
                Batal
              </button>
              <button
                @click="confirmDelete"
                :disabled="deleting"
                class="flex-1 px-4 py-2 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 disabled:opacity-50"
              >
                {{ deleting ? "Menghapus..." : "Hapus" }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import penyakitAPI from "@/api/admin/penyakit.service";

export default {
  name: "ListPenyakit",
  data() {
    return {
      penyakitList: [],
      loading: false,
      error: null,
      showDeleteModal: false,
      deleteTarget: { id: null, nama: "" },
      deleting: false,
      currentPage: 1,
      itemsPerPage: 5,
      expandedRows: [],
      expandedSolutiRows: []
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.penyakitList.length / this.itemsPerPage);
    },
    startIndex() {
      return (this.currentPage - 1) * this.itemsPerPage;
    },
    endIndex() {
      return this.startIndex + this.itemsPerPage;
    },
    paginatedPenyakit() {
      return this.penyakitList.slice(this.startIndex, this.endIndex);
    },
    visiblePages() {
      const delta = 2;
      const range = [];
      const rangeWithDots = [];

      for (let i = Math.max(2, this.currentPage - delta); 
           i <= Math.min(this.totalPages - 1, this.currentPage + delta); 
           i++) {
        range.push(i);
      }

      if (this.currentPage - delta > 2) {
        rangeWithDots.push(1, '...');
      } else {
        rangeWithDots.push(1);
      }
      rangeWithDots.push(...range);
      if (this.currentPage + delta < this.totalPages - 1) {
        rangeWithDots.push('...', this.totalPages);
      } else {
        rangeWithDots.push(this.totalPages);
      }
      return rangeWithDots;
    }
  },
  created() {
    this.getDataPenyakit();
  },
  methods: {
    async getDataPenyakit() {
      this.loading = true;
      this.error = null;
      try {
        const res = await penyakitAPI.getAll();
        this.penyakitList = res.data;
      } catch (err) {
        this.error = "Gagal memuat data penyakit";
        console.error(err);
      } finally {
        this.loading = false;
      }
    },
    toggleExpand(id) {
      const index = this.expandedRows.indexOf(id);
      if (index > -1) {
        this.expandedRows.splice(index, 1);
      } else {
        this.expandedRows.push(id);
      }
    },
    toggleExpandSolusi(id) {
      const index = this.expandedSolutiRows.indexOf(id);
      if (index > -1) {
        this.expandedSolutiRows.splice(index, 1);
      } else {
        this.expandedSolutiRows.push(id);
      }
    },
    goToPage(page) {
      if (page < 1 || page > this.totalPages) return;
      this.currentPage = page;
    },
    async hapusPenyakit(id, nama) {
      this.deleteTarget = { id, nama };
      this.showDeleteModal = true;
    },
    async confirmDelete() {
      this.deleting = true;
      try {
        await penyakitAPI.delete(this.deleteTarget.id);
        alert(`Penyakit ${this.deleteTarget.nama} berhasil dihapus`);
        this.getDataPenyakit();
      } catch (err) {
        alert("Gagal menghapus penyakit");
        console.error(err);
      } finally {
        this.showDeleteModal = false;
        this.deleting = false;
      }
    }
  }
};
</script>
