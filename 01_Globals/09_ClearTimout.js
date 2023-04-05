const fiveSecTimeout = setTimeout(() => {
  console.log(`Message after ${5000/1000} second.`)
}, 5000);

const twoSecTimeout = setTimeout(() => {
  console.log(`Message after ${2000/1000} second.`)
  // clearTimeout(fiveSecTimeout);
}, 2000);