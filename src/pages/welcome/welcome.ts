import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface Slide {
  title: string;
  //description: string;
  image: string;
  logo:string;
}

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  slides: Slide[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.slides = [
      {
        title: "Accomodation made easy for all",
       // description: values.TUTORIAL_SLIDE1_DESCRIPTION,
        image: 'assets/imgs/slideimages/slide1.png',
        logo: 'assets/imgs/logo.png',
      },
      {
        title: "Premium service with Good Pricing",
       // description: values.TUTORIAL_SLIDE2_DESCRIPTION,
        image: 'assets/imgs/slideimages/slide2.png',
        logo: 'assets/imgs/logo.png',
      },
      {
        title: "Rent Naija for All your Accomdation needs,Simple And Efficient",
        //description: values.TUTORIAL_SLIDE3_DESCRIPTION,
        image: 'assets/imgs/slideimages/slide3.png',
        logo: 'assets/imgs/logo.png',
      },
      {
        title: "Rent Naija for All your Accomdation needs,Simple And Efficient",
        //description: values.TUTORIAL_SLIDE3_DESCRIPTION,
        image: 'assets/imgs/slideimages/slide4.png',
        logo: 'assets/imgs/logo.png',
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }
  login(){
   this.navCtrl.push('LoginPage');
  }
  signup(){
    this.navCtrl.push('RegisterPage');
  }

}
