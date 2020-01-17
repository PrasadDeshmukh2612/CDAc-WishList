import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Router } from '@angular/router';
import * as toastr from 'toastr'

@Component({
    selector: 'app-list-vendor',
    templateUrl: 'vendor.list.component.html',
    styleUrls:['vendor.list.component.css']
})

export class VendorListComponent implements OnInit {

    vendors=[]

    constructor(private vendorService:VendorService,private router:Router) { 
        this.loadAllVendors()
        }

    loadAllVendors(){
        this.vendorService.getVendors().subscribe(response=>{
            if(response['status']==['success']){
                this.vendors=response['data']
            }
            else{
                console.log(response['error'])
            }

        })

    }
    // updateVendor(id:number){
    //     alert('Edit'+id)
    //     this.router.navigate['/admin-login']
    // }

    ngOnInit() { }

    deleteVendor(vendor_id:number){
        this.vendorService.deleteVendor(vendor_id).subscribe(response=>{
            if(response['status']=='success'){
                toastr.warning('Deleted')
                this.loadAllVendors()
                
            }
            else{
                console.log(response['error'])
            }
        })
    }
}