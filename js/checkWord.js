import {getLetterBoxElement} from "./getLetterBoxElement";
import {launchToast} from "./launchToast";

const GREEN = '#538d4e';
const YELLOW = '#b59f3b';
const GRAY = '#444';

export function checkWord(currentWord, finalWord, startIndex) {
  let elementSelector = '';
  // the right word was found
  if (currentWord === finalWord) {
    for (let i = 0; i < 5; i++) {
      elementSelector = getLetterBoxElement(startIndex + i);
      elementSelector.style = `background-color: ${GREEN}`;
    }
    launchToast('🎉 Congrats! 🎉');
    return true;
    // check if the letter exists and if it's in the right place
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
