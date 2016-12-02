import { Component, OnInit }                from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { BoardService }                     from '../../services/board.service';
import { Location }                         from '@angular/common';

import { Board }                            from '../../board';

import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id + '',
  templateUrl: 'board-detail.component.html',
  styleUrls: ['board-detail.component.css']
})

export class BoardDetailComponent implements OnInit {

  board: Board;

  constructor(
    private boardService: BoardService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) =>
        this.boardService.getContent(+params['id'])
      ).subscribe(board => this.board = board);
  }

  goBack(): void {
    this.router.navigate(['api/board']);
  }

  delete(bd_id): void {
    this.boardService.deleteContent({
      bd_id: bd_id
    }).then(json => {
      if(json['affectedRows'] === 1) {
        this.router.navigate(['api/board']);
      } else {
        alert('error');
      }
    });
  }
}
