import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OpenTicketsPage } from '../open-tickets/open-tickets';
import { TicketDetailPage } from '../ticket-detail/ticket-detail';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { TicketProvider } from '../../providers/ticket/ticket';
/**
 * Generated class for the TicketsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 interface Ticket{
   id:number;
   userid:number;
   propertyid:string;
   category_id:number;
   ticket_id:string;
   title:string;
   priority:string;
   message:string;
   status:string;

}

@IonicPage()
@Component({
  selector: 'page-tickets',
  templateUrl: 'tickets.html',
})
export class TicketsPage {

  public tickets:Ticket[];
  public openTicketsPage:OpenTicketsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams,public authenticationProvider:AuthenticationProvider,public ticketProvider:TicketProvider) {
//     this.tickets=[
//       {
//         id:1,
//         userid:2,
//         propertyid:"defrttyu",
//         category_id:3,
//         ticket_id:"KHJGjusu",
//         title:"Cleaning is not Regular",
//         priority:"Medium",
//         message:"the cleaners have not been coming to clean the House regularly",
//         status:"OPEN",
//     },
//     {
//       id:2,
//       userid:2,
//       propertyid:"defrttyu",
//       category_id:3,
//       ticket_id:"KHJGjusu",
//       title:"How can i make Book accomadtion for a Friend Using my account",
//       priority:"Medium",
//       message:"the cleaners have not been coming to clean the House regularly",
//       status:"OPEN",
//   },
//   {
//     id:3,
//     userid:2,
//     propertyid:"defrttyu",
//     category_id:3,
//     ticket_id:"KHJGjusu",
//     title:"can i get a contact number to call",
//     priority:"Medium",
//     message:"the cleaners have not been coming to clean the House regularly",
//     status:"OPEN",
// },
// {
//   id:4,
//   userid:2,
//   propertyid:"defrttyu",
//   category_id:3,
//   ticket_id:"KHJGjusu",
//   title:"Cleaning is not Regular",
//   priority:"Medium",
//   message:"the cleaners have not been coming to clean the House regularly",
//   status:"OPEN",
// },
// {
//   id:5,
//   userid:2,
//   propertyid:"defrttyu",
//   category_id:3,
//   ticket_id:"KHJGjusu",
//   title:"Kitchen Sink Blocked",
//   priority:"Medium",
//   message:"the cleaners have not been coming to clean the House regularly",
//   status:"OPEN",
// }
//   ];

this.getUserTickets();

  }


  getUserTickets(){
     this.authenticationProvider.getUser().then(user=>{
      let userid=user.id;

       this.ticketProvider.getUserTicketList(userid).then(results=>{
        this.tickets=results['tickets'];
      }).catch(error=>{
        console.log(error);
      });
     }).catch(error=>{
       console.log(error);
     });
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketsPage');
  }

  goToOpenTicketsPage()
  {
    this.navCtrl.push(OpenTicketsPage);
  }
  gotoTocketDetail(ticketId)
  {
    this.navCtrl.push(TicketDetailPage,{ticketId:ticketId});

  }

}
