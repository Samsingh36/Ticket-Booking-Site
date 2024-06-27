const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// API route to handle form submissions
app.post('/api/contact', (req, res) => {
    const { name, email, phone, message } = req.body;
    console.log(`Received contact form submission: Name - ${name}, Email - ${email}, Phone - ${phone}, Message - ${message}`);
    res.json({ status: 'success', message: 'Form submitted successfully!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
