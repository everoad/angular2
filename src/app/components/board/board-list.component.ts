import { Component, OnInit }   from '@angular/core';

import { Board }                from '../../board';
import { BoardService }         from '../../services/board.service';

@Component({
  moduleId: module.id + '',
  selector: 'board-list',
  templateUrl: 'board-list.component.html'
})


export class BoardListComponent implements OnInit {

  boards: Board[] = [];

  constructor(
    private boardService: BoardService
  ) { }

  ngOnInit(): void {
    this.boardService.getList()
      .then(boards => this.boards = boards);
  }

}
