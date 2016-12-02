import { Injectable }       from '@angular/core';
import { Http, Headers }    from '@angular/http';

import { User }   from '../user';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  constructor(
    private http: Http
  ) { }

  login(user): Promise<User> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/user/login', JSON.stringify(user), { headers: headers }).toPromise()
      .then(res => res.json());
  }

  join(user): Promise<JSON> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/user', JSON.stringify(user), { headers: headers }).toPromise()
      .then(res => res.json());
  }

  






  getUsers(): Promise<User[]> {
    return this.http.get('/api/user').toPromise()
      .then(res => res.json());
  }

  addUser(user: User): Promise<User> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/user', JSON.stringify(user), { headers: headers }).toPromise()
      .then(res => res.json());
  }

  deleteUser(id: number): Promise<JSON> {
    return this.http.delete(`/api/user/${id}`).toPromise().
      then(res => res.json());
  }

  updateUser(user: User): Promise<User> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(`/api/user/${user["id"]}`, JSON.stringify(user), { headers: headers }).toPromise()
      .then(res => res.json());
  }
}
