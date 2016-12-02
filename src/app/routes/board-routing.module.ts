import { NgModule }   from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoardListComponent}          from '../components/board/board-list.component';
import { BoardDetailComponent }       from '../components/board/board-detail.component';
import { BoardAddComponent }          from '../components/board/board-add.component';
import { BoardEditComponent }         from '../components/board/board-edit.component';

const routes: Routes = [
  {
    path: 'api/board',
    component: BoardListComponent
  },
  {
    path: 'api/board/new',
    component: BoardAddComponent
  },
  {
    path: 'api/board/:id/edit',
    component: BoardEditComponent
  },
  {
    path: 'api/board/:id',
    component: BoardDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class BoardRoutingModule {

}
