import { characters } from './data.js';

const template = document.getElementById('template');
const list = document.getElementById('list');
const audio = document.getElementById('audio');

console.log(template,audio,list);

for (let character of characters) {
    const copy = template.content.cloneNode(true);
    const header =  copy.querySelector('h2');
    const image = copy.querySelector('img');
    const button = copy.querySelector('button');
    header.textContent = character.name;
    image.src = character.image;

    button.addEventListener('click', () => {
        audio.src = character.audio;
        audio.play();
    });

    list.appendChild(copy);
}


// const jaguarSound = document.getElementById('Jaguar-sound');
// jaguarSound.addEventListener('click', () => {
//   audio.src = 'assets/sounds/Jaguar.wav';
//   audio.play();
// });

// const dogSound = document.getElementById('dog-sound');
// dogSound.addEventListener('click', () => {
//     audio.src = 'assets/sounds/dog.way';
//     audio.play();
// });

// const wolfSound = document.getElementById('wolf-sound');
// wolfSound.addEventListener('click', () => {
//     audio.src = 'assets/sounds/wolf.way';
//     audio.play();
// });
