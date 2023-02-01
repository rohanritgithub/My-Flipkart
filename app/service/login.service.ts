import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from '@angular/fire/auth'
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //loginapiurl="http://localhost:3000/login";

  constructor(private http:HttpClient,private fireauth: AngularFireAuth,private router:Router,private toast:NgToastService) { }

  // procedlogin(login:any){
  //   return this.http.post(this.loginapiurl,login);
  // }

  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then( res => {
        localStorage.setItem('token', 'true');
        this.router.navigate(['/products']);

        if(res.user?.emailVerified == true){
          this.router.navigate(['/products'])
        }else{
          this.router.navigate(['/verify-email'])
        }
        this.toast.success({detail:"Login Successfull..",position:'tr',summary:'User as logged in',duration:4000}) 
      },(err) => {
        //alert('Something went wrong..');
        this.toast.error({detail:"Something went wrong..",position:'tr',summary:'Please check email and password',duration:4000}) 
        this.router.navigate(['/login']);
      }
    );
  }

  //register method

  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(
      res => {
        //alert('Register as successful');
        this.toast.success({detail:"Register as successful",position:'tr',summary:'User as register',duration:4000}) 
        this.router.navigate(['/login']);
        this.sendEmailForVarification(res.user)
      },
      (err) => {
        //alert('Register Wrong');
        this.toast.error({detail:"Register Wrong",position:'tr',summary:'The email address is already in use by another account.',duration:4000}) 
        this.router.navigate(['/register']);
      }
    );
  }

  logout() {
    this.fireauth.signOut().then(
      () => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
        this.toast.success({detail:"Logout successfull",position:'tr',summary:'User as logged out',duration:4000}) 
      },
      (err) => {
        //alert('Signout Wrong');
        // this.toast.error({detail:"Signout Wrong",position:'tr',summary:'Please check',duration:4000}) 
      }
    );
  }

  forgotpwd(email:string){
    this.fireauth.sendPasswordResetEmail(email).then(()=>{
      this.router.navigate(['/verify-email']);
      this.toast.success({detail:"Link send successfully",position:'tr',summary:'Please check E-mail',duration:4000}) 
    },err =>{
      // alert('Not send email something went wrong')
      this.toast.error({detail:"something went wrong",position:'tr',summary:'Please enter email id',duration:4000}) 
    } )
  }

  //email verifiaction method
  sendEmailForVarification(user:any){
    user.sendEmailForVarification().then( (res:any)=>{
      this.router.navigate(['/verify-email'])
    },(err:any)=>{
      // alert('Something went wrong. Not able to send mail to registred email.')
      this.toast.error({detail:"Something went wrong.",position:'tr',summary:'Not able to send mail to registred email.',duration:4000}) 
    } )
  }

  googlesignIn(){
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res=>{
      this.router.navigate(['/home']);
      localStorage.setItem('token',JSON.stringify(res.user?.uid))
    },err=>{
      // alert('Falid to sign In')
      this.toast.error({detail:"Falid to sign In",position:'tr',summary:'Please check email and password',duration:4000}) 
    })
  }

  //   procedlogin(logincre:any){
  //     return this.http.post(this.loginapiurl,logincre)
  //   }

  //   islogedin(){
  //     return localStorage.getItem("token")!=null;
  //   }

  //   Gettoken(){
  // return localStorage.getItem("token") || '';
  //   }


}
