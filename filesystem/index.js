// TODO: tampilkan teks pada notes.txt pada console.
const fs = require('fs');
const path = require('path');

const data = fs.readFileSync('./filesystem/notes.txt', 'UTF-8');
// path.resolve(__dirname, 'notes.txt');
console.log(data);

