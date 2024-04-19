import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminsucessComponent } from './adminsucess/adminsucess.component';
import { SIGNINComponent } from '../signin/signin.component';
import { SIGNUPComponent } from '../signup/signup.component';


const routes: Routes = [
  {path:'',component:AdminComponent},
  {path:'adminsucess',component:AdminsucessComponent},
  {path:'signin',component:SIGNINComponent},
  {path:'signup',component:SIGNUPComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
