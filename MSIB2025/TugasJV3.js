// daftar produk di toko
let produkToko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5},
    { id: 2, nama: "Mouse", harga: 500000, stok: 30},
    { id: 3, nama: "Keyboard", harga: 1000000, stok: 10}
];

// fungsi menambahkan produk baru
function tambahProduk(nama, harga, stok) {
    const idBaru = produkToko.length > 0 ? produkToko[produkToko.length -1].id + 1 : 1; //penetapam ID baru
    const produkBaru = { id: idBaru, nama: nama, harga: harga, stok: stok}; //objek baru
    produkToko.push(produkBaru); //menambahkan produk baru ke array
    console.log(`Produk "${nama}" berhasil ditambahkan.`);
}

// fungsi menghapus daftar produk berdasarkan ID
function hapusProduk(id) {
    const index = produkToko.findIndex(produk => produk.id === id); //mencari index produk berdasarkan ID
    if (index !== -1) {
        produkToko.splice(index, 1); //hapus produk dari array
        console.log(`Produk dengan ID ${id} berhasil dihapus.`);
    } else {
        console.log(`Produk dengan ID ${id} tidak ditemukan.`);
    }
}

// fungsi menampilkan daftar produk
function tampilkanProduk() {
    console.log("Daftar Produk:");
    produkToko.forEach(produk => {
        console.log(`ID: ${produk.id}, Nama: ${produk.nama}, Harga: ${produk.harga}, Stok ${produk.stok}`);
    });
}

// berikut penggunaannya 
tampilkanProduk(); //menampilkan produk awal

// menambahkan produk baru
tambahProduk("Headphone", 500000, 50);
tampilkanProduk(); //menampilkan produk setelah ditambahkan

// menghapus produk dengan ID
hapusProduk(3); //hapus produk ID 3
tampilkanProduk(); //menampiilkan produk setelah dihapus