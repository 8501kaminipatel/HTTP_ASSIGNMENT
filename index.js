const http = require('http');
const fs = require('fs');

const PORT = 8080;

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/home') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to Home Page');
  }

  else if (url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is an About Page of the Project');
  }

  else if (url === '/getproductdata') {
    fs.readFile('db.json', 'utf-8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error reading data');
      } else {
        const jsonData = JSON.parse(data);
        const productData = JSON.stringify(jsonData.products);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(productData);
      }
    });
  }

  else if (url === '/user') {
    fs.readFile('db.json', 'utf-8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error reading data');
      } else {
        const jsonData = JSON.parse(data);
        const userData = JSON.stringify(jsonData.user);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(userData);
      }
    });
  }

  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 - Page Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
