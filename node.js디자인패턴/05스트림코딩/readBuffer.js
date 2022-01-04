const fs = require('fs');
const zlib = require('zlib');

const file = process.argv[2];

fs.readFile(file, (err, buff) => {
  console.error(err)
  zlib.gzip(buff, (err, buff) => {
    fs.writeFile(file + '.gz', buff, err => {
      console.log('File successfully compressed');
    })
  })
});
