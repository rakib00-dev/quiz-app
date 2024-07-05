const correctOption = document.getElementById('c');
const btn = document.getElementById('submitBtn');
const feedback = document.getElementById('feedback');

btn.onclick = quiz;

function quiz() {
  if (correctOption.checked == true && correctOption.value == 'c') {
    console.log('ok');

    feedback.style.color = 'white';
    feedback.style.background = 'green';
    feedback.style.display = 'block';
    feedback.style.fontWeight = 'bolder';
    feedback.innerHTML = 'Congrats! You Make A Correct Answer';
    btn.onclick = () => {
      return;
    };
  } else {
    console.log('not ok');
    feedback.innerHTML = 'Incorrect. the correct answer is c) 14';
    feedback.style.display = 'block';
    feedback.style.color = 'red';
    feedback.style.fontWeight = 'bolder';
    feedback.style.background = 'wheat';
    btn.onclick = () => {
      return;
    };
  }
}
