const express = require('express');
const app = express();
const port = 8001;

// Serve static files from the "public" directory
app.use(express.static('Frontend'));

app.listen(8001, '0.0.0.0', () => {
  console.log("Server running at http://0.0.0.0:8001");
});