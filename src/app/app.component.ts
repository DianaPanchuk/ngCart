import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartItem } from './cartItem.model';
import { StoreService } from './store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cartItems: CartItem[] = [];
  cartFrom: FormGroup;
  filterString = '';

  constructor(private store: StoreService) {}

  ngOnInit() {
    this.cartItems = this.store.getCartItems();
    this.initCartForm();
  }

  initCartForm() {
    this.cartFrom = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, Validators.required),
      price: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^\d+(?:[.,]\d+)*$/)]
      ),
      amount: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[0-9]\d*$/)]
      )
    });
  }

  onSubmit() {
    const newCartItem = new CartItem(
        new Date(),
        this.cartFrom.get('name').value,
        this.cartFrom.get('price').value,
        this.cartFrom.get('amount').value
    );
    this.store.updateCart(newCartItem);
    this.cartFrom.reset();
  }
  onClearFilter() {
    this.filterString = '';
  }
}
