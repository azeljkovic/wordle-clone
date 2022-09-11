import {isLetter} from "./isLetter.js";
import {checkIfWordExistInDictionary} from "./checkIfWordExistInDictionary.js";
import {launchToast} from "./launchToast.js";
import {checkWord} from "./checkWord.js";
import {getLetterBoxElement} from "./getLetterBoxElement.js";

let letterBoxElement = '';
let letterIndex = 0;
let wordEndIndex = 5;
let wordStartIndex = 0;
let currentWord;


document.addEventListener('keydown', printLetter);

function printLetter(e) {
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
      if (!checkIfWordExistInDictionary(currentWord)) {
        launchToast();
      } else {
        if (checkWord(currentWord, wordStartIndex)) {
          // disable further input by moving letter index to the end
          letterIndex = 30;
        } else {
          wordStartIndex += 5;
          wordEndIndex += 5;
        }
      }
    }
  }
}
