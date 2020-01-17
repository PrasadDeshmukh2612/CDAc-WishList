import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'
import { ActivatedRoute } from '@angular/router';
import * as toastr from 'toastr'


@Component({
    selector: 'product-description',
    templateUrl: 'product.description.component.html',
    styleUrls:['product.description.component.css']
})

export class ProductDescriptionComponent implements OnInit {
    product: any
    cart:any
    product_id: 0
    cart_id:0
    customer_id:0
    constructor(private productService: ProductService,
        private activatedRoute: ActivatedRoute) {
            this.customer_id=sessionStorage['customer_id']
            this.product_id = sessionStorage['id']
            //  this.product_id = activatedRoute.snapshot.queryParams['product_id']
            if(this.product_id){
                this.productService.getProductDetails(this.product_id)
                .subscribe(response => {
                    if (response['status'] == 'success') {

                      this.product = response['data']
                      console.log(this.product)

                    }
                  })
            }
         }


        onAddToCart(product_name,price){
        this.productService.onAddToCart(this.product_id,this.customer_id,product_name,price)
        .subscribe(response=>{
            if(response['status']=='success'){
                this.cart=response['data']
                console.log('cart called')
                console.log(this.cart)
                toastr.success('Item Added To Cart')

            }
            else{
                console.log(response['error']);

            }
        })
    }
    ngOnInit() { }
}