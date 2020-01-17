import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'user-search-product',
    templateUrl: 'search.component.html',
    styleUrls:['search.component.css']
})

export class SearchProductComponent implements OnInit {

    product: any

    cart_id=0

    product_id=0

    customer_id=0

    product_name=''

    price=0
    products = []
    cart=[]
    name:string
    constructor(private service: ProductService,private activatedRoute: ActivatedRoute, private router: Router) 
    {
        //automatically display the searched items
        // this.onSearch()
        const product_id = activatedRoute.snapshot.queryParams['product_id']
        if(product_id){
            this.service.getProductDetails(product_id)
            .subscribe(response => {
                if (response['status'] == 'success') {
                  this.product = response['data']
                }
              })
        }
    }

   



    onSearch()
    {
        this.service.getProduct()
        .subscribe(response => {
            if(response['status'] == 'success')
            {
                    this.products = response['data']
                    console.log(response['data`']);
                    
                
            }
            else{
                console.log(response['error']);
                //alert("Error")
                
            }

        });
    
       
    }


    // onAddToCart(){
    //     this.service.addToCart(this.cart_id,this.product_id,this.customer_id,this.product_name,this.price)
    //     .subscribe(response=>{
    //         if(response['status']=='success'){
    //             this.cart=response['data']
    //             console.log(response['data'])
    //         }
    //         else{
    //             console.log(response['error']);

    //         }
    //     })
    // }

    onAddToCart(id: number)
    {
        alert(id)
    }


    ngOnInit() { }

    onProductSelect(id: number) {
        sessionStorage['id'] = id
        this.router.navigate(['/product-details'])
      }
}