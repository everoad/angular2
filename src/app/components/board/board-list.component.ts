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
  index: number = 1;

  constructor(
    private boardService: BoardService
  ) { }

  ngOnInit(): void {
    this.boardService.getList(this.index)
      .then(boards => boards.map(board => this.boards.push(board)));
  }

  onScroll(): void {
    this.boardService.getList(++this.index)
      .then(boards => boards.map(board => this.boards.push(board)));
  }

}
