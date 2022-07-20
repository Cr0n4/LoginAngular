import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService){

  }

  LoginEmail(){
    console.log(this.usuario);
    const { email, password } = this.usuario;
    this.authService.login(email, password).then(res => {
      console.log("Se registro: ", res);
    });
  }

  LoginGoogle(){
    const { email, password } = this.usuario;
    this.authService.loginWithGoogle(email, password).then(res => {
      console.log("Se registro: ", res);
    });
  }
  UserActual(){
    this.authService.UserLogin().subscribe(res =>{
      console.log(res?.email);
    });
  }

  logout(){
    this.authService.logout();
  }


  ngOnInit(): void {
  }

}
