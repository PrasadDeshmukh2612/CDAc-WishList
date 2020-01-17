import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartService {
    url='http://localhost:5000/cart'
    constructor(private httpClient: HttpClient) { }

    
    getCartItem(customer_id){
        return this.httpClient.get(this.url+'/'+customer_id)

    }
}