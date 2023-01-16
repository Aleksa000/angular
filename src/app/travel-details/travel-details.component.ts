import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Travel, travels } from '../travels';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.css']
})
export class TravelDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  addToCart(travel: Travel) {
    if (travel.quantity <= 0) {
      window.alert('Unfortunately there are no more seats!');
    } else {
      this.cartService.addToCart(travel);
      window.alert('Your trip has been successfully added to your cart!');
    }
  }

  ngOnInit(): void {
    // First get the travel id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const travelIdFromRoute = Number(routeParams.get('travelsId'));

  // Find the travel that correspond with the id provided in route.
  this.travel = travels.find(travel => travel.id === travelIdFromRoute);
  }

  travel: Travel|undefined;

}
