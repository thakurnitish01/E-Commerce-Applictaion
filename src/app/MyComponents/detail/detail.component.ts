import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/Shared/auth.service';
import { ShopingService } from 'src/app/Shared/shoping.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  details : any;
  userId  !: string ;
  constructor(private shoping : ShopingService,
              private route : ActivatedRoute,
              private router : Router,
              private auth : AuthService) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.getDetils(productId);
    }
  }


  getDetils( productId  : any){
    this.shoping.getProductDetails(productId).subscribe(
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

  addToCart(product : any){
    const uid = this.auth.getCurrentUserId().subscribe((e)=>{
      console.log("userid: ",e);
    })
    if(!uid){
      console.log("user is not loggedin");
      return;
    }
    this.shoping.addToCart(product).subscribe((e)=>{
      console.log("Item is added to cart..",e);
      alert("Item is added to cart...!");
      this.router.navigate(['/checkout']);
    }),(error : any)=>{
      console.log("Got some error..",error)
    }
  }
  
  
}
