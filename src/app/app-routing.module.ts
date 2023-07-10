import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './MyComponent/users/users.component';
import { WinnersComponent } from './MyComponent/winners/winners.component';
import { ToppersComponent } from './MyComponent/toppers/toppers.component';

const routes: Routes = [
  {
    component:UsersComponent,
    path:''
  },
  {
    component:WinnersComponent,
    path:'winners'
  },
  {
    component:ToppersComponent,
    path:'toppers'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
