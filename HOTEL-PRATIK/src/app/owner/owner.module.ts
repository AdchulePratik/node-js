import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerComponent } from './owner.component';
import { SharedService } from '../shared.service';



@NgModule({
  declarations: [
    OwnerComponent

  ],

  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedService
  ]
})
export class OwnerModule { }
