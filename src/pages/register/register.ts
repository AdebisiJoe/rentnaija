import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  firstname:string;
  lastname:string;
  email:string;
  phonenumber:string;
  profileimage:string;
  password:string;



  constructor(public navCtrl: NavController, public navParams: NavParams,public authenticationProvider:AuthenticationProvider,private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(){
    if(this.firstname =='' || this.firstname ==null ||this.lastname =='' || this.lastname==null||this.phonenumber==''||this.phonenumber==null||this.email==''||this.email==null||this.password==''||this.password==null){
      this.presentToast("All fields Required");
     }else{
    this.authenticationProvider.register(this.firstname,this.lastname,this.email,this.phonenumber,this.password).subscribe(results=>{
      results['success']['message'];
      this.presentToast(results['success']['message']);
    });}
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
