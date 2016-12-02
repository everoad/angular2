import { Component }   from '@angular/core';

import { UserService }  from '../../services/user.service';
import { User }         from '../../user';

import { Location }     from '@angular/common';

@Component({
  moduleId: module.id + '',
  templateUrl: 'user-login.component.html',
  styleUrls: ['user-login.component.css']
})

export class UserLoginComponent {
  user_email: string;
  user_pwd: string;
  message: string = '';

  constructor(
    private userSerivce: UserService,
    private location: Location
  ) { }

  login(event) {
    event.preventDefault();
    var user = {
      user_email: this.user_email,
      user_pwd: this.user_pwd
    };
    this.userSerivce.login(user).then(json => {
      if(json['insertId'] === 1) {
        this.location.go('/api/board');
      } else {
        this.message = '이메일 혹은 비밀번호를 다시 확인해주세요.';
      }
    });
  }
}
