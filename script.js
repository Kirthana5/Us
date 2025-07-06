const hands = document.getElementById('hands');
const ring = document.getElementById('ring');
const message = document.getElementById('message');

hands.addEventListener('click', () => {
  ring.style.display = 'block';
  message.style.display = 'block';
});