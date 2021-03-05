const piano = document.querySelector('.piano');
const pianoКeys = document.querySelectorAll('.piano-key');
const audio = document.querySelector('audio');
const button = document.querySelector('button');
const notes = document.querySelector('.notes');
const letters = document.querySelector('.letters');
const fullScreen = document.querySelector('.fullScreen');
let toggle = false;



function playAudio(event) {
  const audio = document.querySelector(`audio[data-note="${event.type === 'mousedown' || event.type === 'mouseover' ? event.target.dataset.note : event.keyCode}"]`);
  if (audio) {
    audio.play(event);
  }
}

// проигрывание музыки при  нажатии на клавиатуру и добавлении класса активности
  window.addEventListener('keydown', (event) => {
    const pressedButton = document.querySelector(`.piano-key[data-note="${event.keyCode}"]`);
    if (pressedButton) {
      pressedButton.classList.add('active')
      playAudio(event)
    }
  });

  window.addEventListener('keyup', (event) => {
    const pressedButton = document.querySelector(`.piano-key[data-note="${event.keyCode}"]`);
    if (pressedButton) {
      pressedButton.classList.remove('active')
    }
  });



// проигрывание музыки при нажатии на мышь и добавлении класса активности

window.addEventListener('mousedown', (event) => {
  toggle = true
  const pressedButton = document.querySelector(`.piano-key[data-note="${event.target.dataset.note}"]`);

  if (pressedButton) {
    pressedButton.classList.add('active')
    audio.currentTime = 0
    playAudio(event)
  }
});

window.addEventListener('mouseup', (event) => {
  toggle = false
  const pressedButton = document.querySelector(`.piano-key[data-note="${event.target.dataset.note}"]`);
  if (pressedButton) {
    pressedButton.classList.remove('active')
  }
});


// проигрывание музыки при зажатой мышке и добавлении класса активности

window.addEventListener('mouseover', (event) => {
  const pressedButton = document.querySelector(`.piano-key[data-note="${event.target.dataset.note}"]`);
  if (pressedButton && toggle) {
    pressedButton.classList.add('active')
    audio.currentTime = 0
    playAudio(event)
  }
});

window.addEventListener('mouseout', (event) => {
  const pressedButton = document.querySelector(`.piano-key[data-note="${event.target.dataset.note}"]`);
  if (pressedButton) {
    pressedButton.classList.remove('active')
  }
});

//отключение контекст-меню
window.addEventListener('contextmenu', e => e.preventDefault())

// full-screen
fullScreen.addEventListener("click",function(){
  if(!window.screenTop && !window.screenY){
    document.documentElement.requestFullscreen();
    fullScreen.classList.add('exit')
  } else{
    fullScreen.classList.remove('exit')
    document.exitFullscreen();
  }
});


// переключатель нот/ букв




