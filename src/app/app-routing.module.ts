import { NgModule }                   from '@angular/core';

import { RouterModule, Routes }       from '@angular/router';

import { UserRoutingModule }          from './routes/user-routing.module';
import { BoardRoutingModule }         from './routes/board-routing.module';
//import { BoardComponent }             from './components/board/board.component';

@NgModule({
  imports: [BoardRoutingModule, UserRoutingModule],
  exports: [BoardRoutingModule, UserRoutingModule]
})

export class AppRoutingModule {

}
