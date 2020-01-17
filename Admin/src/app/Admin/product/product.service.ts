import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {

    url='http://localhost:5000/Products'
    constructor(private http:HttpClient) { }

    addProduct(
        product_id:number,
        vendor_id:number,
        category_id:number,
        product_name:string,
        description:string,
        price:number,
        quantity:number,file:any){
             const body=new FormData()
             body.append('product_id',''+product_id)
             body.append('vendor_id',''+vendor_id)
             body.append('category_id',''+category_id)
             body.append('product_name',product_name)
             body.append('description',description)
             body.append('price',''+price)
             body.append('quantity','' +quantity)
             body.append('images',file)
       
            return this.http.post(this.url,body)
    }

    listProduct(){
        return this.http.get(this.url)
    }

    deleteProduct(product_id:number){
        return this.http.delete(this.url+'/'+product_id)
    }

    updateProduct(product_id:number,vendor_id:number,category_id:number,product_name:string,description:string,price:number,quantity:number){
        const body={

            vendor_id:vendor_id,
            category_id:category_id,
            product_name:product_name,
            description:description,
            price:price,
            quantity:quantity
                    
                }
                return this.http.put(this.url+'/update/'+product_id,body)
    }

    getProductsById(product_id:number){
        return this.http.get(this.url +'/'+product_id)
    }
}