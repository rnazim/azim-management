import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'user',
    component: UserPageComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'product',
    component: ProductListComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
