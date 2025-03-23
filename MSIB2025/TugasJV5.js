// Data Produk
let produkList = [
    { id: 1, nama: "Laptop", harga: 12000000, stok: 7 },
    { id: 2, nama: "Mouse", harga: 500000, stok: 30 },
    { id: 3, nama: "Keyboard", harga: 1000000, stok: 10 },
    { id: 4, nama: "Monitor", harga: 3000000, stok: 5 },
    { id: 5, nama: "Headphone", harga: 2000000, stok: 20 }
];

// Nama Fungsi Bebas
const eventHandler = {};

// Menambahkan Produk dengan Spread Operator
function tambahProduk(id, nama,harga, stok) {
    produkList.push({ id, nama, harga, stok });
}

// Menghapus Produk dengan Rest Parameter
function hapusProduk(id) {
    produkList = produkList.filter(produk => produk.id !== id);
}

// Menampilkan Produk dengan Destructuring
function tampilkanProduk() {
    produkList.forEach(({id, nama, harga, stok}) => {
        console.log(`ID: ${id}, Nama: ${nama}, Harga: ${harga}, Stok: ${stok}`);
    });
}

// Menambahkan Produk Baru
tambahProduk(6, "iPad", 7000000, 5);
console.log("=> Produk ditambahkan ID 6.");
tampilkanProduk(); // Menampilkan Produk setelah ditambah

// Menghapus Produk dengan ID tertentu
hapusProduk(3);
console.log("=> Produk ID 3 berhasil dihapus.");
tampilkanProduk(); // Menampilkan Produk setelah dihapus