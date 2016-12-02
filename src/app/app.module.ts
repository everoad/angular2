import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { UserLoginComponent }   from './components/user/user-login.component';
import { UserJoinComponent }    from './components/user/user-join.component';

import { BoardListComponent }   from './components/board/board-list.component';
import { BoardDetailComponent } from './components/board/board-detail.component';
import { BoardAddComponent }    from './components/board/board-add.component';
import { BoardEditComponent }   from './components/board/board-edit.component';

import { UserService }          from './services/user.service';
import { BoardService }         from './services/board.service';


@NgModule({
  declarations: [
    AppComponent,
    BoardListComponent,
    BoardDetailComponent,
    BoardAddComponent,
    BoardEditComponent,
    UserLoginComponent,
    UserJoinComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    BoardService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
