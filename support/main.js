const questions = [
  {
    question: 'What is the capital of France?',
    answers: ['London', 'Paris', 'Berlin', 'Rome'],
    correctAnswer: 1,
  },
  {
    question: 'What is the tallest mountain in the world?',
    answers: ['Mount Everest', 'K2', 'Kangchenjunga', 'Lhotse'],
    correctAnswer: 0,
  },
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answerChoicesElement = document.getElementById('answer-choices');
const submitButton = document.getElementById('submit-button');
const feedbackElement = document.getElementById('feedback');

function displayQuestion() {
  const question = questions[currentQuestion];
  questionElement.textContent = question.question;
  answerChoicesElement.innerHTML = ''; // Clear previous answers

  question.answers.forEach((answer, index) => {
    const radioInput = document.createElement('input');
    radioInput.type = 'radio';
    radioInput.name = 'answer';
    radioInput.value = index;
    radioInput.id = `answer-${index}`;

    const label = document.createElement('label');
    label.textContent = answer;
    label.htmlFor = `answer-${index}`;

    const listItem = document.createElement('li');
    listItem.appendChild(radioInput);
    listItem.appendChild(label);

    answerChoicesElement.appendChild(listItem);
  });
}

submitButton.addEventListener('click', function () {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');

  if (selectedAnswer) {
    const userAnswer = parseInt(selectedAnswer.value);
    const correctAnswer = questions[currentQuestion].correctAnswer;

    if (userAnswer === correctAnswer) {
      score++;
      feedbackElement.textContent = 'Correct!';
    } else {
      feedbackElement.textContent =
        'Incorrect. The correct answer is ' +
        questions[currentQuestion].answers[correctAnswer];
    }

    currentQuestion++;

    if (currentQuestion === questions.length) {
      // All questions answered, show final score
      questionElement.textContent =
        'You answered ' +
        score +
        ' out of ' +
        questions.length +
        ' questions correctly!';
      submitButton.style.display = 'none';
    } else {
      displayQuestion();
    }
  } else {
    feedbackElement.textContent = 'Please select an answer';
  }
});

displayQuestion();
