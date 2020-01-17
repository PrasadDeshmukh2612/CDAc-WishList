import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category.service';
import * as toastr from "toastr";


@Component({
    selector: 'app-category-update',
    templateUrl: 'update.category.component.html',
    styleUrls:['update.category.component.css']
})

export class CategoryUpdateComponent implements OnInit {
    category_name:''
    category_id:0
    constructor(private router:Router,private activatedRoute:ActivatedRoute,private categoryService:CategoryService) { //private??
        this.category_id=this.activatedRoute.snapshot.params['category_id']
       this.categoryService.getCategoryById(this.category_id).subscribe(response=>{
            if(response['status'] = 'success')
            {
                const categories = response['data']
                console.log(categories);
                this.category_id = this.category_id
                this.category_name = categories[0].category_name
                //console.log('this.vendor_name')
                
            }
        })   
    }

    ngOnInit() { }
    updateCategory(category_id:number){
        this.categoryService.updateCategory(this.category_id,this.category_name).subscribe(response=>{
            if(response['status'] = 'success')
            {
                toastr.success('Information Updated')
                this.router.navigate['/category-list']
            }
            else{
                toastr.error('error')
            }
        })   
        
    }
}