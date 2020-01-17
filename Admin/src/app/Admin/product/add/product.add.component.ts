import { Component, OnInit } from '@angular/core';
import * as toastr from 'toastr';
import { CategoryService } from '../../category/category.service';
import { VendorService } from '../../vendor/vendor.service';
import{Router} from '@angular/router'
import { ProductService } from '../product.service';

@Component({
    selector: 'app-admin-product-add',
    templateUrl: 'product.add.component.html',
    styleUrls:['product.add.component.css']
})

export class ProductAddComponent implements OnInit {
   vendors=[]
   categories=[]
   products=[]
   image:any

   product_id:number
   vendor_id:number
   Category:number
   product_name:''
   description:''
   price:0
   quantity:0   

    constructor(private productService:ProductService,
        private categoryService:CategoryService,
        private vendorService:VendorService ,
        private router:Router) {
          //drop down mdhe id la value sathi  
            this.categoryService
            .getCategory().subscribe(response=>{
                if(response['status']=='success'){
                    this.categories=response['data']
                   this.Category=this.categories[0].category_id
                //   this.Category=this.categories[0].category_name
                }
                else{
                    console.log(response['error'])
                }
            })
            this.vendorService.getVendors().subscribe(response=>{
                if(response['status']=='success'){
                    this.vendors=response['data']
                    this.vendor_id=this.vendors[0].vendor_id
                    // this.vendor_id=this.vendors[0].vendor_name
                }
                else{
                    console.log(response['error'])
                }
            })
         }


        
    ngOnInit() { }

    onSelectFile(event){
        this.image=event.target.files[0]
    }

    onAddProduct(){

        this.productService.addProduct(this.product_id,this.vendor_id,this.Category,
            this.product_name,this.description,this.price,this.quantity,this.image)
            .subscribe(response=>{
                if(response['status']=='success'){
                    toastr.success('Product Added Succesfully!!')
                    this.router.navigate(['product-list'])
                    
                }
                else{
                    console.log(response['error'])
                }

        })
    }
}