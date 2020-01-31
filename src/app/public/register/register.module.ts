import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './register-form/register-form.component';


@NgModule({
  declarations: [
    RegisterComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
