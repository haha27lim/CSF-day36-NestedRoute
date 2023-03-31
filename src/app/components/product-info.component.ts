import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit, OnDestroy {
  // Declare a variable to store the product info ID
  productInfoId = "";
  // Declare a variable to store the subscription to the route params
  param$!:  Subscription;
  
  // Inject the Activated Route service in the constructor
  constructor(private activatedRoute : ActivatedRoute){

  }

  // Implement the OnInit interface
  ngOnInit(): void {
      // Subscribe to the route params and update the productInfoId variable
      this.param$ = this.activatedRoute.params.subscribe(
        (params)=>{
          this.productInfoId = params['pid'];
        }
      )
  }

  // Implement the OnDestroy interface
  ngOnDestroy(): void {
      // Unsubscribe from the param$ observable to prevent memory leaks
      this.param$.unsubscribe();
  }
}
