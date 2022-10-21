import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EncoderService {
  constructor(@Inject('MORSEALPHABET') private morseLetters: String[]) {}

  public encode(inputText: string): string {
    let decodedText: string = '';

    if (inputText.toUpperCase() !== inputText) {
      return 'Only uppercase letters are supported';
    }

    //transforms more than one space into one space
    inputText = inputText.replace(/\s+/g, ' ');

    //removes spaces at the beginning and end of the string
    inputText = inputText.trim();

    //translate the input text to morse code
    for (let i = 0; i < inputText.length; i++) {
      let letter = inputText.charAt(i);

      if (letter === ' ') {
        decodedText += '/';
      } else {
        decodedText += this.morseLetters[letter.charCodeAt(0) - 65];
      }
      decodedText += ' ';
    }

    return decodedText;
  }
}
