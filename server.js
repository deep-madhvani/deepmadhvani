// const express = require('express');
// const path = require('path');
// const app = express();
// app.use(express.static(__dirname + '/dist/personal-site-angular'));
// app.get('/*', function(req,res) {
// res.sendFile(path.join(__dirname+
// '/dist/personal-site-angular/index.html'));});
// app.listen(process.env.PORT || 8080);

const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 4200;

// Serve static files from the 'dist' folder
app.use(express.static(path.join(__dirname, 'dist')));

// Route all requests to Angular's 'index.html'
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
