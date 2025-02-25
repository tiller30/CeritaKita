require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware untuk membaca JSON
app.use(express.json());

// Serve file frontend
app.use(express.static('public'));

// Endpoint login
app.post('/api/login', (req, res) => {
    const { password } = req.body;
    if (password === process.env.PASSWORD) {
        res.json({ success: true });
    } else {
        res.status(401).json({ error: 'Password salah' });
    }
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
