import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EncoderService } from './encoder.service';
import { EncoderComponent } from './encoder.component';
import { Inject } from '@angular/core';
import { morseCode } from '../Alphabet';

describe('Decoder Tests', () => {
  let decoder = new EncoderService(morseCode);

  it('should decode HELLO WORLD in uppercase', () => {
    expect(decoder.encode('HELLO WORLD')).toBe(
      '.... . .-.. .-.. --- / .-- --- .-. .-.. -.. '
    );
  });

  it('should return an error when decoding lowercase', () => {
    expect(decoder.encode('hello world')).toBe(
      'Only uppercase letters are supported'
    );
  });
});
