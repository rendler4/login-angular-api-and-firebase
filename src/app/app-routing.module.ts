import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./components/pages/auth/login/login.module').then(m => m.LoginModule) }, 
  { 
    path: 'home', 
    // loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule),
    component: HomeComponent,
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
