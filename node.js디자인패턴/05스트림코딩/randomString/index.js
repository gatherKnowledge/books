

const stream = require('stream');
const Chance = require('chance');
const chance = new Chance();


class RandomStringStream extends stream.Readable {
  constructor(options) {
    super(options);
  }

  _read(size) {
    const chunck = chance.string();
    this.push(chunck, 'utf-8');
    if (chance.bool({ likelihood: 5 })) {
      this.push(null);
    }
  }
}

const rds = new RandomStringStream();
rds.on('data', (c) => console.log(c.toString()));

// rds.on('readable', () => {
//   let chunk;
//   while((chunk = rds.read())!== null) {
//     console.log(chunk.toString());
//   }
// });