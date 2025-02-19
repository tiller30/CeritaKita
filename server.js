const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Koneksi ke MySQL
const db = mysql.createConnection({
    host: 'localhost', // Ganti dengan IP address jika diakses dari handphone
    user: 'root',      // Ganti dengan username MySQL Anda
    password: '',      // Ganti dengan password MySQL Anda
    database: 'memories_db'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
    } else {
        console.log('Connected to MySQL database.');
    }
});

// Endpoint untuk menyimpan kenangan
app.post('/api/memories', (req, res) => {
    const { photo, story } = req.body;
    if (!photo || !story) {
        return res.status(400).json({ error: 'Photo and story are required.' });
    }

    const query = 'INSERT INTO memories (photo, story) VALUES (?, ?)';
    db.query(query, [photo, story], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: result.insertId });
    });
});

// Endpoint untuk mendapatkan semua kenangan
app.get('/api/memories', (req, res) => {
    const query = 'SELECT * FROM memories';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Endpoint untuk mendapatkan kenangan acak
app.get('/api/memories/random', (req, res) => {
    const query = 'SELECT * FROM memories ORDER BY RAND() LIMIT 1';
    db.query(query, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(result[0]);
    });
});

// Jalankan server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
