const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Parse incoming request bodies
app.use(bodyParser.json());

// Store messages in memory (replace this with a database in production)
let messages = [];

// Endpoint to handle incoming messages
app.post('/messages', (req, res) => {
    const message = req.body.message;
    // Log the received message
    console.log('Message received:', message);
    // Add the message to the list
    messages.push(message);
    // Send back a response
    res.status(201).json({ message: 'Message received and stored' });
});

// Endpoint to get all messages
app.get('/messages', (req, res) => {
    // Send back the list of messages
    res.json({ messages });
});

// Start the server
app.listen(() => {
    console.log('Server is running');
});
