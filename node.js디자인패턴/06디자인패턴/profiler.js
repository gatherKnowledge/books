class Profiler {
  constructor(label) {
    this.label = label;
    this.lastTime = null;
  }
  
  start() {
    this.lastTime = process.hrtime();
  }
  end() {
    const diff = process.hrtime(this.lastTime);
    console.log(`
      Timer "${this.label}" took ${diff[0]} seconds and ${diff[1]} nanoseconds.
    `)
  }
}

const profileHandler = (label) => {
  if (process.env.NODE_ENV === 'development') {
    return new Profiler(label);
  } else if (process.env.NODE_ENV === 'production') {
    return {
      start: () => {},
      end: () => {}
    }
  }
}

const ph = profileHandler('label');
ph.start();
setTimeout(() => ph.end(), 4000)
