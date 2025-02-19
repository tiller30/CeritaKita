-- Membuat database baru bernama 'memories_db'
CREATE DATABASE IF NOT EXISTS memories_db;

-- Menggunakan database 'memories_db'
USE memories_db;

-- Membuat tabel 'memories' untuk menyimpan data kenangan
CREATE TABLE IF NOT EXISTS memories (
    id INT AUTO_INCREMENT PRIMARY KEY, -- ID unik untuk setiap kenangan
    photo TEXT NOT NULL,               -- URL atau base64 string dari foto
    story TEXT NOT NULL                -- Cerita singkat yang ditulis oleh pengguna
);

-- Menambahkan beberapa data contoh (opsional)
INSERT INTO memories (photo, story) VALUES
('https://example.com/photo1.jpg', 'Ini adalah kenangan pertama saya.'),
('https://example.com/photo2.jpg', 'Ini adalah kenangan kedua saya.'),
('https://example.com/photo3.jpg', 'Ini adalah kenangan ketiga saya.');

-- Menampilkan semua data dalam tabel 'memories' (untuk testing)
SELECT * FROM memories;
