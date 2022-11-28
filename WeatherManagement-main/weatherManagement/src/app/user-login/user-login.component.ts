import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginuserService } from '../loginuser.service';
import { User } from '../user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user:User=new User();
  constructor(private loginuserService: LoginuserService, private router: Router) { }

  ngOnInit(): void {
  }
  userLogin()
  {
  console.log(this.user)
  this.loginuserService.loginUser(this.user).subscribe(data=>{
    alert("Login Successfully!!!")
    this.router.navigate(['./dashboard']);
  },error=>alert("Enter valid Email & Password"));
  }
  

} 

  