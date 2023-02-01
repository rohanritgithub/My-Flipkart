import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  public carditem: any = [];
  public productlist = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>(""); 

  constructor() {}

  Getproduct() {
    return this.productlist.asObservable();
  }

  setproduct(product: any) {
    this.carditem.push(...product);
    this.productlist.next(product);
  }

  addtocart(product: any) {
    this.carditem.push(product);
    this.productlist.next(this.carditem);
    this.getTotalprice();
    console.log(this.carditem);
  }

  getTotalprice(): number {
    let grandTotal = 0;
    this.carditem.map((a: any) => {
      grandTotal += a.total;
    });
    return grandTotal;
  }

  removecarditem(product: any) {
    this.carditem.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.carditem.splice(index, 1);
      }
    });
    this.productlist.next(this.carditem);
  }

  removeallcard() {
    this.carditem = [];
    this.productlist.next(this.carditem);
  }
}
