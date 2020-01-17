import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
    selector: 'app-delete-product',
    templateUrl: 'product.delete.component.html',
    styleUrls:['product.delete.component.css']
})

export class ProductDeleteComponent implements OnInit {
   // product_id=0
    constructor(private productService:ProductService) { 
    }

    ngOnInit() { }

    

}