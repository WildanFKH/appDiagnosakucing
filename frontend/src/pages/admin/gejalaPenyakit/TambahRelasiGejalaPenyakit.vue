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
              {{ isEdit ? 'Edit' : 'Tambah' }} Relasi Gejala - Penyakit
            </h1>
            <p class="text-gray-600">
              {{ isEdit ? 'Perbarui hubungan' : 'Buat hubungan baru' }} antara gejala dan penyakit
            </p>
          </div>
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
              >Memuat data...</span
            >
          </div>
        </div>
      </div>

      <!-- Form -->
      <div v-else class="group relative">
        <div
          class="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-teal-400/10 to-cyan-400/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"
        ></div>
        <div
          class="relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/30 overflow-hidden"
        >
          <!-- Form Header -->
          <div
            class="bg-gradient-to-r from-emerald-50/80 to-teal-50/80 backdrop-blur-sm border-b border-emerald-100/50 px-6 py-4"
          >
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
                    d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-800">
                Form Relasi Gejala-Penyakit
              </h3>
            </div>
          </div>

          <!-- Form Content -->
          <form @submit.prevent="submitForm" class="p-6 space-y-6">
            <!-- Pilih Penyakit -->
            <div class="space-y-2">
              <label for="penyakit" class="block text-sm font-semibold text-gray-700 mb-2">
                <div class="flex items-center space-x-2">
                  <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Pilih Penyakit</span>
                  <span class="text-red-500">*</span>
                </div>
              </label>
              <div class="relative group/select">
                <div
                  class="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-xl blur opacity-0 group-hover/select:opacity-100 transition-opacity duration-300"
                ></div>
                <select
                  id="penyakit"
                  v-model="form.penyakit"
                  required
                  class="relative w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                >
                  <option value="" disabled>Pilih penyakit</option>
                  <option v-for="p in penyakitList" :key="p._id" :value="p._id">
                    {{ p.nama }} ({{ p.kode }})
                  </option>
                </select>
                <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <!-- Pilih Gejala -->
            <div class="space-y-4">
              <label class="block text-sm font-semibold text-gray-700">
                <div class="flex items-center space-x-2">
                  <div class="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span>Pilih Gejala Terkait</span>
                  <span class="text-red-500">*</span>
                </div>
              </label>
              
              <!-- Gejala Selection Info -->
              <div class="flex items-center justify-between p-3 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg border border-teal-100">
                <div class="flex items-center space-x-2">
                  <svg class="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="text-sm text-teal-700">
                    {{ form.gejala.length }} gejala dipilih dari {{ gejalaList.length }} tersedia
                  </span>
                </div>
                <button
                  type="button"
                  @click="selectAllGejala"
                  class="text-xs px-2 py-1 bg-teal-100 text-teal-700 rounded hover:bg-teal-200 transition-colors duration-200"
                >
                  {{ form.gejala.length === gejalaList.length ? 'Batalkan Semua' : 'Pilih Semua' }}
                </button>
              </div>

              <!-- Gejala Grid -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-80 overflow-y-auto p-1">
                <div
                  v-for="g in gejalaList"
                  :key="g._id"
                  class="group/checkbox relative"
                >
                  <div
                    class="absolute inset-0 bg-gradient-to-r from-teal-400/5 to-cyan-400/5 rounded-lg opacity-0 group-hover/checkbox:opacity-100 transition-opacity duration-300"
                  ></div>
                  <label
                    :for="'gejala-'+g._id"
                    class="relative flex items-start p-3 cursor-pointer rounded-lg hover:bg-gray-50/50 transition-all duration-200"
                  >
                    <div class="flex items-center h-5">
                      <input
                        :id="'gejala-'+g._id"
                        type="checkbox"
                        :value="g._id"
                        v-model="form.gejala"
                        class="w-4 h-4 text-teal-600 bg-white border-gray-300 rounded focus:ring-teal-500 focus:ring-2 transition-all duration-200"
                      />
                    </div>
                    <div class="ml-3 flex-1">
                      <div class="text-sm font-medium text-gray-900 group-hover/checkbox:text-teal-700 transition-colors duration-200">
                        {{ g.nama }}
                      </div>
                      <div class="text-xs text-gray-500 mt-1">
                        {{ g.kode }}
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <!-- Validation Message -->
              <div v-if="form.gejala.length === 0 && showValidation" class="flex items-center space-x-2 text-red-600 text-sm">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Pilih minimal satu gejala</span>
              </div>
            </div>

            <!-- Form Actions -->
            <div class="flex items-center justify-between pt-6 border-t border-gray-200">
              <div class="text-sm text-gray-500">
                {{ isEdit ? 'Memperbarui' : 'Menambahkan' }} relasi gejala-penyakit
              </div>
              <div class="flex space-x-3">
                <router-link
                  to="/admin/gejala-penyakit"
                  class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-400 to-slate-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Batal
                </router-link>
                <button
                  type="submit"
                  :disabled="submitting || form.gejala.length === 0"
                  class="group/btn relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <div
                    class="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-lg"
                  ></div>
                  <svg
                    v-if="submitting"
                    class="relative w-4 h-4 mr-2 animate-spin"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm3 5a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm0 4a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <svg
                    v-else
                    class="relative w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="relative">
                    {{ submitting ? 'Menyimpan...' : 'Simpan Relasi' }}
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gejalaPenyakitAPI from '@/api/admin/gejalaPenyakit.service';
import penyakitAPI from '@/api/admin/penyakit.service';
import gejalaAPI from '@/api/admin/gejala.service';

