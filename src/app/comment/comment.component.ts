import { Component, OnInit, ViewChild} from "@angular/core";
import { Travel, travels } from '../travels';
import { MatPaginator } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.css']
  })

  export class CommentComponent implements OnInit{

    travels = travels;
    pageSlice = this.travels.slice(0,8);
    selected = '';
    
    onPageChange(event: PageEvent){
      const startIndex = event.pageIndex * event.pageSize;
      let endIndex = startIndex + event.pageSize;
      if ( endIndex > this.travels.length){
        endIndex = this.travels.length;
      }
      this.pageSlice = this.travels.slice(startIndex, endIndex);
    }
  
    @ViewChild(MatPaginator) paginator: MatPaginator;
  
    constructor(
      private route: ActivatedRoute,
      private cartService: CartService
    ) { }
  
    ngOnInit(): void {
    //uzimamo proizvod  id iz trenutne rute.stanje rute u odredjenom trenutku
    const routeParams = this.route.snapshot.paramMap;
    const travelIdFromRoute = Number(routeParams.get('travelId'));
  
    // uzimamo proizvod sa odgovarajucim id iz rute.
    this.travel = travels.find(travel => travel.id === travelIdFromRoute);
    }
    upvote(id: number) {
      travels.forEach(element => {
        if (element.id == id) {
          element.positive++;
          window.alert("Your vote has been registered.");
        }
      });
     } 
  
    downvote(id: number) {
      travels.forEach(element => {
        if (element.id == id) {
          element.negative++;
          window.alert("Your vote has been registered.");
        }
      });
    }
    
    travel: Travel|undefined;
  }