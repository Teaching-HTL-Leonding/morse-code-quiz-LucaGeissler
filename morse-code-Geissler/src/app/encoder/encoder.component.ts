import { Component, OnInit } from '@angular/core';
import { EncoderService } from './encoder.service';

@Component({
  selector: 'app-encoder',
  templateUrl: './encoder.component.html',
  styleUrls: ['./encoder.component.css'],
})
export class EncoderComponent {
  constructor(public encoder: EncoderService) {}

  public inputText: string = '';

  public outputText: string = '';

  public inputWasValid: string = '';

  public disabled: boolean = true;

  public decode(): void {
    this.outputText = this.encoder.encode(this.inputText);
    this.inputText = '';

    if (this.outputText == 'Only uppercase letters are supported') {
      this.inputWasValid = 'invalid';
    } else {
      this.inputWasValid = 'valid';
    }
  }

  public inputchanged(): void {
    if (this.inputText.match(/^[A-Z ]+$/)) {
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
