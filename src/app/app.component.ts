import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { cartItem } from './cartItem.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cartItems: cartItem[] = [];
  cartFrom: FormGroup;

  constructor() {}

  ngOnInit() {
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
    this.cartItems.push(
      new cartItem(
        new Date(),
        this.cartFrom.get('name').value,
        this.cartFrom.get('price').value,
        this.cartFrom.get('amount').value
      )
    );
    this.cartFrom.reset();
  }
}
