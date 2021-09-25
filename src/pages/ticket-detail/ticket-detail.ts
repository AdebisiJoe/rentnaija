import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';

import { TicketProvider } from '../../providers/ticket/ticket';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

/**
 * Generated class for the TicketDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
class UserTicketsComments {
  constructor(public user_id:string,public comment: string,public created_at:string) { }
}

@IonicPage()
@Component({
  selector: 'page-ticket-detail',
  templateUrl: 'ticket-detail.html',
})
export class TicketDetailPage {

    public ticketId:string;
    public ticket_id: string;
    ticket_title : string ="";
    ticket_message : string ="";
    ticket_status : string ="";
    ticket_created_at : string ="";
    category_name : string ="";
    user_id : any;
    message :string="";
    ticket_id3 :any;
   public responsefrom:string="";
   

   public TicketsComments :Array<UserTicketsComments>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public ticketProvider:TicketProvider,public authenticationProvider:AuthenticationProvider,private toastCtrl: ToastController) {
    this.ticketId=this.navParams.get("ticketId");
    console.log("here is the ticketId "+this.ticketId);
    this.getTicketThread();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketDetailPage');
  }

  getTicketThread(){
    this.ticketProvider.getSingleTicketthread(this.ticketId).then(results=>{
      this.TicketsComments=results['comments'];

      console.log(this.TicketsComments);
     // console.log("here is userid from comments"+)

   // this.ticketId=  results["ticket"]["ticket_id"];
    // console.log(this.ticketId);
      this.ticket_id=  results['ticket']['id'];

      

     this.ticket_title=this.convertHtmlToText(results['ticket']['title']);
     console.log(this.ticket_title);
     
     this.ticket_message= results['ticket']['message'];
     this.ticket_message=this.convertHtmlToText(this.ticket_message);
     console.log(this.ticket_message);

      this.ticket_status=  results['ticket']['status'];
      console.log(this.ticket_status);

      this.ticket_created_at= results['ticket']['created_at'];
      console.log(this.ticket_created_at);

      this.user_id = results['userid'];
      console.log(this.user_id);

      this.category_name= results['category']['name'];
      console.log(this.category_name);
    });
  }

  convertHtmlToText(returnText) {
        

    if ((returnText===null) || (returnText===''))
        return false;
   else
    returnText = returnText.toString();

    //-- remove BR tags and replace them with line break
    returnText=returnText.replace(/<br>/gi, "\n");
    returnText=returnText.replace(/<br\s\/>/gi, "\n");
    returnText=returnText.replace(/<br\/>/gi, "\n");

    //-- remove P and A tags but preserve what's inside of them
    returnText=returnText.replace(/<p.*>/gi, "\n");
    returnText=returnText.replace(/<a.*href="(.*?)".*>(.*?)<\/a>/gi, " $2 ($1)");

    //-- remove all inside SCRIPT and STYLE tags
    returnText=returnText.replace(/<script.*>[\w\W]{1,}(.*?)[\w\W]{1,}<\/script>/gi, "");
    returnText=returnText.replace(/<style.*>[\w\W]{1,}(.*?)[\w\W]{1,}<\/style>/gi, "");
    //-- remove all else
    returnText=returnText.replace(/<(?:.|\s)*?>/g, "");

    //-- get rid of more than 2 multiple line breaks:
    returnText=returnText.replace(/(?:(?:\r\n|\r|\n)\s*){2,}/gim, "\n\n");

    //-- get rid of more than 2 spaces:
    returnText = returnText.replace(/ +(?= )/g,'');

    //-- get rid of html-encoded characters:
    returnText=returnText.replace(/&nbsp;/gi," ");
    returnText=returnText.replace(/&amp;/gi,"&");
    returnText=returnText.replace(/&quot;/gi,'"');
    returnText=returnText.replace(/&lt;/gi,'<');
    returnText=returnText.replace(/&gt;/gi,'>');

    //-- return
   return returnText;
}

submitTicketResponse()
{
  this.authenticationProvider.getUser().then(async response=>{
    this.user_id=response.id;
    console.log("ticket id here "+this.ticket_id);
  this.ticketProvider.postTicketresponse(this.message,this.ticket_id,this.user_id).then(result=>{
    if(result['data']=="done"){
     this.presentToast("Ticket Response submitted Successfully");
    }
  }).catch(error=>{
    console.log(error)
  });

}).catch(error=>{
  console.log(error)
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
