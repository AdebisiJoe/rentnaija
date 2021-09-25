import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RentmeterPage } from './rentmeter';

@NgModule({
  declarations: [
    RentmeterPage,
  ],
  imports: [
    IonicPageModule.forChild(RentmeterPage),
  ],
})
export class RentmeterPageModule {}
