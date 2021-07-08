const http = require('http');

const server = http.createServer((req,res)=>{
    // console.log(req);
    // res.write('hi there');
    // res.end();
    if (req.url === '/'){
        res.end('welcome');
    }
    if(req.url === '/about'){
        res.end('about page');
    }
    res.end(`
        <h1>you fucked </h1>
    `);
})

server.listen(5500);