const http = require('http');

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.end('Welcome to Home page!');
    }
    if (req.url === '/about') {
        res.end('This is about node.js');
    }
    res.end(`
        <h1>Oops</h1>
        <p>We can't seem to find page</p>
        <a href = "/">back Home</a>
        `);
});

server.listen(5000);