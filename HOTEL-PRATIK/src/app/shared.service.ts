import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import {MatRadioModule} from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
declarations:[


],
imports:[
  CommonModule,
  MatButtonModule,
  MatRadioModule,
  MatIconModule,
  MatCheckboxModule,
  MatInputModule,
  MatSelectModule,
  FormsModule,
  ReactiveFormsModule,
  MatListModule,
  MatSnackBarModule,
  MatDialogModule


],
exports:[
  MatRadioModule,
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule,
  MatInputModule,
  MatSelectModule,
  ReactiveFormsModule,
  MatListModule,
  FormsModule,
  MatSnackBarModule,
  MatDialogModule
]


})
export class SharedService {

  constructor() { }
}
