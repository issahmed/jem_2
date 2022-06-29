import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailConfirmationComponent } from './auth/email-confirmation/email-confirmation.component';
import { ResetComponent } from './auth/reset/reset.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AdminComponent } from './dashbord/admin/admin.component';


const routes: Routes = [
  {path :'admin' , component : AdminComponent},
    
    {path:'signin',component:SigninComponent},
    {path:'signup',component:SignupComponent},
    {path:'reset',component:ResetComponent },
    {path :'reset/confirmation' , component : EmailConfirmationComponent},
    {path:'',redirectTo:'signin',pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
