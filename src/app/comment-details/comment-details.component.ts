import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Travel, travels} from '../travels';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  comment='Please comment about our company';
  postComment = [];

  post(){
  this.postComment.push(this.comment);
  this.comment="";
  window.alert('Thank you for your comment');
  }

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    // First get the product id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const travelIdFromRoute = Number(routeParams.get('travelId'));

  // Find the product that correspond with the id provided in route.
  this.travel = travels.find(travel => travel.id === travelIdFromRoute);
  }

  travel: Travel|undefined;

}
