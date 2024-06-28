const http = require('http');
//const url = require('url');

let usersList = [];

const server = http.createServer((req, res) => {

    const {headers, method, url} = req;
    let body = [];

    req.on("data", data => {
        console.log("Data");
        console.log(data.toString());
        body = data.toString();
    })

    req.on("error", err => {
        console.log("Error");
        console.log(err);
    })

    req.on("end", endData => {
        console.log("EndData");
        console.log(endData);
    
        // Handle HTTP GET
    if (method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('Received a GET request\n')
    }

    // Handle HTTP POST
    else if (method === 'POST') {
        const pathName = url.slice(1);
        console.log(pathName);
        console.log(body);
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        if (pathName === 'login') {
            if (body && body.includes('username') && body.includes('password')) {
                res.end('Login Successful!\n');
            }
            else {
                res.end('Login Failed! Username and password are required.\n');
            }
        }        
        else {
            res.end('Got a POST request.\n');
        }
    }

    // Handle HTTP PUT
    else if (method === 'PUT') {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        if (body && body.includes('username')){
            res.end('Update Successful!\n')
        }
        else {
            res.end('Update Failed: User not found!\n')
        }
    }

    // Handle HTTP DELETE
    else if (method === 'DELETE') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        if (body && body.includes('username')){
            res.end('DELETE Successful!\n')
        }
        else {
            res.end('DELETE Failed: User not found!\n')
        }
    }

    // Default response for other methods
    else {
        res.writeHead(405)
        res.end(`${req.method} is not allowed on this server`)
    }

    })

})

const PORT = 3000
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});
