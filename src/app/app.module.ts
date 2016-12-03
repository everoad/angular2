import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { AppRoutingModule }     from './app-routing.module';

import { LocationStrategy,
         HashLocationStrategy } from '@angular/common';

import { AppComponent }         from './app.component';
import { UserLoginComponent }   from './components/user/user-login.component';
import { UserJoinComponent }    from './components/user/user-join.component';

import { BoardListComponent }   from './components/board/board-list.component';
import { BoardDetailComponent } from './components/board/board-detail.component';
import { BoardAddComponent }    from './components/board/board-add.component';
import { BoardEditComponent }   from './components/board/board-edit.component';

import { SidebarComponent }     from './components/template/sidebar.component';
import { HeaderComponent }      from './components/template/header.component';
import { FooterComponent }      from './components/template/footer.component';

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
    UserJoinComponent,

    SidebarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InfiniteScrollModule
  ],
  providers: [
    UserService,
    BoardService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
