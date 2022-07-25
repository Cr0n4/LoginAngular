import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider } from '@firebase/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getUserLogged() {
    throw new Error('Method not implemented.');
  }

  constructor(private afauth: AngularFireAuth, private router: Router) { }



  //login
  login(email : string, password: string){
    this.afauth.signInWithEmailAndPassword(email, password).then( () => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['/home']);
    }, err => {
      console.log("error en login: ", err);
      this.router.navigate(['/login'])
    });
  }

  //register
  register(email : string, password : string) {
    this.afauth.createUserWithEmailAndPassword(email, password).then(() => {
      console.log("se registro correctamente");
      alert("Tu cuenta se registro correctamente");
      this.router.navigate(['/login']);
    }, err => {
      console.log("error en register: ", err);
      this.router.navigate(['/register'])
    })
  }

  //forgotpasswrd
  forgotPassword(email : string){
    this.afauth.sendPasswordResetEmail(email).then(() => {
      this.router.navigate(['/login']);
      console.log("se envio tu mail");
    }, err => {
      console.log("error enviar mail a restaurar contrasenia", err);
      this.router.navigate(['/login'])
    })
  }

  //logout
  logout(){
    this.afauth.signOut().then( () => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err => {
      console.log(err.message);
    })
  }

  loginGoogle(){
    return this.afauth.signInWithPopup(new GoogleAuthProvider).then(res => {
      this.router.navigate(['/home']);
      localStorage.setItem('token',JSON.stringify(res.user?.uid));
    }, err => {
      console.log(err.message);
    })
  }

  actualUser(){
    return this.afauth.authState;
  }

}
