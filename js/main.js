let grid = document.querySelector('.container');
let letterBoxElement = '';
let letterBoxSelector = '';
let letterIndex = 0;
let currentWord = '';

const DICTIONARY = 'green';
const FINAL_WORD = 'lobby';


document.addEventListener('keydown', printLetter);
function printLetter(e) {
  letterBoxSelector = `.letter-${letterIndex}`;
  letterBoxElement = document.querySelector(letterBoxSelector);

  if (isLetter(e.key)) { // letter key handler
    letterBoxElement.textContent = e.key.toUpperCase();
    letterIndex++;
  } else if (e.key === 'Backspace' && letterIndex >= 0) { // backspace handler
    letterBoxElement.textContent = '';
    if (letterIndex !== 0) {
      letterIndex--;
    }
  }
}


function isLetter(letter) {
  return /^[a-zA-Z]$/.test(letter);
}
