import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth) { }


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


  logout(){
    this.afauth.signOut();
  }

  async forgotPassword(email : string){
    try {
      return await this.afauth.sendPasswordResetEmail(email);
    } catch  (err) {
      console.log("error en enviar email",);
      return null;
    }
  }
  /*
  forgotPassword(email : string){
    this.afauth.sendPasswordResetEmail(email).then(() => {
    }, err => {
      console.log("error en enviarEmail")
    })
  }*/

}
