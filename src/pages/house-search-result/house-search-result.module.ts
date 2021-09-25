import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HouseSearchResultPage } from './house-search-result';

@NgModule({
  declarations: [
    HouseSearchResultPage,
  ],
  imports: [
    IonicPageModule.forChild(HouseSearchResultPage),
  ],
})
export class HouseSearchResultPageModule {}
