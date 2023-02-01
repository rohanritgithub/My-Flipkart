import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl ,Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import {NgToastService} from 'ng-angular-popup'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  responsedata:any;
  loginform !: FormGroup;
  email: string = '';
  password: string = '';

  // constructor(private service:LoginService , private route:Router , private formbuilder:FormBuilder) { 
  //   localStorage.clear();
  //   this.loginform = this.formbuilder.group({
  //     login:new FormControl('',[Validators.required,Validators.minLength(3)]),
  //     password:new FormControl('',[Validators.required,Validators.minLength(5)])
  //   })
  // }



  constructor(private service: LoginService,private route: Router,private formbuilder:FormBuilder,private toast:NgToastService) {
    localStorage.clear();
    this.loginform = this.formbuilder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  
  loginproceed(){
    if(this.email == ''){
      // alert('Please enter email')
      this.toast.error({detail:"Please enter email",position:'tr',summary:'Please enter email',duration:4000})            
      return;
    }

    if(this.password == ''){
      // alert('Please enter password')
      this.toast.error({detail:"Please enter password",position:'tr',summary:'Please enter email',duration:4000})            
      return;
    }

    this.service.login(this.email,this.password);
      this.email='';
      this.password='';

  }

  ngOnInit(): void {
  }

  // loginproced(){
  //   if(this.loginform.valid){
  //     this.service.procedlogin(this.loginform.value).subscribe(result =>{
  //       this.responsedata=result;
  //       if(this.responsedata != null || this.service.loginapiurl != ''){
  //         localStorage.setItem('token',this.responsedata.jwtToken);
  //         this.loginform.reset();
  //        this.route.navigate(['/products']);
  //       }
  //     })
  //   }
  // }

  // get login(){
  //   return this.loginform.get('login');
  // }

  // get password(){
  //   return this.loginform.get('password')
  // }

}
