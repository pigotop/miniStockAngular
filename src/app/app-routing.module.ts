import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  { path:'', component: LoginRegisterComponent },
  { path:'dashboard', component: DashboardComponent },
  { path:'login', component: LoginRegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
