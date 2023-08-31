const http = require('http');

const routes= require('./routes.js')

const port = 4000;

console.log(routes.someText)
const server = http.createServer(routes.handler)

server.listen(port);