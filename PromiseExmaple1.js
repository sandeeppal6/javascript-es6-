// craete promise
const promise = new Promise((resolve, reject) => {
  if (Math.random() < 0.5) {
    resolve("resolve case");
  } else {
    reject("reject case");
  }
});

// handle promise
promise
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  });
