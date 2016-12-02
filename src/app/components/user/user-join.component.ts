import { Component }   from '@angular/core';

import { UserService }  from '../../services/user.service';
import { Router }       from '@angular/router';

@Component({
  moduleId: module.id + '',
  templateUrl: 'user-join.component.html',
  styleUrls: ['user-join.component.html']
})

export class UserJoinComponent {
  user_email: string;
  user_pwd: string;
  user_pwd_cf: string;
  pwd_check: string = '';

  constructor(
    private userService: UserService,
    private router: Router
  ) {  }

  join(event) {
    event.preventDefault();
    if(this.check()) {
      var user = {
        user_email: this.user_email,
        user_pwd: this.user_pwd
      };
      this.userService.join(user).then(json => {
        if(json['insertId']) {
          this.router.navigate(['api/user/login']);
        } else {
          alert('fail');
        }
      });
    }
  }

  check(): boolean {
    var a = this.user_pwd;
    var b = this.user_pwd_cf;
    if(a == '' || b == '') {
      this.pwd_check = '다시 확인해 주세요.';
      return false;
    } else if(a !== b) {
      this.pwd_check = '다시 확인해 주세요.';
      return false;
    } else {
      this.pwd_check = '일치합니다.';
      return true;
    }
  }
}
