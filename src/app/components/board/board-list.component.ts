import { Component, OnInit }   from '@angular/core';

import { Board }                from '../../board';
import { BoardService }         from '../../services/board.service';

@Component({
  moduleId: module.id + '',
  templateUrl: 'board-list.component.html',
  styleUrls: ['board-list.component.css']
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
