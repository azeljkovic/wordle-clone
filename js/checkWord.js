import {getLetterBoxElement} from "./getLetterBoxElement";
import {launchToast} from "./launchToast";

const GREEN = '#538d4e';
const YELLOW = '#b59f3b';
const GRAY = '#adadad';

export function checkWord(currentWord, finalWord, startIndex) {
  let elementSelector = '';
  if (currentWord === finalWord) {
    for (let i = 0; i < 5; i++) {
      elementSelector = getLetterBoxElement(startIndex + i);
      elementSelector.style = `background-color: ${GREEN}`;
    }
    launchToast('🎉 Congrats! 🎉');
    return true;
  } else {
    let wordLetters = currentWord.split('');
    let finalWordLetters = finalWord.split('');
    for (let i = 0; i < 5; i++) {
      let index;
      index = finalWordLetters.indexOf(wordLetters[i])
      if (index === i) {
        elementSelector = getLetterBoxElement(startIndex + i);
        elementSelector.style = `background-color: ${GREEN}`;

      } else if (index >= 0) {
        elementSelector = getLetterBoxElement(startIndex + i);
        elementSelector.style = `background-color: ${YELLOW}`;
      } else {
        elementSelector = getLetterBoxElement(startIndex + i);
        elementSelector.style = `background-color: ${GRAY}`;
      }
       // clear the word from the array to avoid double recognition in case
       // that set word has two same letters
      finalWordLetters[index] = '';
    }
  }
  return false;
}
