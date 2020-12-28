const http = require('http');
const httpServer = http.createServer(handleServer);


function handleServer (req, res) {
    if (req.url === '/welcome') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Welcome to Dominos!');
        res.end();
    }

    else if (req.url === '/contact') {
        const contact =  {
            phone: '18602100000',
            email: 'guestcaredominos@jublfood.com'
        }
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(contact));
        res.end();
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write("404"); 
        res.end();
    }    
    
}

module.exports = httpServer;
console.log("Listening...");
httpServer.listen(8081);