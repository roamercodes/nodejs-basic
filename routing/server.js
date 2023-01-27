const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;

    // destructuring object to get property of url
    const { method, url } = request;

    if(url === '/') {
        if(method === 'GET') {
            // response bila client menggunakan GET
            response.end('<h1>Ini adalah homepage</h1>');
        } else {
            // response bila client tidak menggunakan GET
            response.end(`<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`);
        }
        // TODO 2: logika respons bila url bernilai '/'

    } else if(url === '/about') {
        // TODO 3: logika respons bila url bernilai '/about'
        if(method === 'GET') {
            // respons bila client menggunakan GET
            response.end('<h1>Halo! Ini adalah halaman about</h1>');
        } else if(method === 'POST') {
            // respons bila client menggunakan POST
            let body = [];
            request.on('data', (chunk) => {
                body.push(chunk);
            });

            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const {name} = JSON.parse(body);
                response.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`);
            });
        } else {
            response.end(`<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`);
      }
    } else {
        // TODO 1: logika respons bila url bukan '/' atau '/about'
        response.end(`<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`)
    }
};

