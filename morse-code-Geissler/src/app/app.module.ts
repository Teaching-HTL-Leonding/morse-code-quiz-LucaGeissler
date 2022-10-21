import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DecoderComponent } from './decoder/decoder.component';
import { EncoderComponent } from './encoder/encoder.component';
import {morseCode} from './Alphabet';

@NgModule({
  declarations: [
    AppComponent,
    DecoderComponent,
    EncoderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {provide: 'MORSEALPHABET', useValue: morseCode}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
