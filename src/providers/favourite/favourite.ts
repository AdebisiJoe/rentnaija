import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

/*
  Generated class for the FavouriteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavouriteProvider {
  baseUrl:string="http://rentnaija.ng";
  headers:any;

  constructor(public http: HttpClient,public authenticationProvider:AuthenticationProvider) {
    console.log('Hello FavouriteProvider Provider');
  }

  getLikeStatus(properityid){
    //likes/{propertyid}/{userid}
   
      return new Promise (async resolve => {

        let token= await this.authenticationProvider.getToken();
           console.log("we have token here "+token);
        let headers: HttpHeaders = new HttpHeaders({
          'Authorization': `Bearer ${token}`,
          "Content-Type": "application/json"
        });
        
        let userdetails= await  this.authenticationProvider.getUser();
        let  userid:any=userdetails.id;
      resolve(this.http.get(
          this.baseUrl+`/api/likes/${properityid}/${userid}`
          , 
          { headers: headers }
        ).map(res =>res).toPromise());
  
      });   
  }

  setToLike(properityid){
    //addlike/{propertyid}/{userid}

    return new Promise (async resolve => {

      let token= await this.authenticationProvider.getToken();
         console.log("we have token here "+token);
      let headers: HttpHeaders = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      });
      
      let userdetails= await  this.authenticationProvider.getUser();
      let  userid:any=userdetails.id;
    resolve(this.http.post(
        this.baseUrl+`/api/addlike/${properityid}/${userid}`
        , 

        { headers: headers }
      ).map(res =>res).toPromise());

    });

  }

  setToUnlike(properityid)
  {
    return new Promise (async resolve => {

      let token= await this.authenticationProvider.getToken();
         console.log("we have token here "+token);
      let headers: HttpHeaders = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      });
      
      let userdetails= await  this.authenticationProvider.getUser();
      let  userid:any=userdetails.id;
    resolve(this.http.post(
        this.baseUrl+`/api/unlike/${properityid}/${userid}`
        ,
        {

        },
        { headers: headers }
      ).map(res =>res).toPromise());

    });

  }

}
