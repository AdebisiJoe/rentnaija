import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import 'rxjs/add/operator/toPromise';
/*
  Generated class for the TicketProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TicketProvider {
  private  baseUrl:string="http://rentnaija.ng";
  private submitTicketUrl:string=this.baseUrl+"/api/createticket";
  private userTicketListUrl:string=this.baseUrl+"/api/viewallusertickets";
  private userSingleTicketThreadUrl:string=this.baseUrl+"/api/ticketsthread";
  private UserCommentUrl:string=this.baseUrl+"/api/postcomment";

  constructor(public http: HttpClient,public authenticationProvider:AuthenticationProvider) {
    
    console.log('Hello TicketProvider Provider');
  }


  submitComment(){

  }

   submitTicket(userid:number,propertyid:string,category_id:number,ticket_id:string,title:string,priority:string,message:string,status:string){
    return new Promise (async resolve => {
    
    let ticketData={
      userid:userid,
      propertyid:propertyid,
      category_id:category_id,
      title:title,
      priority:priority,
      message:message,
      status:status
    };

  let token= await this.authenticationProvider.getToken();
       console.log("we have token here "+token);
    let headers: HttpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      "Content-Type": "application/json"
    })
    
       console.log("we go here");
     
       
       resolve(
          this.http.post(this.submitTicketUrl,
        JSON.stringify(ticketData),{headers}).map(res=>res).toPromise()
      );

      });
      
  }

  getUserTicketList(userid){
    return new Promise (async resolve => {

    let token= await this.authenticationProvider.getToken();
       console.log("we have token here "+token);
    let headers: HttpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      "Content-Type": "application/json"
    });

   // setTimeout(() => {
     resolve(  this.http.post(
        this.userTicketListUrl,
        {
          userid:userid
        }, 
        { headers}
      ).map(res =>res).toPromise());
   // }, 300);
  });
    
  }

  getSingleTicketthread(ticket_id){
    return new Promise (async resolve => {

      let token= await this.authenticationProvider.getToken();
         console.log("we have token here "+token);
      let headers: HttpHeaders = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      });
  
     // setTimeout(() => {
       resolve(  this.http.post(
          this.userSingleTicketThreadUrl,
          {
            ticket_id:ticket_id
          }, 
          { headers}
        ).map(res =>res).toPromise());
     // }, 300);
    });
  }


  postTicketresponse(comment,ticket_id,user_id){
    return new Promise (async resolve => {

      let token= await this.authenticationProvider.getToken();
         console.log("we have token here "+token);
      let headers: HttpHeaders = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      });
    resolve(this.http.post(
        this.UserCommentUrl,
        {
             comment:comment,
             ticket_id:ticket_id,
             user_id:user_id
        }, 
        { headers: headers }
      ).map(res =>res).toPromise());

    });
  }

  

}
