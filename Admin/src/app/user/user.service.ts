import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

    url='http://localhost:5000/customers'
    url1='http://localhost:5000/user'
    constructor(private http:HttpClient) { }

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
    registerUser(customer_name:string,email:string,contact:string,password:string){
        const body={
            customer_name:customer_name,
            email:email,
            contact:contact,
            password:password
        }
        return this.http.post(this.url1+'/register',body)
    }

}