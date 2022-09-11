import {checkWord} from "./checkWord";
import {getLetterBoxElement} from "./getLetterBoxElement";

let grid = document.querySelector('.container');
let letterBoxElement = '';
let letterIndex = 0;
let wordEndIndex = 5;
let wordStartIndex = 0;
let currentWord = '';

const DICTIONARY = ['green', 'trial', 'serve', 'truly', 'lobby'];


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
      console.log(checkIfWordExistInDictionary(currentWord));
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


function isLetter(letter) {
  return /^[a-zA-Z]$/.test(letter);
}


function checkIfWordExistInDictionary(word) {
  for (let i = 0; i < DICTIONARY.length; i++) {
    if (word === DICTIONARY[i]) {
      return true;
    }
  }
  return false;
}


function launchToast() {
  let toast = document.querySelector('#toast');
  toast.className = "show";
  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    toast.className = toast.className.replace("show", "");
  }, 3000);
}
