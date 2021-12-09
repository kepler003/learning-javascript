
function runOnKeys(fn, ...codes) {
  const pressedKeys = new Set();

  document.onkeydown = (e) => {
    const code = e.code;
    pressedKeys.add(code);
    runCallback();
  };

  document.onkeyup = (e) => {
    const code = e.code;
    pressedKeys.delete(code);
  }

  function runCallback() {
    for (const code of codes) {
      if (!pressedKeys.has(code)) return;
    }
    pressedKeys.clear();
    fn();
  }
}

runOnKeys(() => alert('Hello world'), 'KeyQ', 'KeyW');