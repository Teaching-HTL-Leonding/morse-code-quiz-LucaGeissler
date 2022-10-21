import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecoderComponent } from './decoder/decoder.component';
import { EncoderComponent } from './encoder/encoder.component';

const routes: Routes = [
  { path: '', redirectTo: '/decoder', pathMatch: 'full' },
  { path:'decoder', component: DecoderComponent },
  { path:'encoder', component: EncoderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
