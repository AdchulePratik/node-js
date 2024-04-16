import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HOMEPAGEComponent } from '../homepage/homepage.component';
import { SIGNINComponent } from '../signin/signin.component';
import { SIGNUPComponent } from '../signup/signup.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedService } from '../shared.service';
import { shareReplay } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    HOMEPAGEComponent,
    SIGNINComponent,
    SIGNUPComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    SharedService,

  ]
})
export class AppModule { }
