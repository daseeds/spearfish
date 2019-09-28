import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  shippingCosts;
  checkoutForm;

  constructor(
     private cartService: CartService,
     private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.shippingCosts = this.cartService.getShippingPrices();

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });    
  }
  onSubmit(customerData) {
    // Process checkout data here
    
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}