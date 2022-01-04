process.stdin
  .on('readable', () => {
    let chunk;
    console.log('new data available');
    while((chunk = process.stdin.read() !== null )) {
      console.log(`read: ${chunk} ${chunk.toString()}`)
    }
  })
  .on('end', () => process.stdout.write('end stream'));