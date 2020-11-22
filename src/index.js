var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
   httpServer.post('/welcome', (req,res)=>{
        res.status(200).send("Welcome to Dominos!");
        
        
    }); 
    httpServer.post('/contact', (req,res)=>{
        const application = {
            "phone": '18602100000',
            "email": 'guestcaredominos@jublfood.com'
        }
        res.status(200).send(application);
        
    }); 
    res.status(404);
  
}

module.exports = httpServer;
httpServer.listen(8081);
