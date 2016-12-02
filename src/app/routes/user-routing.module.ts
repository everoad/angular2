import { NgModule }   from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserLoginComponent }  from '../components/user/user-login.component';
import { UserJoinComponent }  from '../components/user/user-join.component';


const routes: Routes = [
  {
    path: 'api/user/login',
    component: UserLoginComponent
  },
  {
    path: 'api/user/join',
    component: UserJoinComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule {

}
