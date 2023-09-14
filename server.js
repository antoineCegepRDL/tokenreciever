const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 1080;

let requestBody = '';

// Enable CORS for all routes
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// Create a route to log the request body
app.post('/', (req, res) => {
  console.log('Request Body:', req.body);
  requestBody = req.body;
  res.json({ message: 'Request body logged successfully' });
});

app.get('/body', (req, res) => {
  const htmlResponse = `
    <html>
      <head>
        <title>XSS Example</title>
      </head>
      <body>
        <h1>Body: ${JSON.stringify(requestBody)}</h1>
      </body>
    </html>
  `;
  res.send(htmlResponse);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
