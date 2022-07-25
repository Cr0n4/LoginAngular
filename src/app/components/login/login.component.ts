import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }
  constructor(private authService: AuthService){}

  ngOnInit(): void {
  }

  login() {
    if(this.user.email == ''){
      alert('Por favor pon un email');
      return;
    }

    if(this.user.password == ''){
      alert('Por favor pon una contraseña');
      return;
    }

    this.authService.login(this.user.email,this.user.password);
    this.user.email = '';
    this.user.password = '';
  }

  logout(){
    this.authService.logout();
  }

  loginGoogle() {
    this.authService.loginGoogle();
  }

}
