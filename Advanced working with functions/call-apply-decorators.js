
let worker = {
  slow(...args) {
    console.log(`Called with ${args.length != 1 ? `${args.length} arguments` : '1 argument'}`);
    return args.reduce((sum, item) => sum + item, 0);
  }
}

function cachingDecorator(func, hash) {
  let cache = new Map();

  return function(...args) {
    const key = hash(args);

    if (cache.has(key)) return cache.get(key);

    const result = func.call(this, ...args);
    cache.set(key, result);
    return result;
  }
}

function hash(args) {
  return args.join(',');
}

worker.slow = cachingDecorator(worker.slow, hash);

worker.slow(3, 5, 1);