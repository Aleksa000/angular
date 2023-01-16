import { Component, OnInit } from '@angular/core';
import { Travel, travels } from '../travels';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent implements OnInit {
  travels = travels;

  constructor(
    private route: ActivatedRoute,

  ) { }
  sediste(){
    window.alert("This seats are sold");
  }
  ngOnInit(): void {
    // First get the travel id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const travelIdFromRoute = Number(routeParams.get('travelId'));

  // Find the travel that correspond with the id provided in route.
  this.travel = travels.find(travel => travel.id === travelIdFromRoute);
  }

  travel: Travel|undefined;
}
