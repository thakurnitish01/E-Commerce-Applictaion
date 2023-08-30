import { Component,Input,Output, OnInit, EventEmitter } from '@angular/core';
import { ShopingService } from 'src/app/Shared/shoping.service';

declare var Razorpay : any ;


@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css'],
  // standalone: true,
})
export class PayComponent implements OnInit {
  @Input() totalAmount: number = 0;
  details : any ;

   constructor(private shopingService : ShopingService) { }

  ngOnInit(): void {
  }
  
  payNow(){
    const RazorpayOptions = {
      description : 'Sample Razorpay Demo',
      currency : 'INR',
      amount : this.totalAmount * 100,
      name : 'Nitish',
      key : 'rzp_test_23mPabKxJUVyH2',
      image : "https://lh3.googleusercontent.com/NFHyJvxk1le22pFhu_3PbzWkwi1o_CeNyXo-srF0sVTVfwhjMhus-y5vt0k15NoXSrujTCx4BpR--nTJhgqXpGDGrG6gCwMhbb3_lb4A755_34nr1Rfb",
      prefill : {
        name : 'Nitish Thakur',
        email: 'nitish@gmail.com',
        phone : 9805855248,
      },
      theme : {
        color  : "#223790",
      },
      modal : {
        ondismiss : ()=>{
          console.log("dismissed");          
        }
      }
    } 
  
  
    
    

    const successCallback = (paymentId : any)=>{
      console.log(paymentId);
        }
    const failureCallback = (e : any)=>{
      console.log(e);

      }

    Razorpay.open(RazorpayOptions, successCallback, failureCallback)
  }

  getDetils( productId  : any){
    this.shopingService.getProductDetails(productId).subscribe(
      (details)=>
      {
        console.log("the details is: ", details)
        this.details = details
      },(error : any)=>
      {
        console.log("error")
      }
    )
  }

}
