const strings = [
  {
    id: 1,
    data: {
      en: 'Loading',
      id: 'Memuat',
    },
  },
  {
    id: 2,
    data: {
      en: 'Registration failed:',
      id: 'Pendaftaran gagal:',
    },
  },
  {
    id: 3,
    data: {
      en: 'Register Account',
      id: 'Daftar Akun',
    },
  },
  {
    id: 4,
    data: {
      en: 'Already have an account?',
      id: 'Sudah punya akun?',
    },
  },
  {
    id: 5,
    data: {
      en: 'Login here.',
      id: 'Masuk di sini.',
    },
  },
  {
    id: 6,
    data: {
      en: 'Login',
      id: 'Masuk',
    },
  },
  {
    id: 7,
    data: {
      en: 'Enter your name ...',
      id: 'Masukkan nama kamu ...',
    },
  },
  {
    id: 8,
    data: {
      en: 'Enter your email ...',
      id: 'Masukkan surel kamu ...',
    },
  },
  {
    id: 9,
    data: {
      en: 'Enter your password ...',
      id: 'Masukkan kata sandi kamu ...',
    },
  },
  {
    id: 10,
    data: {
      en: 'Re-enter your password ...',
      id: 'Masukkan kembali kata sandi kamu ...',
    },
  },
  {
    id: 11,
    data: {
      en: 'Name',
      id: 'Nama',
    },
  },
  {
    id: 12,
    data: {
      en: 'Email',
      id: 'Surel',
    },
  },
  {
    id: 13,
    data: {
      en: 'Password',
      id: 'Kata Sandi',
    },
  },
  {
    id: 14,
    data: {
      en: 'Confirm Password',
      id: 'Konfirmasi Kata Sandi',
    },
  },
  {
    id: 15,
    data: {
      en: 'Register',
      id: 'Daftar',
    },
  },
  {
    id: 16,
    data: {
      en: 'Login failed:',
      id: 'Gagal masuk:',
    },
  },
  {
    id: 17,
    data: {
      en: "Let's, Login",
      id: 'Masuk di Sini',
    },
  },
  {
    id: 18,
    data: {
      en: "Don't have an account?",
      id: 'Belum punya akun?',
    },
  },
  {
    id: 19,
    data: {
      en: 'Register here.',
      id: 'Daftar di sini.',
    },
  },
  {
    id: 20,
    data: {
      en: 'required',
      id: 'wajib diisi',
    },
  },
  {
    id: 21,
    data: {
      en: 'must be a valid email',
      id: 'harus surel yang valid',
    },
  },
  {
    id: 22,
    data: {
      en: 'characters',
      id: 'karakter',
    },
  },
  {
    id: 23,
    data: {
      en: 'current',
      id: 'saat ini',
    },
  },
  {
    id: 24,
    data: {
      en: "confirm password don't match",
      id: 'kata sandi konfirmasi tidak cocok',
    },
  },
  {
    id: 25,
    data: {
      en: 'Open Menu',
      id: 'Buka Menu',
    },
  },
  {
    id: 26,
    data: {
      en: 'Close Menu',
      id: 'Tutup Menu',
    },
  },
  {
    id: 27,
    data: {
      en: 'Home',
      id: 'Beranda',
    },
  },
  {
    id: 28,
    data: {
      en: 'Archives',
      id: 'Arsip',
    },
  },
  {
    id: 29,
    data: {
      en: 'Language',
      id: 'Bahasa',
    },
  },
  {
    id: 30,
    data: {
      en: 'Theme',
      id: 'Tema',
    },
  },
  {
    id: 31,
    data: {
      en: 'Logout',
      id: 'Keluar',
    },
  },
  {
    id: 32,
    data: {
      en: 'Light',
      id: 'Terang',
    },
  },
  {
    id: 33,
    data: {
      en: 'Dark',
      id: 'Gelap',
    },
  },
  {
    id: 34,
    data: {
      en: 'Active Notes',
      id: 'Catatan Aktif',
    },
  },
  {
    id: 35,
    data: {
      en: 'Archived Notes',
      id: 'Catatan Terarsip',
    },
  },
  {
    id: 36,
    data: {
      en: 'Your Amazing Notes',
      id: 'Daftar Catatanmu',
    },
  },
  {
    id: 37,
    data: {
      en: 'Your Archived Notes',
      id: 'Daftar Catatan Terarsip',
    },
  },
  {
    id: 38,
    data: {
      en: 'Search your notes by title here ...',
      id: 'Cari catatanmu berdasarkan judul di sini ...',
    },
  },
  {
    id: 39,
    data: {
      en: 'Search Notes',
      id: 'Cari Catatan',
    },
  },
  {
    id: 40,
    data: {
      en: 'No notes found.',
      id: 'Tidak ada catatan.',
    },
  },
  {
    id: 41,
    data: {
      en: 'No archived notes found.',
      id: 'Tidak ada catatan terarsip.',
    },
  },
  {
    id: 42,
    data: {
      en: 'Add Note',
      id: 'Tambah Catatan',
    },
  },
  {
    id: 43,
    data: {
      en: 'Add New Note',
      id: 'Tambah Catatan Baru',
    },
  },
  {
    id: 44,
    data: {
      en: 'Open Note',
      id: 'Buka Catatan',
    },
  },
  {
    id: 45,
    data: {
      en: 'Delete Note',
      id: 'Hapus Catatan',
    },
  },
  {
    id: 46,
    data: {
      en: 'Are you sure to delete',
      id: 'Apakah kamu yakin ingin menghapus catatan',
    },
  },
  {
    id: 47,
    data: {
      en: 'note',
      id: 'ini',
    },
  },
  {
    id: 48,
    data: {
      en: 'Delete',
      id: 'Hapus',
    },
  },
  {
    id: 49,
    data: {
      en: 'Remove Note from Archives',
      id: 'Keluarkan Catatan dari Arsip',
    },
  },
  {
    id: 50,
    data: {
      en: 'Add Note to Archives',
      id: 'Masukkan Catatan ke Arsip',
    },
  },
  {
    id: 51,
    data: {
      en: 'Back to Home',
      id: 'Kembali ke Beranda',
    },
  },
  {
    id: 52,
    data: {
      en: 'Error 404',
      id: 'Kesalahan 404',
    },
  },
  {
    id: 53,
    data: {
      en: 'Page Not Found',
      id: 'Halaman Tidak Ditemukan',
    },
  },
  {
    id: 54,
    data: {
      en: 'Remove from Archives',
      id: 'Keluarkan dari Arsip',
    },
  },
  {
    id: 55,
    data: {
      en: 'Add to Archives',
      id: 'Tambahkan ke Arsip',
    },
  },
  {
    id: 56,
    data: {
      en: 'Note',
      id: 'Catatan',
    },
  },
  {
    id: 57,
    data: {
      en: 'Close',
      id: 'Tutup',
    },
  },
  {
    id: 58,
    data: {
      en: 'Congratulations, your account has been successfully registered. Please login to continue.',
      id: 'Selamat, akun kamu berhasil terdaftar. Silakan masuk untuk melanjutkan.',
    },
  },
  {
    id: 59,
    data: {
      en: 'Good Morning',
      id: 'Selamat Pagi',
    },
  },
  {
    id: 60,
    data: {
      en: 'Good Noon',
      id: 'Selamat Siang',
    },
  },
  {
    id: 61,
    data: {
      en: 'Good Afternoon',
      id: 'Selamat Sore',
    },
  },
  {
    id: 62,
    data: {
      en: 'Good Night',
      id: 'Selamat Malam',
    },
  },
  {
    id: 63,
    data: {
      en: 'Add New Note',
      id: 'Tambah Catatan Baru',
    },
  },
  {
    id: 64,
    data: {
      en: 'Note Title',
      id: 'Judul Catatan',
    },
  },
  {
    id: 65,
    data: {
      en: 'Note Body',
      id: 'Isi Catatan',
    },
  },
  {
    id: 66,
    data: {
      en: 'Enter your words here ...',
      id: 'Masukkan kata-katamu di sini ...',
    },
  },
];

const getString = (id, locale = 'en') => strings.find((string) => string.id === id).data[locale];

export default getString;
