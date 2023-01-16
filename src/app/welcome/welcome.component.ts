import { Component, OnInit } from '@angular/core';
import { travels } from '../travels';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  travels = travels;
  pageTrav = this.travels;
  pageTrav1 = this.travels;

  ngOnInit(){
    for (var i = this.travels.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.pageTrav1[i];
      this.pageTrav1[i] = this.pageTrav1[j];
      this.pageTrav1[j] = temp;
  }
    this.pageTrav=[]
    for(var i=0; i<3;i++){
      this.pageTrav.push(this.pageTrav1[i]);
    }
  }
  constructor() { }

  
    images = ['../../assets/images/13.jpg', '../../assets/images5.jpg', '../../assets/images6.jpg', '../../assets/images14.jpg'];

}
