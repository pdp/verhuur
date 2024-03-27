import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false} // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
