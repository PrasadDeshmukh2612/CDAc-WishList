import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserProfileService } from '../profile.service';
import * as toastr from "toastr";


@Component({
    selector: 'user-profile-edit',
    templateUrl: 'profile.edit.component.html',
    styleUrls:['profile.edit.component.css']
})

export class ProfileEditComponent implements OnInit {
    customer_id =0
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


    constructor(private router:Router,private profileService:UserProfileService) {
        this.customer_id=sessionStorage['customer_id']
        console.log(this.customer_id);

        if(this.customer_id){
            this.profileService.getCustomerById(this.customer_id)
            .subscribe(response=>{
                if(response['status'] = 'success')
                {
                    const customers = response['data']
                    this.customer_name=customers[0].customer_name
                    this.email=customers[0].email
                    this.contact=customers[0].contact
                    this.area=customers[0].area
                    this.street=customers[0].street
                    this.city=customers[0].city
                    this.state=customers[0].state
                    this.country=customers[0].country
                    this.pin=customers[0].pin
                   // this.password=customers[0].password
                    
                }
            })  
        }
        
     }

     onUpdateProfile(customer_id:number){
         this.profileService.updateProfile(this.customer_id,this.customer_name,this.email,this.area,this.street,this.contact,this.city,this.pin,this.state,this.country,this.password)
        . subscribe(response=>{
            if(response['status'] = 'success')
            {
                toastr.success('Updated')
                this.router.navigate['user-profile']
            }
            else{
                toastr.error('error')
            }
        })   
     }

    ngOnInit() { }
}