import { Component, OnInit,  ViewChild, AfterViewInit } from '@angular/core';
import { Travel, travels } from '../travels';
import { MatPaginator } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css']
})

export class TravelListComponent {
  travels = travels;
  pageSlice = this.travels.slice(0,10);
  selected = '';
  
  selectCategory() {
    this.pageSlice=[]
    for(var i=0; i< this.travels.length; i++) {
      if (this.travels[i].category == this.selected) {
        this.pageSlice.push(travels[i]);
      } 
      if (this.selected == undefined) {
        this.pageSlice = travels;
      }
    }
  }
  selectPriceless() {
    this.pageSlice=[]
    for(var i=0; i< this.travels.length; i++) {
      if (this.travels[i].priceless == this.selected) {
        this.pageSlice.push(travels[i]);
      } 
      if (this.selected == undefined) {
        this.pageSlice = travels;
      }
    }
  }

  searchText:string = '';

  onSearchTextEntered(searchValue:string){
    this.searchText = searchValue;
    // console.log( this.searchText);
  }

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

  addToCart(travel: Travel) {
    if (travel.quantity <= 0) {
      window.alert('Unfortunately there are no more seats!');
    } else {
      this.cartService.addToCart(travel);
      window.alert('Your trip has been successfully added to your cart!');
    }
  }

  ngOnInit(): void {
  //uzimamo proizvod  id iz trenutne rute.stanje rute u odredjenom trenutku
  const routeParams = this.route.snapshot.paramMap;
  const travelIdFromRoute = Number(routeParams.get('travelsId'));

  // uzimamo proizvod sa odgovarajucim id iz rute.
  this.travel = travels.find(travel => travel.id === travelIdFromRoute);
  }
  
  travel: Travel|undefined;

}
