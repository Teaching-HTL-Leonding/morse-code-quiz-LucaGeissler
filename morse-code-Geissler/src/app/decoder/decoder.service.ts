import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DecoderService {
  constructor(@Inject('MORSEALPHABET') private morseLetters: String[]) {}

  public decode(inputMorse: string): string {
    inputMorse = inputMorse.replace(/\s+/g, ' ');
    inputMorse = inputMorse.trim();

    let everyLetter = inputMorse.split(' ');

    let encodedText: string = '';

    for (let i = 0; i < everyLetter.length; i++) {
      if (everyLetter[i] === '/') {
        encodedText += ' ';
      } else {
        let morseLetter = everyLetter[i];
        let letter = this.morseLetters.indexOf(everyLetter[i]);
        encodedText += String.fromCharCode(letter + 65);
      }
    }

    return encodedText;
  }
}
