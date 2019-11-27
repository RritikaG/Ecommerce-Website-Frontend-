import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../app.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  constructor(private router: Router, private service: AppService) { }
  logout() {
    this.service.isLoggedIn(false);
    this.router.navigate(['userlogin']);
  }
  mycart() {
    if (this.service.checklogin()) {
      this.router.navigate(['user-cart']);
    }
  }

  ngOnInit(): void {
  }

}
