import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FavouritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 export interface Favourite{
  name:string;
  address:string;
  description:string;
  price:number;
  city?:string;
  state?:string;
  beds:number;
  toilets:number;
  baths:number;
  image:string;
  type:string;
 }

@IonicPage()
@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {

  favouriteProperties:Favourite[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavouritesPage');
  }

  getFavourites(){
    

      // name:string;
      // loaction:string;
      // description:string;
      // price:number;
      // beds:number;
      // toilets:number;
      // baths:number;
      this.favouriteProperties = [
        {
          name:"2 Bedroom apartment",
          address:"Ikeja Lagos",
          description: "AVAILABLE FOR Rent IS Tastefully and well finished 4 bedroom terrace, all rooms en-suite, fitted kitchen, ample parking space, well fenced round at orchid hotel road by second toll gate lekki, lagos. ",
          price:2000000,
          beds:2,
          toilets:2,
          baths:2,
          image:'assets/imgs/house1.jpg',
          type:'Rent'
        },
        {
          name:"2 Bedroom apartment",
          address:"Ikeja Lagos",
          description: "AVAILABLE FOR Rent IS Tastefully and well finished 4 bedroom terrace, all rooms en-suite, fitted kitchen, ample parking space, well fenced round at orchid hotel road by second toll gate lekki, lagos. ",
          price:2000000,
          beds:2,
          toilets:2,
          baths:2,
          image:'assets/imgs/house2.jpg',
          type:'Rent'
        },
        {
          name:"2 Bedroom apartment",
          address:"Ikeja Lagos",
          description: "AVAILABLE FOR Rent IS Tastefully and well finished 4 bedroom terrace, all rooms en-suite, fitted kitchen, ample parking space, well fenced round at orchid hotel road by second toll gate lekki, lagos. ",
          price:2000000,
          beds:2,
          toilets:2,
          baths:2,
          image:'assets/imgs/house3.jpg',
          type:'Rent'
        },
        {
          name:"2 Bedroom apartment",
          address:"Ikeja Lagos",
          description: "AVAILABLE FOR Rent IS Tastefully and well finished 4 bedroom terrace, all rooms en-suite, fitted kitchen, ample parking space, well fenced round at orchid hotel road by second toll gate lekki, lagos. ",
          price:2000000,
          beds:2,
          toilets:2,
          baths:2,
          image:'assets/imgs/house2.jpg',
          type:'Rent'
        },
        {
          name:"2 Bedroom apartment",
          address:"Ikeja Lagos",
          description: "AVAILABLE FOR Rent IS Tastefully and well finished 4 bedroom terrace, all rooms en-suite, fitted kitchen, ample parking space, well fenced round at orchid hotel road by second toll gate lekki, lagos. ",
          price:2000000,
          beds:2,
          toilets:2,
          baths:2,
          image:'assets/imgs/house4.jpg',
          type:'Rent'
        }
      ]
    }
 

}
