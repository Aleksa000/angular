import { Injectable } from '@angular/core';
import { Travel } from './travels';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Travel[] = [];

  addToCart(travel: Travel) {
    this.items.push(travel);
    console.log(this.items);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

}