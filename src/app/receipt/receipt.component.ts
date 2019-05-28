import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs-compat/add/operator/filter';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent implements OnInit {
  receipt;
  constructor(private route: ActivatedRoute) { }

  public extra; // The extra variable for the extra test condition message.

  // Once the page is loaded the method will execute
  ngOnInit() {
    //Here we receive the transfered parameters from the order page
    this.route.queryParams.subscribe(params => {
      this.receipt = params;
    });

    const finalPrice = this.receipt.totalPrice;

    //The conditions that have to be met, for test cases to work
    if(finalPrice >= 20 && finalPrice <= 29){
      this.extra = "Free delivery is included!";
    }else if(finalPrice >= 30 && finalPrice <= 39){
      this.extra = "Free delivery is included! \n Free Soda is included!";
    }else if(finalPrice >= 40){
      this.extra = "Free delivery is included! \n Free Soda is included! \n Free dipping souce included";
    }else{
      this.extra = "No special extras!"
    }   
  }
}




