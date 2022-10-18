import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'authentication'
  },
  {
    path: 'authentication',
    loadChildren: () => import('@app-test/features/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'root',
    loadChildren: () => import('@app-test/features/root/root.module').then(m => m.RootModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
