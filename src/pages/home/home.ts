import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PropertyProvider } from '../../providers/property/property';

import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { MenuController } from 'ionic-angular';
import { IonicSelectableComponent } from 'ionic-selectable';

import { Schools } from '../../providers/models/schools';

class School {
 
  public name: string;
  public city: string;
  public code:string;
}

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  schooldata:any;
  where:string;
  what:string;
  price:number;
  propertyType:string;
  services:string='hostel';
  homeschools: School[];
  //school: School;

  constructor(public navCtrl: NavController,public navParams: NavParams,public propertyProvider:PropertyProvider,public menuCtrl:MenuController,public schools:Schools) {
    this.menuCtrl.enable(true);
    this.homeschools =this.schools.getSchools();
    console.log(this.homeschools);
  }
  
  schoolChange(event: {
    component: IonicSelectableComponent,
    value: any 
  }) {
    console.log('port:', event.value);
  }
  searchProperty(){
    //this.propertyType=services.

    console.log(this.services);
    this.where=this.schooldata.code;
    console.log(this.schooldata.code);
    this.navCtrl.push('SearchresultsPage',{where:this.where,what:this.what,price:this.price,propertyType:this.services});
  }

  filterSchools(schools: School[], text: string) {
    return schools.filter(school => {
      return school.name.toLowerCase().indexOf(text) !== -1 ||
      school.code.toLowerCase().indexOf(text) !== -1 ||
        school.city.toLowerCase().indexOf(text) !== -1;
    });
  }

 searchSchools(event: {component: IonicSelectableComponent,text: string}) {
  let text = event.text.trim().toLowerCase();
  event.component.startSearch();

  // // Close any running subscription.
  // if (this.portsSubscription) {
  //   this.portsSubscription.unsubscribe();
  // }

  // if (!text) {
  //   // Close any running subscription.
  //   if (this.portsSubscription) {
  //     this.portsSubscription.unsubscribe();
  //   }

  //   event.component.items = [];
  //   event.component.endSearch();
  //   return;
  // }

  // this.portsSubscription = this.portService.getPortsAsync().subscribe(ports => {
  //   // Subscription will be closed when unsubscribed manually.
  //   if (this.portsSubscription.closed) {
  //     return;
  //   }
     
    event.component.items = this.filterSchools(this.schools.getSchools(), text);
    event.component.endSearch();
  //});
}

 

  switchToMapSearch(){
    this.navCtrl.push('mapSearch');
  }

}
