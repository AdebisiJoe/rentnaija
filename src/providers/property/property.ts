import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PropertyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PropertyProvider {
  baseUrl:string="http://rentnaija.ng";
  headers:any;

  constructor(public http: HttpClient) {
    console.log('Hello PropertyProvider Provider');
  }

  getHostels(state:string,price:number,token:string){
    //hostel/{state}/{price}

    let hostelDetail={
     state,
     price
    }
    
    
    let headers: HttpHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`
    })
    return this.http.get(this.baseUrl+`/api/hostel/${state}`,
      {headers:this.headers}).map(res=>res);
  }

  getpropertyimages(properityid,token:string){
    
     
     
     let headers: HttpHeaders = new HttpHeaders({
       "Content-Type": "application/json",
       'Authorization': `Bearer ${token}`
     })
     return this.http.get(this.baseUrl+`/api/properties/images/${properityid}`,
       {headers:this.headers}).map(res=>res);
  }
  getpropertyInfo(properityid,token:string){
     
    let headers: HttpHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`
    })
    return this.http.get(this.baseUrl+`/api/propertyinfo/${properityid}`,
      {headers:this.headers}).map(res=>res);
  }
  getSubProperties(properityid,token:string){
    let headers: HttpHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`
    })
    return this.http.get(this.baseUrl+`/api/subproperty/${properityid}`,
      {headers:this.headers}).map(res=>res);
  }
  getSubPropertyInfo(properityid,token:string){
    let headers: HttpHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`
    })
    return this.http.get(this.baseUrl+`/api/subpropertyinfo/${properityid}`,
      {headers:this.headers}).map(res=>res);
  }
   
  likeProperty(){
    
  }
  
}
