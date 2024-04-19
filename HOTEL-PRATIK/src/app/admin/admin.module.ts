import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { SIGNINComponent } from '../signin/signin.component';
import { SIGNUPComponent } from '../signup/signup.component';
import { AdminsucessComponent } from './adminsucess/adminsucess.component';
import { AdminComponent } from './admin/admin.component';
import { SharedService } from '../shared.service';




@NgModule({
  declarations: [
    AdminComponent,
    SIGNINComponent,
    SIGNUPComponent,
    AdminsucessComponent

  ],

  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedService


  ]
})
export class AdminModule { }
