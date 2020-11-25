var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
  if(req.url ==="/welcome")
    {   
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write("Welcome to Dominos!");
        res.end();
    } 
    else if(req.url ==="/contact")
    {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({
            phone: '18602100000',
            email: 'guestcaredominos@jublfood.com'
            }));
        res.end();
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end("404 Not Found");
  
}
httpServer.listen(8081);
module.exports = httpServer;
   

