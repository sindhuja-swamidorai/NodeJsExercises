const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    switch(req.url) {
        case '/': 
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.write("Welcome to my node.js server!")
        break;
        case '/about': 
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.write("About")
        break;
        case '/contact': 
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.write("Contact")
        break;
            default:
                res.statusCode = 404
    } 
    res.end()
})

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
})
