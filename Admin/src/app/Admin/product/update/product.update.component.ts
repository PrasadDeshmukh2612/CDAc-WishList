import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as toastr from 'toastr'
import { CategoryService } from '../../category/category.service';
import { VendorService } from '../../vendor/vendor.service';


@Component({
    selector: 'app-product-update',
    templateUrl: 'product.update.component.html',
    styleUrls:['product.update.component.css']
})

export class ProductUpdateComponent implements OnInit {

    vendors=[]
    categories=[]
    vendor_details:number
    Category:number

    product_id:0
    vendor_id:number
        category_id:number
        product_name:''
        description:''
        price:number
        quantity:number
    constructor(private productService:ProductService,private router:Router,private activateRoute:ActivatedRoute,
        private categoryService:CategoryService,private vendorService:VendorService) {
            
            this.categoryService
            .getCategory().subscribe(response=>{
                if(response['status']=='success'){
                    this.categories=response['data']
                    // this.Category=this.categories[0].category_id
                  //  this.Category=this.categories[0].category_name
                }
                else{
                    console.log(response['error'])
                }
            })
            this.vendorService.getVendors().subscribe(response=>{
                if(response['status']=='success'){
                    this.vendors=response['data']
                    // this.vendor_details=this.vendors[0].vendor_id
                  this.vendor_details=this.vendors[0].vendor_name
                }
                else{
                    console.log(response['error'])
                }
            })
            
        this.product_id=this.activateRoute.snapshot.params['product_id']
        this.productService.getProductsById(this.product_id).subscribe(response=>{
            if(response['status'] = 'success')
            {
                const products = response['data']
                console.log(products);
                this.product_id = this.product_id
                this.vendor_id=products.vendor_id,
                this.category_id=products.category_id,
                this.product_name=products[0].product_name,
                this.description=products[0].description,
                this.price=products[0].price,
                this.quantity=products[0].quantity
                console.log(this.category_id)
                
            }
        }) 
         
    }

    updateProduct(id:number)
    {
        
        this.productService.updateProduct(this.product_id,this.vendor_id,this.category_id, this.product_name,this.description,this.price,this.quantity).
        subscribe(response=>{
          if(response['status'] = 'success')
          {
              toastr.success('ADDED')
              
              this.router.navigate['/product-list']
          }
          else{
              toastr.error('error')
          }
      })   
    }

    ngOnInit() { }
}