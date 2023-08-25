import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
})
export class FormComponent implements OnInit {
  constructor() {}

  forbiddenUserNames = ['Aman', 'Kumar'];

  signUpForm: FormGroup;

  ngOnInit() {
    this.signUpForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        this.forbiddenNames.bind(this),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      contact: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
      ]),
      address: new FormGroup({
        street: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        state: new FormControl('', [Validators.required]),
        pincode: new FormControl('', Validators.required),
      }),
    });
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUserNames.includes(control.value)) {
      return { ['userNameForbidden']: true };
    }
    return null;
  }

  get User() {
    return this.signUpForm.get('name');
  }

  get Email() {
    return this.signUpForm.get('email');
  }

  get Contact() {
    return this.signUpForm.get('contact');
  }

  get Street() {
    return this.signUpForm.get('address.street');
  }

  get City() {
    return this.signUpForm.get('address.city');
  }

  get State() {
    return this.signUpForm.get('address.state');
  }

  get Pincode() {
    return this.signUpForm.get('address.pincode');
  }

  formSubmit() {
    console.log(this.signUpForm.value);
  }
}
