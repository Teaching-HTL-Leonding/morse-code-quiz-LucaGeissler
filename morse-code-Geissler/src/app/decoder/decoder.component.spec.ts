import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DecoderService } from './decoder.service';
import { DecoderComponent } from './decoder.component';
import { Inject } from '@angular/core';
import { morseCode } from '../Alphabet';

describe('encoder Tests', () => {
  let encoder = new DecoderService(morseCode);

  it('should encode ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."  to HELLO WORLD', () => {
    expect(encoder.decode('.... . .-.. .-.. --- / .-- --- .-. .-.. -..')).toBe(
      'HELLO WORLD'
    );
  });
  it('should ignore emty spaces', () => {
    expect(
      encoder.decode('....    . .-.. .-.. --- /  .-- --- .-. .-.. -..')
    ).toBe('HELLO WORLD');
  });
});
