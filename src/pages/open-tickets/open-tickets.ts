import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController  } from 'ionic-angular';


import { TicketProvider } from '../../providers/ticket/ticket';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
/**
 * Generated class for the OpenTicketsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-open-tickets',
  templateUrl: 'open-tickets.html',
})
export class OpenTicketsPage {

  category:number;
  piority:string="";
  message:string="";
  title:string="";
  userid:number;
  propertyid:string;
  category_id:number;
  ticket_id:string;
  priority:string;
  status:string

  constructor(public navCtrl: NavController, public navParams: NavParams,public ticketProvider:TicketProvider,public authenticationProvider:AuthenticationProvider,private toastCtrl: ToastController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpenTicketsPage');
  }

   submitTicket(){
    
    this.status="open";
    
    this.authenticationProvider.getUser().then(async response=>{
      console.log("are we getting user"+response);
      this.propertyid=response.propertyid;
      if (response.propertyid==null){
        this.propertyid="nopropertyyet";
      }
      
      this.userid=response.id;
      console.log(response.id);
      await this.ticketProvider.submitTicket(this.userid,this.propertyid,this.category,this.ticket_id,this.title,this.priority,this.message,this.status)
      .then(result=>{
       
      console.log("ticket response"+result['success']['message']);
      this.presentToast(result['success']['message']);
      
     }).catch(error=>{
       console.log(error)
     });
    
     
   
    });
     
    
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
