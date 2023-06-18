import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  /**
   * FormGroup : when we want to store multiple controls, under one group is called Form Group
   * FormControl: define a control in form group
   * 1. 1st param of  FormControl is default value
   * 2. 2nd param is used to set the validation
   * 
   * Validators : predefined class which contains list of validators
   */
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    pwd: new FormControl(null, [Validators.required, Validators.minLength(6)])
  })

  handleLogin() {
    console.log(this.loginForm.controls.email.hasError('required'))
    // valid: means check that all the validations is passed or not
    console.log(this.loginForm.valid)
    if (this.loginForm.valid) {
      // success
      // get the value from form group we have to user value property
      console.log(this.loginForm.value)
    }
    else {
      // show the error
      // alert('Invalid form value')
      // manually touch & dirty the fields
      this.loginForm.controls.email.markAllAsTouched();
      this.loginForm.controls.email.markAsDirty();

      this.loginForm.controls.pwd.markAllAsTouched();
      this.loginForm.controls.pwd.markAsDirty();
    }

  }

}
