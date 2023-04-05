const readline = require("readline");
const { EventEmitter } = require("events");

const emitter = new EventEmitter();

const rl = readline.createInterface(
  input = process.stdin,
  output = process.stdout
);

const collectAnswers = (questions, done) => {
  const answers = [];

  const questionAnswered = (answer) => {
    emitter.emit("answer", answer);
    answers.push(answer);
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionAnswered);
    }
    else {
      return done(answers);
    }
  }

  rl.question(questions[0], questionAnswered);
  return emitter;
}

module.exports = { collectAnswers };