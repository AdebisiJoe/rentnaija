import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpenTicketsPage } from './open-tickets';

@NgModule({
  declarations: [
    OpenTicketsPage,
  ],
  imports: [
    IonicPageModule.forChild(OpenTicketsPage),
  ],
})
export class OpenTicketsPageModule {}
