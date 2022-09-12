import {isLetter} from "./isLetter.js";
import {checkIfWordExistsInDictionary} from "./checkIfWordExistsInDictionary.js";
import {launchToast} from "./launchToast.js";
import {checkWord} from "./checkWord.js";
import {getLetterBoxElement} from "./getLetterBoxElement.js";
import {getFinalWord} from "./getFinalWord";

let letterBoxElement = '';
let letterIndex = 0;
let wordEndIndex = 5;
let wordStartIndex = 0;
let currentWord = '';
let finalWord = '';

const MAXIMUM_LETTER_BOX_INDEX = 30;
const LIGHT_GRAY = '#c4c4c4';

(async () => {
  finalWord = await getFinalWord();
  if (!finalWord) {
    // disable further input by moving letter index to the end
    letterIndex = MAXIMUM_LETTER_BOX_INDEX;
    // grey out text boxes
    for (let i = 0; i < MAXIMUM_LETTER_BOX_INDEX; i++) {
      letterBoxElement = getLetterBoxElement(i);
      letterBoxElement.style = `background-color: ${LIGHT_GRAY}`;
    }
  }
})();

document.addEventListener('keydown', printLetter);

async function printLetter(e) {
  // letter key handler
  if (isLetter(e.key) && letterIndex < wordEndIndex) {
    letterBoxElement = getLetterBoxElement(letterIndex);
    letterBoxElement.textContent = e.key.toUpperCase();
    letterIndex++;
    // backspace handler
  } else if (e.key === 'Backspace') {
    if (letterIndex !== wordStartIndex) {
      if (letterIndex !== 0) {
        letterIndex--;
      }
      letterBoxElement = getLetterBoxElement(letterIndex);
      letterBoxElement.textContent = '';
    }
    // enter handler
  } else if (e.key === 'Enter') {
    currentWord = '';
    if (letterIndex === wordEndIndex) {
      // assemble current word
      for (let i = wordEndIndex - 5; i < letterIndex; i++) {
        letterBoxElement = getLetterBoxElement(i);
        currentWord += letterBoxElement.textContent;
        currentWord = currentWord.toLowerCase();
      }
      if (!await checkIfWordExistsInDictionary(currentWord)) {
        launchToast('Not in the word list!');
      } else {
        if (checkWord(currentWord, finalWord, wordStartIndex)) {
          // disable further input by moving letter index to the end
          letterIndex = MAXIMUM_LETTER_BOX_INDEX;
        } else {
          wordStartIndex += 5;
          wordEndIndex += 5;
        }
      }
    }
  }
}
