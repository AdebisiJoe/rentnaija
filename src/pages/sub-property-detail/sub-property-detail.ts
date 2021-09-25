import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { PropertyProvider } from '../../providers/property/property'; 
/**
 * Generated class for the SubPropertyDetailPage page.
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

export interface subPropertyInfo{
  availablesubp:number;
  bathrooms:number;
  garages:number;
  rooms: number;
  toilets: number;
}

@IonicPage()
@Component({
  selector: 'page-sub-property-detail',
  templateUrl: 'sub-property-detail.html',
})
export class SubPropertyDetailPage {
  private subPropertyId;
  private token:string;
  private subpropertyName:string;
  private subPropertiesImages:image[];
  private subPropertyInfo:subPropertyInfo[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public authenticationProvider:AuthenticationProvider,public  propertyProvider:PropertyProvider) {
    this.subPropertyId= this.navParams.get('subPropertyId');
    this.getSubPropertyDetails(this.subPropertyId);
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubPropertyDetailPage');
  }

  goTosubpropertyDetailsPage(subPropertyId){
    this.navCtrl.push('SubPropertyDetailPage',{subPropertyId});
    this.authenticationProvider.getToken().then(result=>{
      this.token=result;
      this.propertyProvider.getSubPropertyInfo(subPropertyId,this.token).subscribe((results:any)=>{
        
         
        //this.properties =results;
       // console.log(this.properties);

      });
    })
  }

  getSubPropertyDetails(subPropertyId){
   
    this.authenticationProvider.getToken().then(result=>{
      this.token=result;
      this.propertyProvider.getSubPropertyInfo(subPropertyId,this.token).subscribe((results:any)=>{
        
         
        this.subPropertyInfo =results;
        console.log(results);

      });
    })
  }

}
