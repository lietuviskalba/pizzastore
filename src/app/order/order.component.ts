import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private router: Router) {}

  public pizzaName = null;
  public size = null;
  public ammount = null;
  public email = null;
  public coupon = null;

  onSubmit() {

   const pizzaName = this.pizzaName.split(' ')[0]; // Split the pizza name from its price
   const pizzaPrice  = Number(this.pizzaName.split(' ')[1]);
   const pizzaSize  = this.size.split(' ')[0]; // Split the pizza size from its price
   const pizzaSizeValue  = Number(this.size.split(' ')[1]);
   const pizzaAmmount  = Number(this.ammount);
   // ### Get the news letter email as a paramater
   const email = this.email;
   let newsLetterSub = "Subscription skipped";
   // ### Get the coupon code
   const coupon = this.coupon;
   let couponRedeem = "No coupon reedemed!";
   let coupDiscount = null;
   let newPrice = null;

   const totalPrice = (pizzaPrice + pizzaSizeValue) * pizzaAmmount; // Formula that calculates the total price

   // ### if the news input is not empty added the succuly subbed to newsletter
   if (email != null){
     newsLetterSub = "You have subscribed to the pizza news letter!";
   }
   // ### if the coupon matches, send the % that the coupon saves
   if(coupon != null){
     if(coupon === "20OFF"){
       coupDiscount =  Number(this.coupon.slice(0,2));
       couponRedeem = "Coupon applied!";
       newPrice = totalPrice * ((100 - coupDiscount) / 100);
     }
   }
   
   // Bundle up the data we got from the Form and send it to the receipt component
   this.router.navigate(['/receipt'], { queryParams: { 
      pizzaPrice: pizzaPrice,
      pizzaAmmount: pizzaAmmount, 
      totalPrice: totalPrice, 
      pizzaName: pizzaName, 
      pizzaSize: pizzaSize,
      newsLetterSub: newsLetterSub,
      couponRedeem: couponRedeem,
      couponDiscount: coupDiscount,
      newPrice: newPrice
    }});
 }

  ngOnInit() {
  }

}
