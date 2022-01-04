const fs = require('fs');
const zlib = require('zlib');
const http = require('http');

const server = http.createServer((req, res) => {
  const filename = req.headers.filename;
  console.log('filename: ', filename);
  req
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream(filename))
    .on('finish', () => {
      res.writeHead(201);
      res.end('That\'s it\n');
      console.log('file saved: ' + filename);
    });
});
server.listen(3000, () => console.log('listening...!'));