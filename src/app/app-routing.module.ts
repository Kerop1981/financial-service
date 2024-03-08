import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pges/login/login.component';
import { SignupComponent } from './pges/signup/signup.component';
import { ProfileComponent } from './pges/profile/profile.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    title:'Home',
    canActivate: [authGuard()]
  },
  {
    path:'Login',
    component:LoginComponent,
  },
  {
    path:'signup',
    component:SignupComponent,
  },
  {
    path:'profie',
    component:ProfileComponent,
    canActivate: [authGuard()]
  },
  {
  path:'**',
  component:HomeComponent,
  redirectTo:'',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
