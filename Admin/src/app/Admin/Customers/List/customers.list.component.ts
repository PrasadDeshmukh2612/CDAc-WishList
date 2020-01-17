import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import * as toastr from 'toastr'


@Component({
    selector: 'customer-list-admin',
    templateUrl: 'customers.list.component.html',
    styleUrls:['customers.list.component.css']
})

export class CustomerListComponent implements OnInit {
    customers=[]
    constructor(private customerService:CustomerService) {
        this.getCustomers()
     }

    getCustomers(){
        this.customerService.getCategory().subscribe(response=>{
            if(response['status']='success'){
                this.customers=response['data']
            }
            else{
                console.log(response['error'])
            }
        })

    }

    ngOnInit() { }
    deleteCustomer(category_id:number){
        this.customerService.deleteCustomer(category_id).subscribe(response=>{
            if(response['status']='success'){
            toastr.warning('Removed..')
            this.getCustomers()
            }
            else{
                console.log(response['error'])
            }
        })
    }
}