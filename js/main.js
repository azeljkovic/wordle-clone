import {isLetter} from "./isLetter.js";
import {checkIfWordExistInDictionary} from "./checkIfWordExistInDictionary.js";
import {launchToast} from "./launchToast.js";
import {checkWord} from "./checkWord.js";
import {getLetterBoxElement} from "./getLetterBoxElement.js";

let letterBoxElement = '';
let letterIndex = 0;
let wordEndIndex = 5;
let wordStartIndex = 0;
let currentWord = '';


document.addEventListener('keydown', printLetter);

function printLetter(e) {
  if (isLetter(e.key) && letterIndex < wordEndIndex) { // letter key handler
    letterBoxElement = getLetterBoxElement(letterIndex);
    letterBoxElement.textContent = e.key.toUpperCase();
    letterIndex++;
  } else if (e.key === 'Backspace') { // backspace handler
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
      for (let i = wordEndIndex - 5; i < letterIndex; i++) { // assemble current word
        letterBoxElement = getLetterBoxElement(i);
        currentWord += letterBoxElement.textContent;
        currentWord = currentWord.toLowerCase();
      }
      if (!checkIfWordExistInDictionary(currentWord)) {
        launchToast();
      } else {
        if(checkWord(currentWord, wordStartIndex)){
          letterIndex = 30; // disable further input by moving letter index to the end
        } else {
          wordStartIndex += 5;
          wordEndIndex += 5;
        }
      }
    }
  }
}
