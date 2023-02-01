import { Component, OnInit } from '@angular/core';
import { CardService } from '../service/card.service';
import {NgModel} from '@angular/forms'
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalitem:number=0;
  public searchTerm:string = '';


  constructor(private card:CardService,private service:LoginService) { }

  ngOnInit(): void {
    this.card.Getproduct().subscribe(result =>{
      this.totalitem=result.length;
    })
  }

  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    console.log(this.searchTerm)
    this.card.search.next(this.searchTerm);
  }

  logout(){
    this.service.logout();
  }

}
