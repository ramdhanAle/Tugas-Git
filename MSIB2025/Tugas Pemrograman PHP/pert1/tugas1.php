<?php
// Inisialisasi variabel
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Menghindari serangan XSS
    $nama = htmlspecialchars($_POST['nama']);
    $email = htmlspecialchars($_POST['email']);
    $nilai = (int)$_POST['nilai']; // Konversi ke integer
    
    // Menentukan status dan kelas warna berdasarkan nilai
    if ($nilai > 70) {
        $status = "LULUS";
        $kelas_warna = "hasil-lulus";
    } else {
        $status = "REMEDIAL";
        $kelas_warna = "hasil-remedial";
    }
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Nilai Ujian</title>
    <style>
        body { 
            font-family: Arial, sans-serif;
            line-height: 1.6;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        
        h1 {
            color: #2c3e50;
            text-align: center;
        }
        
        .form-group {
            margin-bottom: 15px;
        }
        
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        
        input[type="text"],
        input[type="email"],
        input[type="number"] {
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        
        button {
            background-color: #3498db;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }
        
        button:hover {
            background-color: #2980b9;
        }
        
        .hasil {
            margin-top: 20px;
            padding: 15px;
            border-radius: 5px;
        }
        
        .hasil-lulus {
            background-color: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
        
        .hasil-remedial {
            background-color: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }
    </style>
</head>
<body>
    <h1>Form Nilai Ujian</h1>
    
    <form method="post" action="">
        <div class="form-group">
            <label for="nama">Nama Lengkap:</label>
            <input type="text" id="nama" name="nama" required>
        </div>
        
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
        </div>
        
        <div class="form-group">
            <label for="nilai">Nilai Ujian (0-100):</label>
            <input type="number" id="nilai" name="nilai" min="0" max="100" required>
        </div>
        
        <button type="submit">Cek Hasil</button>
    </form>

    <!-- Menampilkan hasil -->
    <?php if (isset($status)): ?>
        <div class="hasil <?php echo $kelas_warna; ?>">
            <h2>Hasil Ujian</h2>
            <p><strong>Nama:</strong> <?php echo $nama; ?></p>
            <p><strong>Email:</strong> <?php echo $email; ?></p>
            <p><strong>Nilai:</strong> <?php echo $nilai; ?></p>
            <p><strong>Status:</strong> <b><?php echo $status; ?></b></p>
        </div>
    <?php endif; ?>
</body>
</html>