import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditLoginDetailPage } from './edit-login-detail';

@NgModule({
  declarations: [
    EditLoginDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(EditLoginDetailPage),
  ],
})
export class EditLoginDetailPageModule {}
