import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email:string=''
  password:string=''
  constructor(private service:LoginService,private toast:NgToastService) { }

  register(){
    if(this.email == ''){
      //alert('Please enter email')
      this.toast.error({detail:"Please enter email",position:'tr',summary:'Please enter email',duration:4000}) 
      return;
    }

    if(this.password == ''){
      // alert('Please enter password')
      this.toast.error({detail:"Please enter password",position:'tr',summary:'Please enter password ',duration:4000}) 
      return;
    }

    this.service.register(this.email,this.password);
      this.email='';
      this.password='';
  }

  ngOnInit(): void {
  }

}
