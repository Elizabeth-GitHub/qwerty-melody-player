document.addEventListener('DOMContentLoaded', function() {
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

function playSound(e) {
    const audio = document.querySelector(`audio[data-key='${e.code}']`);
    const key = document.querySelector(`div[data-key='${e.code}']`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}


const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

const twinkleNotes = document.getElementById('twinkle-notes');
twinkleNotes.style.display = 'none';
console.log(`twinkle-notes display: ${twinkleNotes.style.display}`);
document.getElementById('twinkle').addEventListener('click', function(e) {
  console.log('Launching link')
  e.preventDefault();
  if (twinkleNotes.style.display === 'none') {
    console.log('True');
    twinkleNotes.style.display = 'block';
  } else {
    console.log('False');
    twinkleNotes.style.display = 'none';
  }
});
});
