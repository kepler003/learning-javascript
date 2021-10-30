
function promisify(f) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      function callback(err, result) {
        if (err) reject(err);
        else resolve(result);
      }

      args.push(callback);

      f.call(this, ...args);
    });
  }
}

function loadScript(src, cb) {
  setTimeout(() => {
    console.log(src);
    cb(null, 'Source URL: ' + src);
  }, 1000);
}

// loadScript('someUrl/next/params', (err, result) => console.log(result));

const loadScriptPromisified = promisify(loadScript);
loadScriptPromisified('someUrl/next/params').then(result => console.log('Result: ' + result));