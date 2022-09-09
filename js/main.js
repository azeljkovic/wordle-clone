let grid = document.querySelector('.container');
let letterBoxSelector = '';
let letterIndex = 0;


document.addEventListener('keydown', printLetter);


function printLetter(e) {
  if (isLetter(e.key)) {
    letterBoxSelector = `.letter-${letterIndex}`;
    let letterBoxElement = document.querySelector(letterBoxSelector);
    letterBoxElement.textContent = e.key.toUpperCase();
    letterIndex++;
  }
}


function isLetter(letter) {
  return /^[a-zA-Z]$/.test(letter);
}
