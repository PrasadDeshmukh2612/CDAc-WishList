import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import * as toastr from 'toastr'
import {Router} from '@angular/router'
@Component({
    selector: 'app-add-category',
    templateUrl: 'category.add.component.html',
    styleUrls:['category.add.component.css']
})

export class CategoryAddComponent implements OnInit {

    categories=[]
    image:any
  

    category_name:string
    category_id:number
    constructor(private categoryService:CategoryService,
        private router:Router) { 
        this.categoryService=categoryService
    }

    ngOnInit() { }
    onSelectFile(event){
        this.image=event.target.files[0]
    }

    addCategory(){
        this.categoryService
        .addCategory(this.category_id,this.category_name,this.image)
        .subscribe((response)=>{
            if(response['status']=='success'){
                toastr.success('Category Added!!!')
                this.router.navigate(['/category-list'])
            }
            else{
                console.log(response['error'])
            }

        })
        
    }
}