const questions = [
  "What is your name ? ",
  "What is your designation ? ",
  "What is your favorite programming language ? "
];
const answers = []

process.stdout.write(questions[0]);

process.stdin.on("data", function(data) {
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    process.stdout.write(questions[answers.length]);
  }
  else {
    process.exit();
  }
})

process.on("exit", function() {
  process.stdout.write("You have successfully completed all questions. below are the answers");
  for (const ans of answers) {
    process.stdout.write(`\n ${ans}`);
  }
})