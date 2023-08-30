import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Shared/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  mySignUpForm !: FormGroup ;

  constructor( private fb : FormBuilder, private router : Router,
              private auth : AuthService) { }


  ngOnInit(): void {
    this.mySignUpForm = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', Validators.required, Validators.maxLength(10)],
      email: ['', [Validators.required, Validators.email]], 
      password: ['', [Validators.minLength(6), Validators.required]], 
      confirmPassword: ['', [Validators.minLength(6), Validators.required]], 
    });
  }
  

  onSubmit() {
    if (this.mySignUpForm.valid) {
      const name = this.mySignUpForm.value.name
      const email = this.mySignUpForm.value.email;
      const password = this.mySignUpForm.value.password;
      this.auth.register(email , password).then(()=>{
          console.log(`the user regirstation SuncssFully ${name}`);
          this.router.navigate(['/login'])
      }).catch(()=>{
        console.log("Got Some error..!")
      })
    }
  }
}
