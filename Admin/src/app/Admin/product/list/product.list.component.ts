import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

import * as toastr from 'toastr'

@Component({
    selector: 'app-admin-product-list',
    templateUrl: 'product.list.component.html',
    styleUrls:['product.list.component.css']
})

export class ProductListComponent implements OnInit {
    products=[]
    constructor(private productService:ProductService) {
        this.getProducts()
        
     }

    ngOnInit() { }

    getProducts(){
        this.productService.listProduct().subscribe(response=>{
            if(response['status']=='success'){
                this.products=response['data']
                
            }else{
                console.log(response['error'])
            }
        })
    
    }

    deleteProduct(product_id:number){
        this.productService.deleteProduct(product_id).subscribe(response=>{
            if(response['status']=='success'){
                toastr.warning('Deleted')
                this.getProducts()
                
            }
            else{
                console.log(response['error'])
            }
        })
    }
   
}