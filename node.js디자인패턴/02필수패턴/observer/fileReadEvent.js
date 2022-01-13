const eventEmitter = require('events').EventEmitter;
const fs = require('fs');

function readFile(files) {
  const event = new eventEmitter();
  files.forEach((f) => {
    fs.readFile(f, (err, data) => {
      if (err) return event.emit('err', err);
      event.emit('read', data.toString());
    });
  });
  return event;
}

readFile(['./aaa', './bbb'])
  .on('err', console.error)
  .on('read', (d) => console.log('read: ', d));