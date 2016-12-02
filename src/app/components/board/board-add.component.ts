import { Component }        from '@angular/core';
import { Location }         from '@angular/common';

import { Router }           from '@angular/router';

import { BoardService }      from '../../services/board.service';

@Component({
  moduleId: module.id + '',
  templateUrl: 'board-add.component.html',
  styleUrls: ['board-add.component.css']
})

export class BoardAddComponent {
  bd_title: string;
  bd_content: string;

  constructor(
    private location : Location,
    private boardService: BoardService,
    private router: Router
  ) { }

  goBack(): void {
    this.location.back();
  }

  write(event): void {
    event.preventDefault();
    var board = {
      bd_title: this.bd_title,
      bd_content: this.bd_content
    }
    this.boardService.addContent(board)
    .then(json => {
      if(json) {
        this.router.navigate([`api/board/${json["insertId"]}`]);
      } else {
        alert('error');
      }
    })

  }
}
