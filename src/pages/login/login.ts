import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';


import { AuthenticationProvider } from '../../providers/authentication/authentication';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  password:any ="";
  username:string="";
  error:any="";
  
  

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private authenticationProvider:AuthenticationProvider,public toastCtrl:ToastController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  login(){
    if(this.username =='' || this.username ==null ||this.password =='' || this.password==null){
     this.presentToast("All fields Required");
    }else{
    this.authenticationProvider.login(this.username,this.password).subscribe(result => { 
      console.log(result['access_token']);


      this.authenticationProvider.storeToken(result['access_token'],result['expires_in'],result['refresh_token']);
      this.authenticationProvider.getUserDetails(result['access_token']).subscribe(result =>{
        console.log("here is the user",result);
        this.authenticationProvider.storeUser(result);
      });

      if(this.authenticationProvider.isAuthenticated){
        this.navCtrl.push('HomePage');
      }else{
       
      }
    });
  }
  }

goToForgotPasswordPage(){

}

goToSignupPage()
{
  this.navCtrl.push('RegisterPage');
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
