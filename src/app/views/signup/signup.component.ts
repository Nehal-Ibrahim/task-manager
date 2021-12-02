import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authservice:AuthService , private router:Router) { }
  // back(){
  //   this.router.navigate(['/profile'])
  // }

  invalidEmail:boolean=false
  invalidage:boolean=false
  users:any
  token:any

  signup(credentials:any){
    this.authservice.signup(credentials).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.users=res
        this.token=this.users.token
        localStorage.setItem('token',this.token)
        this.router.navigate(['/profile'])
       
          
      },error:(httpError:any)=>{
        console.log(httpError)
        if(httpError.error.code===11000){
          this.invalidEmail=true}
          if(httpError.error.errors.age.name==='ValidatorError'){
            this.invalidage=true
          }
      }
    })}

    changeage(){
      this.invalidage=false
    }
  
    changeEmail(){
      this.invalidEmail=false
    }
  

  ngOnInit(): void {
  }

}
