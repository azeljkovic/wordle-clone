const DICTIONARY = ['green', 'trial', 'serve', 'truly', 'lobby', 'black'];

export function checkIfWordExistInDictionary(word) {
  for (let i = 0; i < DICTIONARY.length; i++) {
    if (word === DICTIONARY[i]) {
      return true;
    }
  }
  return false;
}
