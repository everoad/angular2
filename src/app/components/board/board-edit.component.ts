import { Component, OnInit, Input }   from '@angular/core';
import { BoardService }   from '../../services/board.service';
import { Board }        from '../../board';
import { ActivatedRoute, Params, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id + '',
  templateUrl: 'board-edit.component.html',
  styleUrls: ['board-edit.component.css']
})

export class BoardEditComponent implements OnInit {

  board: Board;

  constructor(
    private boardService: BoardService,
    private route: ActivatedRoute,
    private router: Router
  ){ }

  ngOnInit(): void {
    this.route.params.switchMap((p: Params) =>
      this.boardService.getContent(+p['id']))
    .subscribe(board => this.board = board);
  }

  edit(board: Board):void {
    this.boardService.updateContent(board)
      .then(json => {
        if(json['bd_id']) {
          this.router.navigate(['api/board', json['bd_id']]);
        } else {
          alert('error');
        }
      })
  }
}
