import users from "./data.js"; // import data

const index = () => {
    // Tampil data
    console.log("Daftar User :");   
    users.map((user) => {  
        console.log(`=> Nama : ${user.username}, Umur : ${user.umur}, Alamat : ${user.alamat}, Email : ${user.email}`);
    });
};

const plus = (user) => {
    // Tambah data
    users.push(user);
    console.log(`Data ${user.username} berhasil ditambahkan.`);
};

const hapus = (userName) => {
    // Hapus data 
    const index = users.findIndex(user => user.nama === userName); // mencari index user berdasarkan username
    if (index !== -1) {
        users.splice(index, 1);
        console.log(`Data ${userName} berhasil dihapus.`);
    } else {
        console.log(`Data ${userName} tidak ditemukan.`);
    }
};

const main = () => {
    // Tambahkan dua data baru
    plus({ id: 11, username: "Rifki",umur: 20, alamat: "Jl. Sumber Raya", email: "email11.com" });
    plus({ id: 12, username: "Gustiawan",umur: 17, alamat: "Jl. Ramaido", email: "email12.com" });

    // Tampilkan semua data
    index();

    // Hapus data
    hapus("Ahmad");
    index(); // Tampilkan data setelah dihapus
};

main();