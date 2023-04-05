const intervalFunc = setInterval(() => {
  console.log(`Message after every seconds.`);
}, 1000)

setTimeout(() => {
  console.log(`I stopped the interval messaage. after 5 second`)
  clearInterval(intervalFunc);
}, 5000);