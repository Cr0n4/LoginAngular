import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire/compat';
import { NavbarComponent } from './components/navbar/navbar.component';

const firebaseConfig = {
  apiKey: "AIzaSyDod0OzvyytYvUl2ZSEsa6bf4uxxCpEV4g",
  authDomain: "loginnice.firebaseapp.com",
  projectId: "loginnice",
  storageBucket: "loginnice.appspot.com",
  messagingSenderId: "200969953059",
  appId: "1:200969953059:web:3e435fdd1faad006147696",
  measurementId: "G-GYGT4H9TTG"
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
