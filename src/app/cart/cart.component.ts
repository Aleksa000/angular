import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();

  getTotal(){
    var total = 0;
    for(var i=0; i< this.items.length;i++){
      total = total + this.items[i].price;
      total = total * this.items[i].qtn;
    }
    return total;
  }
 
  getHistory(){
  }

  checkout(){
    var total = 0;
    if(this.items.length != 0)
      alert('Have a nice trip see you again!');
    else{
      
      alert('Your cart is empty!');
    }

      for(var i=0; i< this.items.length;i++){
        this.items.length = 0;
      }
  }


  deleteItem(indexOfelement){
    this.items.splice(indexOfelement, 1); 
    console.log(this.items); 
  }

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }
  
}
