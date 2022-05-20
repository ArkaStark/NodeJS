const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        return(res.end('This is our home page'))
    }
    if(req.url === '/about'){
        return(res.end('Welcome to about our page'))
    }

    return(res.end(`
        <h1>Oops!</h1>
        <p>Are you lost?</p>
        <a href="/">Back Home</a>
    `))
})

server.listen(5000)