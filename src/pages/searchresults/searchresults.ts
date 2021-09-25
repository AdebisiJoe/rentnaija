import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PropertyProvider } from '../../providers/property/property';
import { property } from '../../providers/models/property';
import { MenuController } from 'ionic-angular';

import { AuthenticationProvider } from '../../providers/authentication/authentication';
/**
 * Generated class for the SearchresultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searchresults',
  templateUrl: 'searchresults.html',
})
export class SearchresultsPage {

 
  propertyType:string;
  where:string;
  what:string;
  price:number;
  token:string;
  properties:property[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public propertyProvider:PropertyProvider,public menuCtrl:MenuController,public authenticationProvider:AuthenticationProvider ) {
    //this.getSearchResult();
    this.menuCtrl.enable(true);
    this.getHostels();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchresultPage');
   this.propertyType= this.navParams.get('propertyType');
   console.log(this.propertyType= this.navParams.get('propertyType'));
   this.where= this.navParams.get('where');
   this.what= this.navParams.get('what');
   this.price= this.navParams.get('price');
  }

  getHostels(){

    this.authenticationProvider.getToken().then(result=>{
      this.token=result;
      this.propertyProvider.getHostels(this.where,this.price,this.token).subscribe((results:any)=>{
        

        this.properties =results;
        console.log(this.properties);

      });
    })

    
  }


  getSearchResult(){

    // name:string;
    // loaction:string;
    // description:string;
    // price:number;
    // beds:number;
    // toilets:number;
    // baths:number;
    // this.properties = [
    //   { id:1,
    //     name:"2 Bedroom apartment",
    //     address:"Ikeja Lagos",
    //     description: "AVAILABLE FOR Rent IS Tastefully and well finished 4 bedroom terrace, all rooms en-suite, fitted kitchen, ample parking space, well fenced round at orchid hotel road by second toll gate lekki, lagos. ",
    //     price:2000000,
    //     beds:2,
    //     toilets:2,
    //     baths:2,
    //     image:'assets/imgs/house1.jpg',
    //     type:'Rent',
    //     propertyId:"abodefg"
    //   },
    //   {
    //     id:2,
    //     name:"2 Bedroom apartment",
    //     address:"Ikeja Lagos",
    //     description: "AVAILABLE FOR Rent IS Tastefully and well finished 4 bedroom terrace, all rooms en-suite, fitted kitchen, ample parking space, well fenced round at orchid hotel road by second toll gate lekki, lagos. ",
    //     price:2000000,
    //     beds:2,
    //     toilets:2,
    //     baths:2,
    //     image:'assets/imgs/house2.jpg',
    //     type:'Rent',
    //     propertyId:"abckefg"
    //   },
    //   { id:3,
    //     name:"2 Bedroom apartment",
    //     address:"Ikeja Lagos",
    //     description: "AVAILABLE FOR Rent IS Tastefully and well finished 4 bedroom terrace, all rooms en-suite, fitted kitchen, ample parking space, well fenced round at orchid hotel road by second toll gate lekki, lagos. ",
    //     price:2000000,
    //     beds:2,
    //     toilets:2,
    //     baths:2,
    //     image:'assets/imgs/house3.jpg',
    //     type:'Rent',
    //     propertyId:"ubcdefg"
    //   },
    //   {
    //     id:4,
    //     name:"2 Bedroom apartment",
    //     address:"Ikeja Lagos",
    //     description: "AVAILABLE FOR Rent IS Tastefully and well finished 4 bedroom terrace, all rooms en-suite, fitted kitchen, ample parking space, well fenced round at orchid hotel road by second toll gate lekki, lagos. ",
    //     price:2000000,
    //     beds:2,
    //     toilets:2,
    //     baths:2,
    //     image:'assets/imgs/house2.jpg',
    //     type:'Rent',
    //     propertyId:"abudefg"
    //   },
    //   {
    //     id:5,
    //     name:"2 Bedroom apartment",
    //     address:"Ikeja Lagos",
    //     description: "AVAILABLE FOR Rent IS Tastefully and well finished 4 bedroom terrace, all rooms en-suite, fitted kitchen, ample parking space, well fenced round at orchid hotel road by second toll gate lekki, lagos. ",
    //     price:2000000,
    //     beds:2,
    //     toilets:2,
    //     baths:2,
    //     image:'assets/imgs/house4.jpg',
    //     type:'Rent',
    //     propertyId:"abcdjfg"
    //   }
    // ]
  }
   
gotoPropertyDetailPage(propertyID:number){
  const property2 =this.properties.find((property) => property.id === propertyID);
  
    
 const name= property2.name
 const description= property2.description
 const price= property2.price
 const beds= property2.beds
 const toilets= property2.toilets
 const baths= property2.baths
 const coverImage= property2.coverphoto
 this.navCtrl.push('DetailpagePage',{propertyID,name,description,price,beds,toilets,baths,coverImage});
}


}
