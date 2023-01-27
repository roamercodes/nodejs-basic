const http = require('http');

// const requestListener = (request, response) => {
//     response.setHeader('Content-type', 'text/html');

//     response.statusCOde = 200;
//     response.end('<h1>Halo HTTP Server!</h1>');
// };

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});



    // destructuring object to get property of url
    const { method, url } = request;

    if(url === '/') {
        // TODO 2: logika respons bila url bernilai '/'

    } else if(url === '/about') {
        // TODO 3: logika respons bila url bernilai '/about'
    } else {
        // TODO 1: logika respons bila url bukan '/' atau '/about'
        response.end('<h1>Halaman tidak ditemukan!</h1>')
    }
};

