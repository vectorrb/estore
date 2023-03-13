import { Injectable } from '@angular/core';
import { UserRegistration } from '../Models/UserRegistration';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  addUser(user: UserRegistration){
    let users = [];
    if(localStorage.getItem('Users')){
      users = JSON.parse(localStorage.getItem('Users'));
      users = Object.keys(users).map(key => users[key]);
      console.log(users);
      users = [user,...users];
      console.log(users);
    } else{
      users = [user];
    }
    localStorage.setItem('Users', JSON.stringify(users));
  }
}
