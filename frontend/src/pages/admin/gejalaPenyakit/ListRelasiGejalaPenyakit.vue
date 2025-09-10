<template>
  <div class="relative min-h-screen">
    <!-- Background decoration -->
    <div class="relative">
      <!-- Header Section -->
      <div class="mb-8">
        <div class="flex items-center justify-between">
          <div>
            <h1
              class="text-3xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2"
            >
              Daftar Relasi Gejala - Penyakit
            </h1>
            <p class="text-gray-600">
              Kelola hubungan antara gejala dan penyakit dalam sistem pakar kucing
            </p>
          </div>
        </div>
      </div>

      <!-- Search and Filter Section -->
      <div class="mb-6">
        <div class="group relative">
          <div
            class="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-teal-400/10 to-cyan-400/10 rounded-xl blur-lg"
          ></div>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="group relative">
        <div
          class="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-teal-400/10 to-cyan-400/10 rounded-2xl blur-xl"
        ></div>
        <div
          class="relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/30 p-12"
        >
          <div class="flex items-center justify-center">
            <div class="relative">
              <div
                class="w-12 h-12 rounded-full border-4 border-emerald-200 border-t-emerald-600 animate-spin"
              ></div>
              <div
                class="absolute inset-0 w-12 h-12 rounded-full border-4 border-transparent border-t-teal-400 animate-spin animation-delay-150"
              ></div>
            </div>
            <span class="ml-4 text-gray-600 font-medium"
              >Memuat data relasi...</span
            >
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else-if="validRelasiList.length === 0" class="group relative">
        <div
          class="absolute inset-0 bg-gradient-to-br from-gray-400/10 via-slate-400/10 to-zinc-400/10 rounded-2xl blur-xl"
        ></div>
        <div
          class="relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/30 p-12 text-center"
        >
          <div
            class="w-16 h-16 bg-gradient-to-r from-gray-400 to-slate-500 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <svg
              class="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-2">Tidak Ada Data</h3>
          <p class="text-gray-600 mb-4">
            Belum ada relasi gejala-penyakit yang ditambahkan
          </p>
          <router-link
            to="/admin/gejala-penyakit/tambah"
            class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
          >
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
            Tambah Relasi Pertama
          </router-link>
        </div>
      </div>

      <!-- Data Table -->
      <div v-else class="group relative">
        <div
          class="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-teal-400/10 to-cyan-400/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"
        ></div>
        <div
          class="relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/30 overflow-hidden"
        >
          <!-- Table Header -->
          <div
            class="bg-gradient-to-r from-emerald-50/80 to-teal-50/80 backdrop-blur-sm border-b border-emerald-100/50 px-6 py-4"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <div
                  class="w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center"
                >
                  <svg
                    class="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-800">
                  Data Relasi Gejala-Penyakit
                </h3>
              </div>
              <div>
                <p class="text-sm text-gray-600">
                  {{ validRelasiList.length }} relasi ditemukan
                </p>
              </div>
            </div>
          </div>

          <!-- Table Content -->
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gradient-to-r from-gray-50 to-slate-50">
                <tr>
                  <th
                    class="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    <div class="flex items-center space-x-2">
                      <div class="w-3 h-3 bg-emerald-400 rounded-sm"></div>
                      <span>Penyakit</span>
                    </div>
                  </th>
                  <th
                    class="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    <div class="flex items-center space-x-2">
                      <div class="w-3 h-3 bg-teal-400 rounded-sm"></div>
                      <span>Gejala Terkait</span>
                    </div>
                  </th>
                  <th
                    class="px-6 py-4 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    <div class="flex items-center justify-center space-x-2">
                      <div class="w-3 h-3 bg-orange-400 rounded-sm"></div>
                      <span>Aksi</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100/50">
                <tr
                  v-for="(relasi, index) in validRelasiList"
                  :key="relasi._id"
                  class="group/row hover:bg-gradient-to-r hover:from-emerald-50/30 hover:to-teal-50/30 transition-all duration-300"
                  :class="index % 2 === 0 ? 'bg-white/50' : 'bg-gray-50/30'"
                >
                  <td class="px-6 py-4">
                    <div class="flex items-center">
                      <div>
                        <div
                          class="text-sm font-medium text-gray-900 group-hover/row:text-emerald-700 transition-colors duration-300"
                        >
                          {{ relasi.penyakit?.nama || 'Penyakit tidak ditemukan' }}
                        </div>
                        <div class="text-xs text-gray-500">
                          {{ relasi.penyakit?.kode || '-' }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="space-y-1">
                      <div
                        v-for="gejala in (relasi.gejala || [])"
                        :key="gejala._id"
                        class="flex items-center"
                      >
                        <div
                          class="w-2 h-2 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mr-2"
                        ></div>
                        <span class="text-sm text-gray-700">{{ gejala?.nama || 'Gejala tidak ditemukan' }}</span>
                      </div>
                      <div class="mt-2">
                        <span
                          class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800"
                        >
                          {{ (relasi.gejala || []).length }} gejala
                        </span>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 text-center">
                    <div class="flex items-center justify-center space-x-2">
                      <!-- Edit Button -->
                      <router-link
                        :to="`/admin/gejala-penyakit/edit/${relasi._id}`"
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
                        @click="hapusRelasi(relasi._id, relasi.penyakit?.nama || 'Penyakit tidak ditemukan')"
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
              Yakin ingin menghapus relasi untuk penyakit
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
import gejalaPenyakitAPI from "@/api/admin/gejalaPenyakit.service";

export default {
  name: "RelasiGejalaPenyakitList",
  data() {
    return {
      relasiList: [],
      loading: true,
      showDeleteModal: false,
      deleteTarget: { id: null, nama: "" },
      deleting: false,
    };
  },
  computed: {
    // Filter data yang valid (tidak null/undefined)
    validRelasiList() {
      return this.relasiList.filter(relasi => 
        relasi && 
        relasi.penyakit && 
        relasi.penyakit.nama
      );
    }
  },
  methods: {
    async fetchRelasi() {
      this.loading = true;
      try {
        const res = await gejalaPenyakitAPI.getAll();
        // Filter data yang valid saat menerima dari API
        this.relasiList = (res.data || []).filter(item => 
          item && 
          typeof item === 'object' &&
          item.penyakit
        );
      } catch (err) {
        console.error("Gagal memuat data relasi:", err);
        this.showErrorMessage("Gagal memuat data relasi");
        this.relasiList = []; // Set default ke array kosong jika error
      } finally {
        this.loading = false;
      }
    },

    hapusRelasi(id, nama) {
      this.deleteTarget = { id, nama };
      this.showDeleteModal = true;
    },

    async confirmDelete() {
      this.deleting = true;
      try {
        await gejalaPenyakitAPI.delete(this.deleteTarget.id);
        this.showSuccessMessage("Relasi berhasil dihapus");
        this.fetchRelasi();
        this.showDeleteModal = false;
      } catch (err) {
        console.error("Gagal menghapus relasi:", err);
        this.showErrorMessage("Gagal menghapus relasi");
      } finally {
        this.deleting = false;
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
    },
  },
  mounted() {
    this.fetchRelasi();
  },
};
</script>