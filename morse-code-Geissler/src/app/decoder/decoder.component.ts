import { Component, OnInit } from '@angular/core';
import { DecoderService } from './decoder.service';

const regexValidate = /^[.\-/ ]+$/;

@Component({
  selector: 'app-decoder',
  templateUrl: './decoder.component.html',
  styleUrls: ['./decoder.component.css'],
})
export class DecoderComponent {
  constructor(public decoder: DecoderService) {}

  public inputMorse: string = '';

  public outputText: string = '';

  public inputWasValid: string = '';

  public disabled: boolean = true;

  public decode(): void {
    this.outputText = this.decoder.decode(this.inputMorse);
    this.inputMorse = '';

    if (this.outputText == 'Only uppercase letters are supported') {
      this.inputWasValid = 'invalid';
    } else {
      this.inputWasValid = 'valid';
    }
  }

  public inputchanged(): void {
    if (regexValidate.test(this.inputMorse)) {
      this.disabled = false;
    } else {
      this.disabled = true;
    }
  }

  public get inputWasValidClass(): string {
    return this.inputWasValid;
  }

  public get disabledClass(): boolean {
    return this.disabled;
  }
}
