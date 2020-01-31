import { LoginFormComponent } from './login-form/login-form.component';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
