import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopingService } from 'src/app/Shared/shoping.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  myOrders : any ;
  trackingId : any;
  constructor( private orders : ShopingService, private router : Router) { }


  ngOnInit(): void {
    this.getOrders();
    this.trackingNo();
  }
  getOrders(){
    this.orders.getcart().subscribe((resp)=>{
      console.log("Here is My-Orders..!");
      this.myOrders = resp;
    }),
    (error: any)=>{
      console.log("got some error: ", error)
    }
  }

  productDetails(id : string)
  {
    this.router.navigate(['/shop',id])
  }
  trackingNo(){
    const id = uuidv4();
    this.trackingId = id
  }
}
