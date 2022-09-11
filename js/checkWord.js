import {getLetterBoxElement} from "./getLetterBoxElement";

const GREEN = '#538d4e';
const YELLOW = '#b59f3b';
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
    console.log(wordLetters);
    console.log(finalWordLetters);
    for (let i = 0; i < 5; i++) {
      let index;
      index = finalWordLetters.indexOf(wordLetters[i])
      console.log(index);
      if (index === i) {
        elementSelector = getLetterBoxElement(startIndex + i);
        elementSelector.style = `background-color: ${GREEN}`;

      } else if (index >= 0) {
        console.log('letter mismatch');
        elementSelector = getLetterBoxElement(startIndex + i);
        elementSelector.style = `background-color: ${YELLOW}`;
      }
       // clear the word from the array to avoid double recognition in case
       // that set word has two same letters
      finalWordLetters[index] = '';
    }
  }
  return false;
}
