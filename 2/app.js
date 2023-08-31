const http = require('http');
const port = 4000;
const server = http.createServer((req,res)=>{
    console.log(req.url, req.method, req.headers)
    res.setHeader('Content-Type','text/html')
    res.write('<html>');
    res.write('<head><title>First Node.js Page</title></head>')
    res.write('<body><h1>Hello World!</h1></body>')
    res.write('</html>');
    res.end();
})

server.listen(port);