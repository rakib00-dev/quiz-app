const correctOption = document.getElementById('c');
const btn = document.getElementById('submitBtn');
const feedback = document.getElementById('feedback');

btn.onclick = quiz;

function quiz() {
  if ((correctOption.innerText = 'c) 14')) {
    console.log('ok');
    feedback.innerHTML = 'ok';
  } else {
    console.log('not ok');
    feedback.innerHTML = 'not ok';
  }
}
