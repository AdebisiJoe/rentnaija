import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
/**
 * Generated class for the EditLoginDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-login-detail',
  templateUrl: 'edit-login-detail.html',
})
export class EditLoginDetailPage {

  private password:string;
  private confirmpassword:string;
  private userid:number;
  private token:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl:ToastController,public authenticationProvider:AuthenticationProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditLoginDetailPage');
  }

  editLoginDetail(){
    if(this.password =='' || this.password ==null ||this.confirmpassword =='' || this.confirmpassword==null){
      this.presentToast("All Fields Required");
  }
  if(this.password!=this.confirmpassword){
    this.presentToast("Password and confirm Password must be the same");
  }
  else{
    this.authenticationProvider.getToken().then(result=>{
      this.token=result;
   this.authenticationProvider.editLoginDetail(this.password,this.userid,this.token);
   this.presentToast("Password Edit successful");
});
}
  }
  presentToast(message:string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}
