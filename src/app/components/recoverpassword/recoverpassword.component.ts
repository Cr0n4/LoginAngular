import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-recoverpassword',
  templateUrl: './recoverpassword.component.html',
  styleUrls: ['./recoverpassword.component.css']
})
export class RecoverpasswordComponent implements OnInit {

  email: string = '';

  constructor(private authService: AuthService){

  }

  ngOnInit(): void {
  }

  forgotPassword() {
    this.authService.forgotPassword(this.email);
    this.email = '';
  }

}
