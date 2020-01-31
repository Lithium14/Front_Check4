import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {  }

  ngOnInit() {  }

  onSubmit() {

  }
}
