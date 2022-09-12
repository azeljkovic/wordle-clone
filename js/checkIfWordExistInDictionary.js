import {launchToast} from "./launchToast";
const CHECK_DICTIONARY_URL = 'https://words.dev-apis.com/validate-word';

export async function checkIfWordExistInDictionary(word) {
  const data = {word: word};


  try {
    let response = await fetch(CHECK_DICTIONARY_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });

    const body = await response.json();
    return body.validWord;

  } catch (e) {
    launchToast('Error occurred...');
    throw new Error(`Error occurred while checking the dictionary...`);
  }
}
