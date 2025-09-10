import { createRouter, createWebHistory } from 'vue-router';

// Public pages
import HomePage from '@/pages/HomePage.vue';
import LoginPage from '@/pages/auth/LoginPage.vue';
import RegisterPage from '@/pages/auth/RegisterPage.vue';

// Layouts
import AdminLayout from '@/components/layout/AdminLayout.vue';
import PasienLayout from '@/components/layout/PasienLayout.vue';

// Admin pages
import DashboardAdmin from '@/pages/admin/DashboardAdmin.vue';
import ListGejala from '@/pages/admin/gejala/ListGejala.vue';
import TambahGejala from '@/pages/admin/gejala/TambahGejala.vue';
import EditGejala from '@/pages/admin/gejala/EditGejala.vue';
import ListPenyakit from '@/pages/admin/penyakit/ListPenyakit.vue';
import TambahPenyakit from '@/pages/admin/penyakit/TambahPenyakit.vue';
import EditPenyakit from '@/pages/admin/penyakit/EditPenyakit.vue';
import ListRelasiGejalaPenyakit from '@/pages/admin/gejalaPenyakit/ListRelasiGejalaPenyakit.vue';
import TambahRelasiGejalaPenyakit from '@/pages/admin/gejalaPenyakit/TambahRelasiGejalaPenyakit.vue';
import EditRelasiGejalaPenyakit from '@/pages/admin/gejalaPenyakit/EditRelasiGejalaPenyakit.vue';

// Pasien pages
import PasienHomepage from '@/pages/pasien/PasienHomepage.vue';
import DiagnosaForm from '@/pages/pasien/DiagnosaForm.vue';
import DiagnosaList from '@/pages/pasien/DiagnosaList.vue';
import ArtikelKesehatan from '@/pages/pasien/ArtikelKesehatan.vue';

const routes = [
  // Public routes
  { path: '/', component: HomePage },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },

  // Admin routes with layout
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      { path: 'dashboard', component: DashboardAdmin },
      { path: 'gejala', component: ListGejala },
      { path: 'gejala/tambah', component: TambahGejala },
      { path: 'gejala/edit/:id', component: EditGejala, },
      { path: 'penyakit', component: ListPenyakit },
      { path: 'penyakit/tambah', component: TambahPenyakit },
      { path: 'penyakit/edit/:id', component: EditPenyakit, },
      { path: 'gejala-penyakit', component: ListRelasiGejalaPenyakit },
      { path: 'gejala-penyakit/tambah', component: TambahRelasiGejalaPenyakit },
      { path: 'gejala-penyakit/edit/:id', component: EditRelasiGejalaPenyakit, },
    ],
  },
  {
    path: '/pasien',
    component: PasienLayout,
    children: [
      { path: 'homepage', component: PasienHomepage },
      { path: 'diagnosa/form', component: DiagnosaForm },
      { path: 'diagnosa/list', component: DiagnosaList },
      { path: 'artikel', component: ArtikelKesehatan },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
