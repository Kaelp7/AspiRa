<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nama = $_POST['nama'];
    $nip = $_POST['nip'];
    $no_hp = $_POST['no_hp'];

    // Proses upload foto profil
    if (isset($_FILES['profile_pic']) && $_FILES['profile_pic']['error'] == 0) {
        $target_dir = "uploads/";
        $target_file = $target_dir . basename($_FILES["profile_pic"]["name"]);
        $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

        // Validasi tipe file
        $check = getimagesize($_FILES["profile_pic"]["tmp_name"]);
        if ($check !== false) {
            // Validasi ukuran file (contoh: maksimal 2MB)
            if ($_FILES["profile_pic"]["size"] <= 2000000) {
                // Validasi tipe file (contoh: hanya JPG, JPEG, PNG & GIF yang diizinkan)
                if (in_array($imageFileType, ['jpg', 'jpeg', 'png', 'gif'])) {
                    // Proses upload
                    if (move_uploaded_file($_FILES["profile_pic"]["tmp_name"], $target_file)) {
                        echo "The file " . htmlspecialchars(basename($_FILES["profile_pic"]["name"])) . " has been uploaded.";
                    } else {
                        echo "Sorry, there was an error uploading your file.";
                    }
                } else {
                    echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
                }
            } else {
                echo "Sorry, your file is too large.";
            }
        } else {
            echo "File is not an image.";
        }
    }

    // Proses penyimpanan data lainnya ke database
    // Kode untuk menyimpan $nama, $nip, $wilayah, dan $no_hp ke database

    // Redirect kembali ke halaman profil
    header("Location: profil.html");
    exit();
}
?>