import { Component } from '@angular/core';
import { CameraOptions } from '@ionic-native/camera';
import { Camera } from '@ionic-native/camera';
import { IonicPage, NavController, NavParams,ActionSheetController,ToastController } from 'ionic-angular';

import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { EditprofilePage } from '../editprofile/editprofile';
import { EditLoginDetailPage } from '../edit-login-detail/edit-login-detail';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  id:number;
  name:string;
  phonenumber:string;
  profileimage:string;
  propertyid:string;
  email:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl:ToastController,public authenticationProvider:AuthenticationProvider,public actionSheetController:ActionSheetController) {
   this.authenticationProvider.getUser().then(results=>{
    console.log(results);
    this.id=results.id;
    this.name=results.name;
    this.phonenumber=results.phonenumber;
    this.profileimage=results.profileimage;
    this.propertyid=results.propertyid;
    this.email=results.email;
    
   });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    
  }

 

  takePhoto(sourceType:number) {
    // const options: CameraOptions = {
    //   quality: 50,
    //   destinationType: Camera.DestinationType.DATA_URL,
    //   encodingType: Camera.EncodingType.JPEG,
    //   mediaType: Camera.MediaType.PICTURE,
    //   correctOrientation: true,
    //   sourceType:sourceType,
    // }

    // Camera.getPicture(options).then((imageData) => {
    //   let base64Image = 'data:image/jpeg;base64,' + imageData;
    // }, (err) => {
    //   // Handle error
    // });

  }
  editProfilePhoto(){

    this.presentToast("not available for now");
  //  let actionSheet= this.actionSheetController.create({
  //     title: 'Choose a method',
  //     buttons: [
  //       {
  //         text: 'Camera',
         
  //         handler: () => {
  //           this.takePhoto(1);
  //           console.log('Destructive clicked');
  //         }
  //       },{
  //         text: 'Choose a Photo',
  //         handler: () => {
  //           this.takePhoto(0);
  //           console.log('Archive clicked');
  //         }
  //       },{
  //         text: 'Cancel',
  //         role: 'cancel',
  //         handler: () => {
  //           console.log('Cancel clicked');
  //         }
  //       }
  //     ]
  //   });
  //   actionSheet.present();
  } 
  
  
  goToEditLoginPage()
  {
    
  let nameCombination:string[]= this.name.split(" ");
  let lastname=nameCombination[0];
  let firstname=nameCombination[1];
  this.navCtrl.push(EditLoginDetailPage,{email:this.email,lastname:lastname,firstname:firstname,phonenumber:this.phonenumber,userid:this.id});
  }

  goToEditProfilePage(){

    let nameCombination:string[]= this.name.split(" ");
    let lastname=nameCombination[0];
    let firstname=nameCombination[1];
    this.navCtrl.push(EditprofilePage,{email:this.email,lastname:lastname,firstname:firstname,phonenumber:this.phonenumber,userid:this.id});
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

  logout(){
    this.authenticationProvider.destroyToken();
    this.navCtrl.push('LoginPage');
  }
  
}
