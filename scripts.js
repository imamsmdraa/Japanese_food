// Tunggu sampai DOM siap
document.addEventListener("DOMContentLoaded", function () {
    // Cari tombol menggunakan id
    const changeBgButton = document.getElementById("changeBgButton");

    // Tambahkan event listener untuk mendeteksi klik pada tombol
    changeBgButton.addEventListener("click", function () {
        // Array warna yang tersedia
        const colors = ["#004643", "#001e1d", "#232946","#121629", "black", "#0f0e17"];

        // Pilih warna acak dari array
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        // Ubah warna background body
        document.body.style.backgroundColor = randomColor;
    });
});
