CREATE TABLE `user_akun`(
    `username` VARCHAR(100) NOT NULL PRIMARY KEY,
    `password` VARCHAR(256) DEFAULT NULL,
    `nip` VARCHAR(20) DEFAULT NULL,
    `wilayah` VARCHAR(50) DEFAULT NULL,
    `no_hp` VARCHAR(20) DEFAULT NULL,
    `picture` VARCHAR(256) DEFAULT NULL
) ENGINE=InnoDB;

INSERT INTO `user_akun` (`username`,`password`,`nip`,'wilayah','no_hp',`picture`) VALUES
('admin','1234','2102', 'manado', '0852', 'default.png'),
('user1','8888','0001', 'wilayah1', '0852', 'default.png');

CREATE TABLE `pengaduan` (
    `id_pengaduan` INT(11) NOT NULL PRIMARY KEY,
    `username` VARCHAR(100) NOT NULL,
    `jenis` ENUM('Kebersihan Lingkungan','Keamanan dan Kriminalitas ','Infrastruktur publik','Kesehatan Masyarakat ','Pelayanan Publik','Pendidikan','Ekonomi','Kesejahteraan sosial ','Pariwisata lokal','Kebudayaan dan kesenian') NOT NULL,
    `isi` VARCHAR(255) DEFAULT NULL,
    `wilayah` ENUM('Bunaken','Malalayang','Mapanget','Paal Dua','Sario','Singkil','Tikala','Tuminting','Wanea','Wenang') NOT NULL,
    `tanggal` DATE DEFAULT NULL,
    `lokasi` VARCHAR(100) DEFAULT NULL,
    `dokumentasi` VARCHAR(255) DEFAULT NULL,
    `status` ENUM('diproses','diterima','ditolak') DEFAULT NULL
) ENGINE=InnoDB;

INSERT INTO `pengaduan` (`id_pengaduan`,`jenis`,`isi`,`wilayah`,`tanggal`,`lokasi`,`dokumentasi`,`status`) VALUES
('1','Kebersihan Lingkungan','isi1','Bunaken','2004-04-20','lokasi1','default.png','diproses');

ALTER TABLE `pengaduan_ibfk_1` ADD KEY (`username`);

ALTER Table `pengaduan` MODIFY `id_pengaduan` INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;