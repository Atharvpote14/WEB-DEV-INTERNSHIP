require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const connectDB= require('./config/db');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const app = express();

app.use (express.json());
app.use(cookieParser());

// lets req.cookies read cookies sent by the browser
connectDB();
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.listen(3000, () => console.log('Server running on port 3000'));