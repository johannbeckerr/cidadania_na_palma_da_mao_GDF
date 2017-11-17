import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MobilidadePage } from './mobilidade';

@NgModule({
  declarations: [
    MobilidadePage,
  ],
  imports: [
    IonicPageModule.forChild(MobilidadePage),
  ],
})
export class MobilidadePageModule {}
