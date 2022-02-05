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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    public router: Router,                         // ? Constructor for our router
  ) { }

  ngOnInit(): void {
  }

  // * Registration form
  registration: FormGroup = new FormGroup ({
    email: new FormControl('', [Validators.required, Validators.email]),                        // ? Form Group -- EMAIL
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),              // ? Form Group -- PASSWORD 1
    password2: new FormControl('', [Validators.required, Validators.minLength(6)]),              // ? Form Group -- PASSWORD 2
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),             // ? Form Group -- FIRST NAME  
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),              // ? Form Group -- LAST NAME
  })

  // * Setting up the hidden field for password form
  hide = true;
  get emailInput() { return this.registration.get('email'); }
  get passwordInput() { return this.registration.get('password'); }

  // * Error matcher for incorrect email
  matcher = new MyErrorStateMatcher();

  // * goHome function
  goHome() {
    this.router.navigate(['/home']);
  };

}
