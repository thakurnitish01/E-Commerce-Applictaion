import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth : AngularFireAuth) { }
  
  signin(email  : any, password : any){
  return this.auth.signInWithEmailAndPassword(email,password)
  }

  async register(email: any, password: any) : Promise<any> {
    try {
      const userCredential = await this.auth.createUserWithEmailAndPassword(email, password);
      console.log('User registered:', userCredential.user);
    } catch (error) {
      console.error('Registration error:', error);
    }
  }
  getCurrentUserId(): Observable<any> {
    return this.auth.authState.pipe(map(user => user ? user.uid : null));
  }
  userEmail(): Observable<any> {
    return this.auth.authState.pipe(map(user => user ? user.email : null));
  }
  
  async logout(){
    try {
      const e = await this.auth.signOut();
      console.log("User Is Logged Out");
    } catch {
      console.log("got some error fetching Users...");
    }
  }
}
