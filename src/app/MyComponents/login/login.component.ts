import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  myLoginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService) { }

  ngOnInit(): void {


    this.myLoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(6), Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.myLoginForm.valid) {
      const email = this.myLoginForm.value.email;
      const password = this.myLoginForm.value.password
      this.auth.signin(email, password).then(() => {
        console.log("email: ",email);
        this.getCurrentUserId();
        this.router.navigate(['/home'])
      })
      .catch(()=>{
        console.log('Got some error..!')
      });
    }
  }
  getCurrentUserId(){
    this.auth.getCurrentUserId().subscribe((e)=>{
      console.log('UserId: ',e);
    }),(error: any)=>{
      console.log('got some error to get current user ID')
    }
  }
}
