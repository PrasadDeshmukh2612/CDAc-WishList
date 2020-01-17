import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import * as toastr from 'toastr'

@Component({
    selector: 'app-list-category',
    templateUrl: 'category.list.component.html',
    styleUrls:['category.list.component.css']
})

export class CategoryListComponent implements OnInit {
    categories=[]
    
    constructor(private categoryService:CategoryService) {
    this.getCategory()      
    }

    ngOnInit() { }

    getCategory(){
        this.categoryService.getCategory().subscribe(response=>{
            if(response['status']='success'){
                this.categories=response['data']
            }
            else{
                console.log(response['error'])
            }
        })

    }
    deleteCategory(category_id:number){
        this.categoryService.deleteCategory(category_id).subscribe(response=>{
            if(response['status']='success'){
            toastr.warning('Removed..')
            this.getCategory()
            }
            else{
                console.log(response['error'])
            }
        })
    }
    
}