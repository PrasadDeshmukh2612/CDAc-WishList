import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import * as toastr from 'toastr'
import {Router} from '@angular/router'


@Component({
    selector: 'app-user-register',
    templateUrl: 'user.register.component.html',
    styleUrls:['user.register.component.css']
})

export class UserRegisterComponent implements OnInit {
    customer_name=''
    email=''
    area=''
    street=''
    contact=''
    city=''
    pin=''
    state=''
    country=''
    password=''
    constructor(private registerUser:UserService,private router:Router) { }

    ngOnInit() { }
    onRegister(){
        this.registerUser.registerUser(this.customer_name,this.email,this.area,this.street,this.contact,this.city,this.pin,this.state,this.country,this.password).subscribe(response=>{
            if(response['status']=='success'){
              // this.customers=response['data'] 
               toastr.success('Registered Successfully')
               this.router.navigate['/user-login']
               //navigate to next page after successful login
            }
            else{
                toastr.warning(response['error'])
            }
        })
    }
}