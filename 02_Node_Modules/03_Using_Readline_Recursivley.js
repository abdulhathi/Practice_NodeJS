const readline = require("readline");

const rl = readline.createInterface(
  input= process.stdin,
  output=process.stdout
);

const questions = ["What is your name ? ", "What is your age ? ", "What is you DOB ? "];

const collectAnswers = (questions, done) => {
  const answers = [];

  const questionsAnswered = (answer) => {
    answers.push(answer);
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionsAnswered);
    }
    else {
      return done(answers);
    }
  };

  rl.question(questions[0], questionsAnswered);
};

collectAnswers(questions, (answers) => {
  console.log("Thanks for your answers.");
  console.log(answers);
  process.exit();
})