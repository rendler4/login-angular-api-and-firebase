import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { CarrouselComponent } from './../../../UIComponents/carrousel/carrousel.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule if you need ngModel


@NgModule({
  declarations: [
    LoginComponent,
    CarrouselComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LoginModule { }
