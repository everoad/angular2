import { Injectable }      from '@angular/core';
import { Http, Headers }   from '@angular/http';

import { Board }           from '../board';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BoardService {

  constructor(
    private http: Http
  ) { }

  getList(): Promise<Board[]> {
    return this.http.get('/api/board').toPromise()
      .then(res => res.json());
  }

  getContent(id: number): Promise<Board> {
    return this.http.get(`/api/board/${id}`).toPromise()
      .then(res => res.json());
  }

  addContent(board): Promise<Board> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/board', JSON.stringify(board), { headers: headers }).toPromise()
      .then(res => res.json());
  }

  deleteContent(board): Promise<JSON> {
    return this.http.delete(`/api/board/${board["bd_id"]}`).toPromise()
      .then(res => res.json());
  }

  updateContent(board: Board): Promise<Board> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(`/api/board/${board["bd_id"]}`, JSON.stringify(board), { headers: headers }).toPromise()
      .then(res => res.json());
  }

}
