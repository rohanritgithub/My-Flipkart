import { Component, OnInit } from '@angular/core';
import { CardService } from '../service/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  product:any=[]
  grandtotal !: number;
  constructor(private card:CardService) { }

  ngOnInit(): void {
    this.card.Getproduct().subscribe(result =>{
      this.product = result;
      this.grandtotal = this.card.getTotalprice();
    })
  }

  deleteitem(item:any){
    this.card.removecarditem(item);
  }

  emptycard(){
    this.card.removeallcard();
  }

}
