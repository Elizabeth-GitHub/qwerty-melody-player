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

/*const twinkleNotes = document.getElementById('twinkle-notes');
twinkleNotes.style.display = 'none';
document.getElementById('twinkle').addEventListener('click', function(e) {
  console.log('Launching link')
  e.preventDefault();
  if (twinkleNotes.style.display === 'none') {
    console.log('True');
    twinkleNotes.style.display = 'block';
  } else {
    console.log('False');
    twinkleNotes.style.display = 'none';
  }*/
  function toggleMelodyNotes(melodyId) {
    const melodyNotes = document.getElementById(`${melodyId}-notes`);
    console.log(melodyNotes);
    if (melodyNotes.style.display === 'none') {
      melodyNotes.style.display = 'block';
    } else {
      melodyNotes.style.display = 'none';
    }
  }
  
  document.getElementById('twinkle').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMelodyNotes('twinkle');
  });
  
  document.getElementById('row').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMelodyNotes('row');
  });

});

//});
