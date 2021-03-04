const piano = document.querySelector('.piano');
const pianoКeys = document.querySelectorAll('.piano-key');
const audio = document.querySelector('audio');
const button = document.querySelector('button');
const notes = document.querySelector('.notes');
const letters = document.querySelector('.letters');


// прогрывание музыки
piano.addEventListener('click', (event) => {
    if(event.target.classList.contains('piano-key')) {
        const note = event.target.dataset.note;
        const src = `assets/audio/${note}.mp3`;
        playAudio(src);
      }     
  });


// подсветка активной клавиши | не работает на черных!?? 
  piano.addEventListener('click', (event) => {
    if(event.target.classList.contains('piano-key')) {
      pianoКeys.forEach((el) => {
        if(el.classList.contains('active')) {
          el.classList.remove('active');
          console.log(el)
        }
      });
      event.target.classList.add('active');
    }
});

function playAudio() {
  audio.currentTime = 0;
  audio.play();
}

// проигрывание музыки при  нажатии на клавиатуру
  window.addEventListener('keydown', (event) => {
    // switch(event.code){
       
    //     case 'KeyC':
    //     case 'KeyD':
    //     case 'KeyE':
    //     case 'KeyF':
    //     case 'KeyG':
    //     case 'KeyA':
    //     case 'KeyB':
            playAudio()  
    // }
    });

   
// игра через пробел
window.addEventListener('keydown', (event) => {
    if(event.code === 'Space') {
      playAudio();
    }
  });

//   button.addEventListener('click', playAudio)




