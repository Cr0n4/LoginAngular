import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user = {
    email : ''
  }


  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }

}
