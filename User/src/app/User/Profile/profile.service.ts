import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot, Router } from '@angular/router';


@Injectable({providedIn: 'root'})
export class UserProfileService {
    url='http://localhost:5000/customers'
    constructor(private http:HttpClient,private router:Router) { }


    getCustomerById(customer_id:number){
        return this.http.get(this.url+'/'+customer_id)
    }

    updateProfile(customer_id:number,customer_name:string,email:string,area:string,street:string,contact:string,city:string,pin:string,state:string,country:string,password:string){
        const body={
            customer_name:customer_name,email:email,area:area,
            street:street,contact:contact,city:city,pin:pin,state:state,country:country,password:password
        }
        return this.http.put(this.url+'/update/'+customer_id,body)
    }


    updateVendor(vendor_id:number,  vendor_name : string){
        const body={
            vendor_name:vendor_name
        }
        return this.http.put(this.url+'/update/'+vendor_id, body)
    }
    
}