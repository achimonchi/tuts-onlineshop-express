// import http
const http = require('http');

// import app
const app = require('./app');

const _port = process.env.PORT || 4000;

const server = http.createServer(app);

server.listen(_port, (err)=>{
    if(err) throw err;
    console.log(`Server running at port ${_port}`);
});