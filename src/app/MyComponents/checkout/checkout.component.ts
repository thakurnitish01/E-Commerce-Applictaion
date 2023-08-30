import { Component, OnInit } from '@angular/core';
import { ShopingService } from 'src/app/Shared/shoping.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
cartItems : any[] = []
  constructor(private cartServices : ShopingService) {
   }

   ngOnInit(): void {
    this.cartServices.getcart().subscribe(
      (items: any) => {
        this.cartItems = items;
      },
      (error: any) => {
        console.log('Error fetching cart items:', error);
      }
    );
  }
  
  clearAllCart() {
    this.cartServices.clearCart().subscribe(
      () => {
        console.log('Cart cleared successfully');
      },
      error => {
        console.error('Error clearing cart:', error);
      }
    );
  }
  
    clearCart(id : string)
    {
      this.cartServices.removeCart(id).subscribe(()=>{
        console.log(`item is cleared ${id} from the cart`)
        this.cartServices.getcart().subscribe((items : any)=>{
          this.cartItems = items;
        })
      })
    }
    calculateTotalPrice(): number {
      return this.cartItems.reduce((total, item) => total + item.price, 0);
    }
    myOrders(){
      const items = this.cartServices.cart
      this.cartServices.myOrders(items).subscribe(()=>{
        console.log("sucessfully added")
      }),
      (error : any)=>{console.log("got some error..!",error)}
    }
}
