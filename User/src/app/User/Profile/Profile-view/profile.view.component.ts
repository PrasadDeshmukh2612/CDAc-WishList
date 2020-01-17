import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileService } from '../profile.service';
import * as toastr from "toastr";

@Component({
    selector: 'user-profile-view',
    templateUrl: 'profile.view.component.html',
    styleUrls:['profile.view.component.css']
})

export class ProfileViewComponent implements OnInit {
    customers:any[]
    constructor(private router: Router,private profileService:UserProfileService) { 
        this.showUserDetails()
    }

    customer_id=sessionStorage['customer_id']

    showUserDetails(){
        console.log(this.customer_id);
        this.profileService.getCustomerById(this.customer_id)
        .subscribe(response=>{
            if(response['status']=='success'){
                this.customers=response['data']
                console.log(this.customers)
            }
            else{
                toastr.error('error')
            }
        })
    }
    
    ngOnInit() { }
}