export default {
  name: 'RelasiGejalaPenyakitForm',
  props: {
    editId: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      form: {
        penyakit: '',
        gejala: []  // wajib array karena multiple checkbox
      },
      penyakitList: [],
      gejalaList: [],
      isEdit: false,
      loading: true,
      submitting: false,
      showValidation: false
    };
  },
  methods: {
    async fetchData() {
      this.loading = true;
      try {
        const [penyakitRes, gejalaRes] = await Promise.all([
          penyakitAPI.getAll(),
          gejalaAPI.getAll()
        ]);
        
        this.penyakitList = penyakitRes.data;
        this.gejalaList = gejalaRes.data;
      } catch (err) {
        console.error('Gagal memuat data:', err);
        this.showErrorMessage('Gagal memuat data penyakit atau gejala');
      } finally {
        this.loading = false;
      }
    },

    async fetchRelasi() {
      if (!this.editId) return;
      
      this.isEdit = true;
      try {
        const res = await gejalaPenyakitAPI.getById(this.editId);
        this.form.penyakit = res.data.penyakit._id;
        // Karena gejala di response berupa array objek, map ke array id
        this.form.gejala = res.data.gejala.map(g => g._id);
      } catch (err) {
        console.error('Gagal memuat data relasi:', err);
        this.showErrorMessage('Gagal memuat data relasi');
        this.$router.push('/admin/gejala-penyakit');
      }
    },

    async submitForm() {
      this.showValidation = true;
      
      if (this.form.gejala.length === 0) {
        this.showErrorMessage('Pilih minimal satu gejala');
        return;
      }

      this.submitting = true;
      try {
        if (this.isEdit) {
          await gejalaPenyakitAPI.update(this.editId, this.form);
          this.showSuccessMessage('Relasi berhasil diperbarui');
        } else {
          await gejalaPenyakitAPI.create(this.form);
          this.showSuccessMessage('Relasi berhasil ditambahkan');
        }
        this.$router.push('/admin/gejala-penyakit');
      } catch (err) {
        console.error('Gagal menyimpan relasi:', err);
        this.showErrorMessage(this.isEdit ? 'Gagal memperbarui relasi' : 'Gagal menambahkan relasi');
      } finally {
        this.submitting = false;
      }
    },

    selectAllGejala() {
      if (this.form.gejala.length === this.gejalaList.length) {
        this.form.gejala = [];
      } else {
        this.form.gejala = this.gejalaList.map(g => g._id);
      }
    },

    showSuccessMessage(message) {
      if (this.$toast) {
        this.$toast.success(message);
      } else {
        alert('✅ ' + message);
      }
    },

    showErrorMessage(message) {
      if (this.$toast) {
        this.$toast.error(message);
      } else {
        alert('❌ ' + message);
      }
    }
  },
  
  async mounted() {
    await this.fetchData();
    await this.fetchRelasi();
  }
};
</script>