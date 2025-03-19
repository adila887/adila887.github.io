// Mendapatkan semua elemen dengan class "buy-link"
const buyLinks = document.querySelectorAll('.buy-link');

// Tambahkan event listener ke setiap link
buyLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Mencegah link membuka halaman lain

    // Ambil data atribut 'data-name' dari link yang diklik
    const productName = event.target.getAttribute('data-name');

    // Tampilkan notifikasi atau alert
    alert(Anda telah memilih produk: ${productName}. Anda akan diarahkan ke halaman pembelian.);

    // Kode untuk mengarahkan ke halaman pembelian (setelah beberapa detik)
    setTimeout(() => {
      window.location.href = event.target.href;
    }, 2000); // Tunggu 2 detik sebelum diarahkan
  });
});