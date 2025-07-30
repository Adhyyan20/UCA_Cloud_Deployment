const express = require('express');
const app = express();
const port = 81;

// Serve static files from the "public" directory
app.use(express.static('Frontend'));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
