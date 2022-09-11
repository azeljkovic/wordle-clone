import {getLetterBoxElement} from "./getLetterBoxElement";

const GREEN = '#538d4e';
const YELLOW = '#b59f3b';
const GRAY = '#adadad';
const FINAL_WORD = 'blobs';

export function checkWord(word, startIndex) {
  let elementSelector = '';
  if (word === FINAL_WORD) {
    for (let i = 0; i < 5; i++) {
      elementSelector = getLetterBoxElement(startIndex + i);
      elementSelector.style = `background-color: ${GREEN}`;
    }
    setTimeout(() => {
      window.alert("You got the right word, congrats!");
    }, 1)
    return true;
  } else {
    let wordLetters = word.split('');
    let finalWordLetters = FINAL_WORD.split('');
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
