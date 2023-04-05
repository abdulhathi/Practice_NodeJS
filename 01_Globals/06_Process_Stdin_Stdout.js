// process.stdout.write("What is your name ?");

const questions = [
  "What is your name ?",
  "What is your designation ?",
  "What is your favorite programming language ?"
];
const answers = []

function askQuestions(i) {
  process.stdout.write(`${questions[i]}`);
}

process.stdin.on("data", function(data) {
  process.stdout.write(data.toString().trim());
});

askQuestions(answers.length);

