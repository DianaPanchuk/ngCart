import { Injectable } from '@angular/core';
import { CartItem } from './cartItem.model';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable()
export class StoreService {
  private cartItems: CartItem[] = [];
  private cartItemRetrieved = false;

  constructor(private storage: LocalStorageService) { }

  retrieveCartItems() {
    const data = this.storage.retrieve('items');
    if (data) {
      data.map((item) => {
        this.cartItems.push(
          new CartItem(
            new Date(item.id),
            item.name,
            item.price,
            item.amount
          )
        );
      });
    }
    this.cartItemRetrieved = true;
  }
  getCartItems() {
    if (!this.cartItemRetrieved) {
      this.retrieveCartItems();
    }
    return this.cartItems;
  }
  saveCartItems() {
    this.storage.store('items', this.cartItems);
  }
  updateCart(newCartItem: CartItem) {
    this.cartItems.push(newCartItem);
    this.saveCartItems();
  }
}
