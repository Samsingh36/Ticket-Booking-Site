const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors({
    origin: 'https://ticket-booking-site-production.up.railway.app', // Replace with your frontend URL
    methods: 'GET,POST,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true
}));

// API route to handle form submissions
app.post('/api/contact', (req, res) => {
    const { name, email, phone, message } = req.body;
    console.log(`Received contact form submission: Name - ${name}, Email - ${email}, Phone - ${phone}, Message - ${message}`);
    res.json({ status: 'success', message: 'Form submitted successfully!' });
});

// Handle CORS preflight requests
app.options('/api/contact', (req, res) => {
    res.sendStatus(204);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
