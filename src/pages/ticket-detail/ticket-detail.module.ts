import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TicketDetailPage } from './ticket-detail';

@NgModule({
  declarations: [
    TicketDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TicketDetailPage),
  ],
})
export class TicketDetailPageModule {}
