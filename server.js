const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Endpoint to handle incoming messages from the extension
app.post('/messages', (req, res) => {
    const message = req.body.message;
    // Log the received message
    console.log('Message received from extension:', message);
    // Process the message (you can implement your logic here)
    // For now, let's just send a simple response
    const response = `Server received message: ${message}`;
    // Send back a response to the extension
    res.json({ response });
});

// Endpoint to handle incoming messages from the web UI
app.post('/send-message', (req, res) => {
    const message = req.body.message;
    // Log the received message
    console.log('Message received from web UI:', message);
    // Send the message to the extension (you need to implement this part)
    // For now, let's just send a simple response
    const response = `Server received message from web UI: ${message}`;
    // Send back a response to the web UI
    res.json({ response });
});

// Serve static files (e.g., HTML, CSS, JS)
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
