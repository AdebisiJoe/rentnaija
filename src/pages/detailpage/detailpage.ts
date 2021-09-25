import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { FavouriteProvider } from '../../providers/favourite/favourite';
import { PropertyProvider } from '../../providers/property/property'; 

/**
 * Generated class for the DetailpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface image{
  id:number;
  type:string;
  imgurl:string;
  height:number;
  width:number;
  length:number;
  propertyid:number;
}

export interface subproperty{
  id:number;
  name:string;
  price:number;
  rooms:number;
  toilet:number;
  garage:number;
  coverphoto:string;
  available:number;
}

export interface propertyProperties{
  church:number;
  created_at:string;
  goffice:number;
  gymcenter:number;
  hairsaloon:number;
  hospital:number;
  hotel:number;
  id: number;
  market:number;
  mosque:number;
  propertyid:number;
  resturant:number;
  security:number;
}



@IonicPage()
@Component({
  selector: 'page-detailpage',
  templateUrl: 'detailpage.html',
})
export class DetailpagePage {

  private propertyId:string
  name:string;
  address:string;
  description:string;
  price:number;
  city?:string;
  state?:string;
  beds:number;
  toilets:number;
  baths:number;
  coverImage:string;
  type:string;
  userHasLikedProperty:boolean;
  private token:string;
  propertyProperties:propertyProperties[];
  subProperties:subproperty[];
 

  images:image[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public authenticationProvider:AuthenticationProvider,public  propertyProvider:PropertyProvider,public favouriteProvider:FavouriteProvider) {
    this.propertyId= this.navParams.get('propertyID');
    console.log(this.propertyId);
    this.name =this.navParams.get('name');
    this.description =this.navParams.get('description');
    this.price =this.navParams.get('price');
    this.beds =this.navParams.get('beds');
    this.toilets =this.navParams.get('toilets');
    this.baths =this.navParams.get('baths');
    this.coverImage=this.navParams.get('coverImage');
     this.getpropertyimages();
    this.getpropertyInfo();
     this.getSubProperties();
     this.checkLikestate();
    //[
    // {
    //   name:"living Room",
    //   url:'../assets/imgs/house1.jpg',
    //   height:400,
    //   width:400,    
    // },
    // {
    //   name:"living Room",
    //   url:'../assets/imgs/house2.jpg',
    //   height:400,
    //   width:400,    
    // },
    //   {
    //     name:"living Room",
    //     url:'../assets/imgs/house3.jpg',
    //     height:400,
    //     width:400,    
    //   },
    //   {
    //       name:"living Room",
    //       url:'../assets/imgs/house4.jpg',
    //       height:400,
    //       width:400,   
    //   }
    // ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailpagePage');
  }

  getpropertyimages(){
    this.authenticationProvider.getToken().then(result=>{
      this.token=result;
      this.propertyProvider.getpropertyimages(this.propertyId,this.token).subscribe((results:any)=>{
        

        this.images =results;
        console.log(this.images);

      });
    })
  }
  getpropertyInfo(){
    this.authenticationProvider.getToken().then(result=>{
      this.token=result;
      this.propertyProvider.getpropertyInfo(this.propertyId,this.token).subscribe((results:any)=>{
        

        this.propertyProperties =results["propertyinfo"];
        console.log(this.propertyProperties);

      });
    })
  }
  getSubProperties(){
    this.authenticationProvider.getToken().then(result=>{
      this.token=result;
      this.propertyProvider.getSubProperties(this.propertyId,this.token).subscribe((results:any)=>{
        

      this.subProperties =results["subproperty"];
       console.log(this.subProperties);

      });
    })
  }
  getSubPropertyInfo(){
    this.authenticationProvider.getToken().then(result=>{
      this.token=result;
      this.propertyProvider.getSubPropertyInfo(this.propertyId,this.token).subscribe((results:any)=>{
        

        //this.properties =results;
       // console.log(this.properties);

      });
    })
  }

goTosubpropertyDetailsPage(subPropertyId:number){
  this.navCtrl.push('SubPropertyDetailPage',{subPropertyId});
}




checkLikestate(){
  
  this.favouriteProvider.getLikeStatus(this.propertyId).then((result:any)=>{
    
    console.log("favourite value"+result);
           if(result){
            this.userHasLikedProperty=true;
           }else
           {
            this.userHasLikedProperty=false;
           };
    
    }).catch(error=>{
      console.log(error)
    });
  
}

addToFavourites(propertyid){
  this.favouriteProvider.setToLike(this.propertyId).then((result:any)=>{
    
    console.log("favourite value"+result);
           if(result){
            this.userHasLikedProperty=true;
           }else
           {
            this.userHasLikedProperty=false;
           };
    
    }).catch(error=>{
      console.log(error)
    });
}

removeFromFavourites(propertyid){
  this.favouriteProvider.setToUnlike(this.propertyId).then((result:any)=>{
    
    console.log("favourite value"+result);
           if(result){
            this.userHasLikedProperty=true;
           }else
           {
            this.userHasLikedProperty=false;
           };
    
    }).catch(error=>{
      console.log(error)
    });
}

bookProperty(subPropertyId:number){

}

}
