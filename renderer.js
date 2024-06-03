function handleFormSubmit(event) {
  event.preventDefault(); // Mencegah pengiriman default

  // Mengambil data formulir
  const formData = new FormData(event.target);

  // Mengirim data menggunakan fetch API
  fetch(event.target.action, {
      method: event.target.method,
      body: formData
  })
  .then(response => {
      if (response.ok) {
          // Mengarahkan ke halaman beranda setelah pengiriman berhasil
          window.location.href = 'Beranda.html';
      } else {
          // Tangani kesalahan pengiriman di sini
          alert('Pengiriman gagal, silakan coba lagi.');
      }
  })
  .catch(error => {
      // Tangani kesalahan jaringan di sini
      console.error('Error:', error);
      alert('Terjadi kesalahan, silakan coba lagi.');
  });
}

// Tambahkan event listener untuk memastikan fungsi terhubung setelah DOM dimuat
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
});
