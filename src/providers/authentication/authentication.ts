import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Storage } from '@ionic/storage';

/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {
  baseUrl:string="http://rentnaija.ng";
  loginUrl:any=this.baseUrl+"/oauth/token";
  userDetailUrl:any=this.baseUrl+"/api/user";
  registerUrl:any=this.baseUrl+"/api/registeruser";
  headers:any;

  constructor(public http: HttpClient,private storage: Storage) {
    this.headers = new Headers();
    console.log('Hello AuthenticationProvider Provider');
  }

  login(username,password){

    let credentials={
      username:username,
      password:password,
      client_id:2,
      client_secret:'lGgZgikDhKVLMvkURO1SHTdTlFoop6x03XWh9Q1Z',
      grant_type:'password',
    };

    console.log(username+" "+password);
    
     
     let headers: HttpHeaders = new HttpHeaders({
      "Content-Type": "application/json",
    })
       
      return this.http.post(this.loginUrl,
      credentials,{headers}).map(res=>res);
  }

  register(firstname:string,lastname:string,email:string,phonenumber:string,password:string){
    let userDetails={
      firstname,
      lastname,
      email,
      phonenumber,
      password
    }
    this.headers.append("Content-Type", "application/json");
       
    return this.http.post(this.registerUrl,
      userDetails,{headers:this.headers}).map(res=>res);
  }

  editUserDetails(firstname:string,lastname:string,phonenumber:string,userid:number,token:string){
    let userDetails={
      firstname,
      lastname,
      phonenumber
    }
    
    let headers: HttpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
       
    return this.http.post(this.baseUrl+`/public/api/updateuserdetail/${userid}`,
      userDetails,{headers:headers}).map(res=>res);
  }
  editLoginDetail(password:string,userid:number,token:string){
    let userDetails={
      password,
     
    }
    
    let headers: HttpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
       
    return this.http.post(this.baseUrl+`/public/api/updateuserpassword/${userid}`,
      userDetails,{headers:headers}).map(res=>res);
  }

  editprofileImage(profileimage:string,userid:number,token:string){

  }

  getUserDetails(token:string){
    
    let headers: HttpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    })
    console.log("logging token again "+token)
    return this.http.get(this.userDetailUrl,{headers}).map(res=>res);
  }

  logoutUser(){
     this.destroyToken();
  }

  storeToken(token:string,expiration:number,refresh_token:string){
    let expired_at = (expiration * 1000) + Date.now();
    this.storage.set('auth', {
      access_token: token,
      refresh_token: refresh_token,
      expired_at:expired_at
    })
  }
  
   
  async getToken(){
    let auth: any = await this.storage.get('auth')
    var token=auth.access_token;
    
    if(!auth)
    return null
    if ( auth.expired_at <=Date.now){
      this.destroyToken();
    }
     

    return token;
  }

  destroyToken() {
    this.storage.remove('auth');
    
  }

 async isAuthenticated(){
    let now = Date.now();
    let auth: any = await this.storage.get('auth')
    if (!!!auth)
      return false;
    if ( auth.expired_at <= now)
      return false;

    return true; 
  }

  storeUser(user:any){
   this.storage.set('user',user);
  }

  async getUser(){
    let user:any=await this.storage.get('user');
    if(!user){
      return "user not found";
    }
    return user;
  }

}
