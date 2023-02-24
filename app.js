const http = require('http');
const fs = require('fs');
const {getPages} = require("./helper");

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(getPages("./frontend/index.html"));

    }else if(req.url === "/about"){
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(getPages("./frontend/about.html"));

    }else if(req.url === "/contact"){
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(getPages("./frontend/contact.html"));

    }else{
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.end(getPages("./frontend/404.html"));
    }
})

server.listen(3000,()=>{
    console.log("Server listening on port 3000");
})