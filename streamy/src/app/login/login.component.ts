import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public router: Router,
  ) { }

  ngOnInit(): void {
  }

  // * Login form
  login: FormGroup = new FormGroup ({
    email: new FormControl('', [Validators.required, Validators.email]),                        // ? Form Group -- EMAIL
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),              // ? Form Group -- PASSWORD
  })

  // * Setting up the hidden field for password form
  hide = true;
  get emailInput() { return this.login.get('email'); }
  get passwordInput() { return this.login.get('password'); }

  // * Error matcher for incorrect email
  matcher = new MyErrorStateMatcher();

  // * Placeholder for the login route to be worked in later
    // TODO: Login Route
    // TODO: Login verification via JWT / DBA pass
    // TODO: Create a login service
    // TODO fuck this is a lot of work for a simple thing
  loginUser() {
    this.router.navigate(['/home']);
  }

  goHome() {
    this.router.navigate(['/home']);
  };

}
