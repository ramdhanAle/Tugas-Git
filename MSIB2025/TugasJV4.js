// Class Kendaraan
class Kendaraan {
    constructor(merk, type) {
        this.merk = merk;
        this.type = type;
    }

    getInfo() {
        return `${this.merk} - ${this.type}`;
    }
}

// Class Pelanggan
class Pelanggan {
    constructor(nama, nomorTelepon) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = null; // Kendaraan yang disewa oleh pelanggan yg awalnya tidak disewa
    }

    sewaKendaraan(kendaraan) {
        this.kendaraanDisewa = kendaraan;
        console.log(`${this.nama} telah sewa kendaraan ${kendaraan.getInfo()}.`);
    }

    getInfo() {
        return {
            nama : this.nama,
            nomorTelepon : this.nomorTelepon,
            kendaraanDisewa : this.kendaraanDisewa ? this.kendaraanDisewa.getInfo() : "Tidak ada kendaraan disewa.",
        };
    }
}

// Sistem Manajemen
class SistemManajemenTransportasi {
    constructor() {
        this.pelangganList = [];
    }

    tambahPelanggan(pelanggan) {
        this.pelangganList.push(pelanggan);
    }

    tampilkanDaftarPelanggan() {
        console.log("Daftar Pelanggan yang menyewa kendaraan:");
        this.pelangganList.forEach((pelanggan, index) => {
            const info = pelanggan.getInfo();
            console.log(`${index + 1}. ${info.nama} - ${info.nomorTelepon} - ${info.kendaraanDisewa}`);
        });
    }
}

// Contoh penggunaan
const sistemManajemen = new SistemManajemenTransportasi();

// Membuat Kendaraan
const mobil = new Kendaraan("Honda", "Civic");
const mobil2 = new Kendaraan("Lamborghini", "Revuelto");
const mobil3 = new Kendaraan("Lamborghini", "Aventador");
const motor = new Kendaraan("Ducati", "Monster 1200");
const motor2 = new Kendaraan("Ducati", "Panigale V4 R");

// Membuat Pelanggan
const pelanggan1 = new Pelanggan("Ali", "1234567890");
const pelanggan2 = new Pelanggan("Budi", "0987654321");
const pelanggan3 = new Pelanggan("Caca", "1111111111");
const pelanggan4 = new Pelanggan("Dedi", "2222222222");

// Menambahkan Pelanggan ke Sistem Manajemen
sistemManajemen.tambahPelanggan(pelanggan1);
sistemManajemen.tambahPelanggan(pelanggan2);
sistemManajemen.tambahPelanggan(pelanggan3);
sistemManajemen.tambahPelanggan(pelanggan4);

// Pelanggan Menyewa Kendaraan
pelanggan1.sewaKendaraan(motor);
pelanggan2.sewaKendaraan(motor2);
pelanggan3.sewaKendaraan(mobil);
pelanggan4.sewaKendaraan(mobil3);

// Menampilkan Daftar Pelanggan
sistemManajemen.tampilkanDaftarPelanggan();