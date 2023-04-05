console.log(process);

console.log(process.argv)

// console.log(process.argv[process.argv.indexOf("--user")+1]);

function getArgs(flag) {
  const flagValueInd = process.argv.indexOf(flag) + 1
  return process.argv[flagValueInd]
}

console.log(getArgs("--user"));