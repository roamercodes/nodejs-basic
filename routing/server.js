const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;

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

