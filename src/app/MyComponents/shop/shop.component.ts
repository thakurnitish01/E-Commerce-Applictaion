import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ShopingService } from 'src/app/Shared/shoping.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
   products !: any[] ;
   filteredProducts : any[] = []
   searchQuery : string = '';

  constructor(private shoping : ShopingService, private router: Router) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts()
  {
    this.shoping.getProducts().subscribe(
      (products : any[])=>
      {
        console.log("Products:",products)
        this.products = products;
        this.onSearchInput()
      },
      (error)=>
      {
        console.log(error)
      }
    )
  }



  productDetails(id : string)
  {
    this.router.navigate(['/shop',id])
  }

  onSearchInput(): void {
    if (this.searchQuery) {
      this.filteredProducts = this.products.filter((product: any) => {
        if (
          product &&
          (product.category?.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            product.title?.toLowerCase().includes(this.searchQuery.toLowerCase()))
        ) {
          return true;
        }
        return false;
      });
    } else {
      this.filteredProducts = this.products;
    }
  }
  
  performSearch(): void {
    if (this.searchQuery.trim() !== '') {
      this.shoping.search(this.searchQuery).subscribe(
        (results: any[]) => {
          this.filteredProducts = results; 
        },
        error => {
          console.error('Error fetching search results:', error);
        }
      );
    } else {
      this.filteredProducts = this.products;
    }
  }
  
  
}

