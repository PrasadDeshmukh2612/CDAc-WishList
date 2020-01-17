import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VendorService {

    url='http://localhost:5000/vendor'
    constructor(private http:HttpClient) { }


    getVendors(){
        return this.http.get(this.url)
    }
    
    addVendors(vendor_id:number,vendor_name:string,file:any){
         const body=new FormData()
         body.append('vendor_id',''+vendor_id)
         body.append('vendor_name',vendor_name)
         body.append('image',file)
        // const body={
        //     vendor_name:vendor_name,
        //     image:file
        // }

        return this.http.post(this.url,body)

    }
    deleteVendor(vendor_id:number){
        return this.http.delete(this.url+'/'+vendor_id)
    }

    updateVendor(vendor_id:number,  vendor_name : string){
        const body={
            vendor_name:vendor_name
        }
        return this.http.put(this.url+'/update/'+vendor_id, body)
    }
    getVendorsById(vendor_id:number){
        return this.http.get(this.url + '/'+vendor_id)
    }
}