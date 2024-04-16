import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { SIGNINComponent } from '../signin/signin.component';
import { SIGNUPComponent } from '../signup/signup.component';


@NgModule({
  declarations: [],
  imports: [
    AdminRoutingModule
  ]
})
export class AdminModule { }
