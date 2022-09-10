let grid = document.querySelector('.container');
let letterBoxElement = '';
let letterBoxSelector = '';
let letterIndex = 0;
let wordEndIndex = 5;
let wordStartIndex = 0;
let currentWord = '';

const DICTIONARY = 'green';
const FINAL_WORD = 'lobby';


document.addEventListener('keydown', printLetter);

function printLetter(e) {
  if (isLetter(e.key) && letterIndex < wordEndIndex) { // letter key handler
    letterBoxElement = getLetterBoxElement(letterIndex);
    letterBoxElement.textContent = e.key.toUpperCase();
    console.log(letterIndex);
    letterIndex++;
  } else if (e.key === 'Backspace') { // backspace handler
    console.log(letterIndex);
    if (letterIndex !== wordStartIndex) {
      if (letterIndex !== 0) {
        letterIndex--;
      }
      letterBoxElement = getLetterBoxElement(letterIndex);
      letterBoxElement.textContent = '';
    }
  } else if (e.key === 'Enter') { // enter handler
    currentWord = '';
    if (letterIndex === wordEndIndex) {
      for (let i = wordEndIndex - 5; i < letterIndex; i++) {
        letterBoxSelector = `.letter-${i}`;
        letterBoxElement = document.querySelector(letterBoxSelector);
        currentWord += letterBoxElement.textContent;
        currentWord = currentWord.toLowerCase();
      }
      wordStartIndex += 5;
      wordEndIndex += 5;
    }
  }

}


function isLetter(letter) {
  return /^[a-zA-Z]$/.test(letter);
}

function getLetterBoxElement(index) {
  letterBoxSelector = `.letter-${index}`;
  return document.querySelector(letterBoxSelector);
}
