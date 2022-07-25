import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-recoverpassword',
  templateUrl: './recoverpassword.component.html',
  styleUrls: ['./recoverpassword.component.css']
})
export class RecoverpasswordComponent implements OnInit {

  user = {
    email: ''
  }

  constructor(private authService: AuthService){ }

  ngOnInit(): void {
  }

  forgotPassword() {
    this.authService.forgotPassword(this.user.email);
    this.user.email = '';

  }

}
