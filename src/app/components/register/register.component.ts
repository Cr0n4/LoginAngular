import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {
    nombre: '',
    email: '',
    password: ''
  }

  constructor(private authService: AuthService){ }

  ngOnInit(): void {
  }

  register() {
    if(this.user.email == ''){
      alert('Por favor pon un email');
      return;
    }

    if(this.user.password == ''){
      alert('Por favor pon una contraseña');
      return;
    }

    this.authService.register(this.user.email,this.user.password);
    this.user.email = '';
    this.user.password = '';
  }


  /*
  registrar(){
    console.log(this.usuario);
    const { email, password } = this.usuario;
    this.authService.register(email, password).then(res => {
      console.log("Se registro: ", res);
    });
  }
*/


}
