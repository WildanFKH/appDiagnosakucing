const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth.route'));
app.use('/api/gejala', require('./routes/gejala.route'));
app.use('/api/penyakit', require('./routes/penyakit.route'));
app.use('/api/gejala-penyakit', require('./routes/gejalaPenyakit.route'));
app.use('/api/diagnosa', require('./routes/diagnosa.route'));
app.use('/api/dashboard', require('./routes/dashboard.route'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
