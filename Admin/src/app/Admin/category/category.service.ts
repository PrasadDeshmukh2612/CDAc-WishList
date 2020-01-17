import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoryService {

    url='http://localhost:5000/category'

    constructor(private http:HttpClient) { }
 
    getCategory(){
        return this.http.get(this.url)
    }

    addCategory(category_id:number,category_name:string,file:any){
        const body=new FormData()
        
        body.append('category_id',''+category_id)
        body.append('category_name',category_name)
        body.append('image',file)


        return this.http.post(this.url,body)
    }

    deleteCategory(category_id:number){
        return this.http.delete(this.url+'/'+category_id)
    }
    updateCategory(category_id:number,category_name:string){
        const body={
            category_name:category_name
        }
        return this.http.put(this.url+'/update/'+category_id,body)
    }
    getCategoryById(category_id:number){
        return this.http.get(this.url+'/'+category_id)
    }
}   