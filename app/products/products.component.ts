import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../service/apiservice.service';
import { CardService } from '../service/card.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productlist:any;
  //filtercategory:any;
  searchkey:string = '';
  constructor(private api:ApiserviceService , private card:CardService , private toast:NgToastService) {
    this.Get();
   }

  Get(){
    this.api.Getproductdata().subscribe(result =>{
      //this.filtercategory=result;
      this.productlist=result;
      //console.log(this.productlist)
      this.productlist.forEach((a:any) => {
        if(a.category == "women's clothing" || a.category == "men's clothing"){
          a.category = "fashion"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productlist)
    })
    this.card.search.subscribe(val=>{
      this.searchkey = val;
    })
  }

  addtocart(item:any){
    this.card.addtocart(item);
    //alert('Item added successfully..')
    this.toast.success({detail:"Item added successfully..",position:'tr',summary:'Item is add',duration:4000}) 
  }


  // filter(category:string){
  //   this.filtercategory = this.productlist.filter((a:any)=>{
  //     if(a.category == category || category == ''){
  //       return a;
  //     }
  //   })
  // }


  ngOnInit(): void {
    //this.Load();
  }

  // Load(){
  //   this.service.Getproduct().subscribe(result =>{
  //     this.productlist=result
  //     console.log(this.productlist)
  //   }) 
  // }

  
}
