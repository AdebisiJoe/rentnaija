import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotelSearchResultPage } from './hotel-search-result';

@NgModule({
  declarations: [
    HotelSearchResultPage,
  ],
  imports: [
    IonicPageModule.forChild(HotelSearchResultPage),
  ],
})
export class HotelSearchResultPageModule {}
