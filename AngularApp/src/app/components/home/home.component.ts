import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
//import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private nav: NavbarService
    //private authService:AuthService
  ) { }

  ngOnInit() {
    this.nav.hide();
    //console.log("home "+this.authService.loggedIn());
  }

}
