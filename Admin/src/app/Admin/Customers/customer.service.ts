import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot, Router } from '@angular/router';


@Injectable()
export class CustomerService  {
    url='http://localhost:5000/customers'
    constructor(private http: HttpClient) { }

    getCategory(){
        return this.http.get(this.url)
    }
    deleteCustomer(customer_id:number){
        return this.http.delete(this.url+'/'+customer_id)
    }
}