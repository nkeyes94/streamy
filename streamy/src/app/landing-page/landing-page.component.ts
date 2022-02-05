import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(
    public router: Router,                           // ? Constructor for our router
  ) 
  
  { }

  ngOnInit(): void {
  }

  // * Go login
  goLogin() {
    this.router.navigate(['/login']);
  }

  // * Go register
  goRegister() {
    this.router.navigate(['/register']);
  }

}
