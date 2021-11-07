
// import('./sub.js')
//   .then(obj => {
//     obj.hi();
//     obj.hello();
//   }).catch(err => console.log(err));


const { hi, hello } = await import('./sub.js');
hi();
hello();