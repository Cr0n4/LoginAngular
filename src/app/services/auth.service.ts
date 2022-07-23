import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

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


/*
  async login(email: string, password: string){
    try {
      return await this.afauth.signInWithEmailAndPassword(email, password);
    } catch  (err) {
      console.log("error en login: ", err);
      return null;
    }
  }

  async loginWithGoogle(email: string, password: string){
    try {
      return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch  (err) {
      console.log("error en login con google: ", err);
      return null;
    }
  }

  async register(email: string, password: string){
    try {
      return await this.afauth.createUserWithEmailAndPassword(email, password);
    } catch  (err) {
      console.log("error en login: ", err);
      return null;
    }
  }

  UserLogin(){
    return this.afauth.authState;
  }

  logout(){
    this.afauth.signOut();
  }

  async forgotPassword(email : string){
    try {
      return await this.afauth.sendPasswordResetEmail(email);
    } catch  (err) {
      console.log("error en enviar email");
      return null;
    }
  }*/

}
