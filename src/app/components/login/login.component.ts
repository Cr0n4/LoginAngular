import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /*user = {
    email: '',
    password: ''
  }*/
  email : string = '';
  password : string = '';
  constructor(private authService: AuthService){}

  ngOnInit(): void {
  }

  login() {
    if(this.email == ''){
      alert('Por favor pon un email');
      return;
    }

    if(this.password == ''){
      alert('Por favor pon una contraseña');
      return;
    }

    this.authService.login(this.email,this.password);
    this.email = '';
    this.password = '';
  }

  logout(){
    this.authService.logout();
  }


  /*
  LoginEmail(){
    if(this.usuario.email == ''){
      alert('Por favor pon un email');
      return;
    }

    if(this.usuario.password == ''){
      alert('Por favor pon una contraseña');
      return;
    }

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
  */


}
