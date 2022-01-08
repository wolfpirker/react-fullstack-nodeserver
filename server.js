const http = require('http');


const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/plain' })
    res.end('Hello dude, i am a response')
})

const port = 8282;
server.listen(port, '127.0.0.1');
console.log(`server is running on ${port}`)