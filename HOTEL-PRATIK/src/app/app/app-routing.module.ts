import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../admin/admin/admin.component';
import { OwnerComponent } from '../owner/owner.component';
import { UserComponent } from '../user/user.component';
import { AdminsucessComponent } from '../admin/adminsucess/adminsucess.component';
import { OwnersucessComponent } from '../owner/ownersucess/ownersucess.component';
import { SIGNINComponent } from '../signin/signin.component';
import { SIGNUPComponent } from '../signup/signup.component';
import { HOMEPAGEComponent } from '../homepage/homepage.component';


const routes: Routes = [
  {path:'',component:HOMEPAGEComponent},
  {path:'admin',component:AdminComponent},
  {path:'owner',component:OwnerComponent},
  {path:'user',component:UserComponent},
  {path:'signin',component:SIGNINComponent},
  {path:'signup',component:SIGNUPComponent},

  {path:'admin',loadChildren:()=>import('../admin/admin/admin.component').then(m=>m.AdminComponent)},
  {path:'owner',loadChildren:()=>import('../owner/owner.component').then(m=>m.OwnerComponent)},
  {path:'user',loadChildren:()=>import('../user/user.component').then(m=>m.UserComponent)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
