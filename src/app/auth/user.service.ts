import { Injectable } from '@angular/core';

export interface User {
  cvs: number;
  card: number;
  email: string;
  password: string;
  address?: string;
  id: number;
  date: Date;
}

@Injectable()
export class UserService {

  currentUser: User = UserService.dummyUserList[1];


  static dummyUserList: Array<User> = [
    {
      id: 100,
      email: "aleksa@gmail.com",
      password: "12345678",
      date: new Date("2022-06-13 11:58"),
      card: 4315678762349187,
      cvs: 741
    },
    {
      id: 200,
      email: "slobodan2@gmail.com",
      password: "12345678",
      date: new Date("2022-05-13 14:58"),
      card: 9076152781902341,
      cvs: 885
    },
    {
      id: 300,
      email: "singidunum3@gmail.com",
      password: "12345678",
      date: new Date("2022-05-12 18:58"),
      card: 1872540174931234,
      cvs: 324
    }];

  /* pronalazimo korisnika na osnovu id polja iz navedenog niza dummyUserList */
  getUserId(id: number): User {
    var userFound: User;

    UserService.dummyUserList.forEach(user => {
      if (user.id == id) {
        userFound = user;
      }
    });

    this.currentUser = userFound;
    return userFound;
  }

  /* dohvatamo kor. ime iz interfejsa korisnika */
  getUserName(user: User): string {
    return user.email;
  }

  getUser(userEmail: string): User {
    this.currentUser = UserService.dummyUserList.find(userToFind => userToFind.email == userEmail);
    return this.currentUser;
  }

  /* provera da li je sifra dobra (u poredjenju sa email adresom) */
  isPassOk(userEmail: string, password: string): boolean {
    return UserService.dummyUserList.find(userToFind =>
      (userToFind.email == userEmail && userToFind.password == password)) != undefined;
  }

  /* registr. korisnika  */
  registerUser(email: string, password: string, date: Date): User {
    var maxId: number = 0;
    UserService.dummyUserList.forEach(user => {
      if (maxId < user.id) {
        maxId = user.id;
      }
    });

    var id = ++maxId;
    var user: User = {
      id, email, password, date,
      cvs: 0,
      card: 0
    };

    UserService.dummyUserList.push(user);

    this.currentUser = user;
    console.log(user);
    return user;
  }
}