import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ProductService {
    constructor(private httpClient: HttpClient) { }


    url = 'http://localhost:5000/Products'

    urlCart='http://localhost:5000/cart'

    onSearch(name: string) {
        const
            body = {
                name: name
            }       
             return this.httpClient.post(this.url + '/search', body)
    }

    getProduct()
    {
        return this.httpClient.get(this.url+'/search_product_asc')
    }


    onAddToCart(product_id:number,customer_id:number,product_name:string,price:number){
            console.log(product_name,price)
        const body={
             product_id:product_id,
             customer_id:customer_id,
             product_name:product_name,
             price:price
 
        } 
        return this.httpClient.post(this.urlCart+'/add_to_cart',body)
     }


     getProductDetails(product_id:number){
         return this.httpClient.get(this.url+'/details/'+product_id)
     }


}