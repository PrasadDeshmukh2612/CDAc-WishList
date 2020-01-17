import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VendorService } from '../vendor.service';
import * as toastr from "toastr";

@Component({
    selector: 'app-vendor-update',
    templateUrl: 'vendor.update.component.html',
    styleUrls:['vendor.update.component.css']
})

export class VendorUpdateComponent implements OnInit {
    vendor_name : ''
    vendor_id : 0
    constructor(private router:Router, private service: VendorService,private activateRoute:ActivatedRoute)
     {

         this.vendor_id=this.activateRoute.snapshot.params['vendor_id']
        if(this.vendor_id){
           this.service.getVendorsById(this.vendor_id).subscribe(response=>{
                if(response['status'] = 'success')
                {
                    const vendors = response['data']
                    console.log(vendors)
                    // this.vendor_id = 
                   this.vendor_name = vendors[0].vendor_name
                   console.log(this.vendor_name)
                    
                }
            })  
        } 


      //  const id1 = this.activateRoute.snapshot.params['v']
      }

      updateVendor(id:number)
      {
          
          this.service.updateVendor(this.vendor_id, this.vendor_name).
          subscribe(response=>{
            if(response['status'] = 'success')
            {
                toastr.success('Updated')
                this.router.navigate['vendor-list']
            }
            else{
                toastr.error('error')
            }
        })   
      }

      
    ngOnInit() { }

}