import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.component.html',
  styleUrls: ['./forgotpwd.component.css']
})
export class ForgotpwdComponent implements OnInit {
  email:string='';
  constructor(private service:LoginService) { }

  ngOnInit(): void {
  }

  
  forgotpwd(){
    this.service.forgotpwd(this.email);
    this.email='';
  }

}
