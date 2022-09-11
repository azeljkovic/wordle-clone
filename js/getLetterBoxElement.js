export function getLetterBoxElement(index) {
  let letterBoxSelector = `.letter-${index}`;
  return document.querySelector(letterBoxSelector);
}
