import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorService } from '../vendor.service';
import * as toastr from 'toastr';

@Component({
    selector: 'app-vendor-add',
    templateUrl: 'vendor.add.component.html',
    styleUrls:['vendor.add.component.css']
})

export class VendorAddComponent implements OnInit {
    vendors=[]
    image:any

vendor_name=''
vendor_id=0
    constructor(private router:Router,
        private vendorService:VendorService) { }

    ngOnInit() { }

    onSelectFile(event){
        this.image=event.target.files[0]
    }

    addVendor(){
        this.vendorService.addVendors(this.vendor_id,this.vendor_name,this.image).subscribe(response=>{
            if(response['status']=='success'){
                toastr.success('Vendor Added To The List')
                this.router.navigate(['/vendor-list'])
            }
            else{
                console.log(response['error'])
            }
        })
    }

   
    deleteVendor(){
        this.vendorService.deleteVendor(this.vendor_id).subscribe(response=>{
            if(response['status']=='success'){
                toastr.success('Deleted')
                //this.router.navigate(['/vendor-list'])
            }
            else{
                console.log(response['error'])
            }
        })
    }
}