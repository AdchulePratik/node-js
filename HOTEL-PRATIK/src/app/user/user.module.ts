import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SharedService } from '../shared.service';




@NgModule({
  declarations: [
    UserComponent
  ],

  imports: [
    CommonModule,
    UserRoutingModule,
    SharedService
  ]
})
export class UserModule { }
