import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SaneamentoPage } from './saneamento';

@NgModule({
  declarations: [
    SaneamentoPage,
  ],
  imports: [
    IonicPageModule.forChild(SaneamentoPage),
  ],
})
export class SaneamentoPageModule {}
