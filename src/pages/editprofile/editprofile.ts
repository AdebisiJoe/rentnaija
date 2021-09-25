import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
/**
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
})
export class EditprofilePage {

  private firstname:string;
  private lastname:string;
  private phonenumber:string;
  private userid:number;
  private token:string;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,public authenticationProvider:AuthenticationProvider,public toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
   this.firstname= this.navParams.get('firstname');
   this.lastname=  this.navParams.get('lastname');
   this.phonenumber=this.navParams.get('phonenumber');
   this.userid=this.navParams.get('userid');
    console.log('ionViewDidLoad EditprofilePage');
  }

  editProfile(){
    if(this.firstname =='' || this.firstname ==null ||this.lastname =='' || this.lastname==null||this.phonenumber==''||this.phonenumber==null){
        this.presentToast("All Fields Required");
    }else{
      this.authenticationProvider.getToken().then(result=>{
        this.token=result;
     this.authenticationProvider.editUserDetails(this.firstname,this.lastname,this.phonenumber,this.userid,this.token);
     this.presentToast("user detail edit successful");
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
