import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubPropertyDetailPage } from './sub-property-detail';

@NgModule({
  declarations: [
    SubPropertyDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SubPropertyDetailPage),
  ],
})
export class SubPropertyDetailPageModule {}
