import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RecoverpasswordComponent } from './components/recoverpassword/recoverpassword.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {path: '', redirectTo:'login', pathMatch: 'full'},
  {path:"login", component : LoginComponent},
  {path:"register", component : RegisterComponent},
  {path:"recoverpsw", component : RecoverpasswordComponent},
  {path:"home", component : HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
