import {launchToast} from "./launchToast";

const GET_FINAL_WORD_URL = 'https://words.dev-apis.com/word-of-the-day';

export async function getFinalWord() {
  try {
    let response = await fetch(GET_FINAL_WORD_URL, {
      method: 'GET'
    });

    const {word} = await response.json();
    return word;

  } catch (e) {
    launchToast('Error occurred...');
    console.error(`Error occurred while fetching the final word...`);
    return false;
  }
}
