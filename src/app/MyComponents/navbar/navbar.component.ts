import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Shared/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userEmail : any;
  constructor(private auth : AuthService,
              private router : Router) { }

  ngOnInit(): void {
    this.getEmail();
  }
  getEmail(){
    this.auth.userEmail().subscribe((e)=>{
      this.userEmail = e;
    }),
    (error: any)=>{
      console.log("got some error")
    }
  }
  logout(){
   this.auth.logout()
   this.router.navigate(['login'])
  }
}
