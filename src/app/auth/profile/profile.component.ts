import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isEditing: boolean = false;
  profileInput: User;
  


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public User: UserService) { }

  ngOnInit(): void {
    this.profileInput = {
      id: this.data.user.id,
      email: this.data.user.email,
      address: this.data.user.address,
      password: this.data.user.password,
      card: this.data.user.card,
      cvs: this.data.user.cvs,
      date: this.data.date
    }
  }

  finishEditing(form: NgForm){
    this.data.user.email = this.profileInput.email;
    this.data.user.password = this.profileInput.password;
    this.data.user.address = this.profileInput.address;
    this.data.user.card = this.profileInput.card;
    this.data.user.cvs = this.profileInput.cvs;

    UserService.dummyUserList.push(this.data.user);

    console.log(UserService.dummyUserList);
    console.log(this.data.user);
    window.alert('Your parameter is change successfully');
    this.isEditing = false;
  }

}
