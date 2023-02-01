import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  api='http://localhost:3000/product';
  constructor(private http:HttpClient) { }

  // Getproduct(){
  //   return this.http.get<any>('http://localhost:3000/product').pipe(map((res =>{
  //     //console.log(res)
  //     return res;
  //   })))
  // }

  Getproductdata(){
    return this.http.get(this.api);
  }

}
