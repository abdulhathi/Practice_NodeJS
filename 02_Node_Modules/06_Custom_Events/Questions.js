const {collectAnswers} = require("./Questions_And_Answers");

const questions = ["What is you name ? ", "Whats is you gender ? "];

const emitter = collectAnswers(questions, (answers) => {
  // console.log(answers);
  process.exit();
});


emitter.on("answer", answer => {
  console.log(answer);
});
