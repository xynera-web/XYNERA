
document.getElementById('buy-now').addEventListener('click', function () {
    alert('Ayo pesan sekarang dan nikmati hidup sehat!');
});

document.getElementById('order-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const quantity = document.getElementById('quantity').value;

    if (name && email && quantity) {
        alert(`Terima kasih, ${name}! Pesanan Anda sejumlah ${quantity} telah kami terima. Cek email di ${email} untuk konfirmasi.`);
        this.reset(); // Mengosongkan form
    } else {
        alert('Harap isi semua data dengan lengkap.');
    }
});
// Tambahkan Event Listener ke Tombol Pilih Produk
const productButtons = document.querySelectorAll('.select-product');
productButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const productName = button.parentElement.querySelector('h3').textContent;
        alert(`Anda memilih: ${productName}. Anda akan diarahkan ke halaman pembelian.`);
        window.location.href = "https://shopee.co.id/?uls_trackid=51dd67ne0145&utm_campaign=-&utm_content=gxidshopeeshopeesddef----&utm_medium=affiliates&utm_source=an_11397350663&utm_term=c6sndh3rf8h5";
    });
});
// Fungsi Scroll ke Seksi Pilihan Produk
document.getElementById('buy now').addEventListener('click', () => {
    document.getElementById('pilihan-produk').scrollIntoView({
        behavior: 'smooth', // Scroll dengan efek halus
        block: 'start' // Bagian atas seksi ditampilkan
    });
});
