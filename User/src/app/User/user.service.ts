import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class UserService {

    url='http://localhost:5000/customers'
    url1='http://localhost:5000/user'
    constructor(private http:HttpClient,private router:Router) { }

    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
        if(sessionStorage['login_status']=='1'){
            return true
        }
        return false;
    }
    getUser(){
        return this.http.get(this.url)
    }

    loginUser(email:string,password:string){
        const body={
            email:email,
            password:password
        }
        return this.http.post(this.url1+'/login',body)
    }
    registerUser(customer_name:string,email:string,area:string,street:string,contact:string,city:string,pin:string,state:string,country:string,password:string){
        const body={
            customer_name:customer_name,
            email:email,
            area:area,
            street:street,
            contact:contact,
            city:city,
            pin:pin,
            state:state,
            country:country,
            password:password
        }
        return this.http.post(this.url1+'/register',body)
    }

}