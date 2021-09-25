import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapsearchPage } from './mapsearch';

@NgModule({
  declarations: [
    MapsearchPage,
  ],
  imports: [
    IonicPageModule.forChild(MapsearchPage),
  ],
})
export class MapsearchPageModule {}
