import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {adminLoginComponent} from './Admin/login/login.component'
import {adminRegisterComponent} from './Admin/register/register.component'
import {ProductAddComponent} from './Admin/product/add/product.add.component'


import { AdminService } from './Admin/admin.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { VendorService } from './Admin/vendor/vendor.service';
import { CategoryService } from './Admin/category/category.service';
import { ProductListComponent } from './Admin/product/list/product.list.component';
import {RouterModule,Route} from '@angular/router'
import { VendorListComponent } from './Admin/vendor/list/vendor.list.component';
import { VendorAddComponent } from './Admin/vendor/add/vendor.add.component';
import {VendorUpdateComponent} from './Admin/vendor/update/vendor.update.component'
import { CategoryListComponent } from './Admin/category/list/category.list.component';
import { CategoryAddComponent } from './Admin/category/add/category.add.component';
import {UserListComponent} from './user/list/user.list.component';
import {UserService} from './user/user.service'
import { UserLoginComponent } from './user/login/user.login.component';
import { UserRegisterComponent } from './user/register/user.register.component';
import { UserHomeComponent } from './user/HomePage/user.home.component';
import { ProductService } from './Admin/product/product.service';
import { ProductDeleteComponent } from './Admin/product/delete/product.delete.component';
import { ProductUpdateComponent } from './Admin/product/update/product.update.component';
import { CategoryUpdateComponent } from './Admin/category/update/update.category.component';
import { AdminHomeComponent } from './Admin/Home/admin.home.component';
import { CustomerListComponent } from './Admin/Customers/List/customers.list.component';
import { CustomerService } from './Admin/Customers/customer.service';



const routes:Route[]=[
  //default
  //{path:'',component:},

  {path:'admin-login',component:adminLoginComponent},
  {path:'admin-register',component:adminRegisterComponent},
  {path:'admin-home',component:AdminHomeComponent},

  {path:'vendor-add',component:VendorAddComponent,canActivate:[AdminService]},
  {path:'vendor-list',component:VendorListComponent},
  {path:"vendor-update/:vendor_id",component:VendorUpdateComponent},
  {path:'category-list',component:CategoryListComponent},
  {path:'category-add',component:CategoryAddComponent},
  {path:"category-update/:category_id",component:CategoryUpdateComponent},

  {path:'product-list',component:ProductListComponent},
  {path:'product-add',component:ProductAddComponent},
  {path:"product-update/:product_id",component:ProductUpdateComponent},

  {path:"customer-list",component:CustomerListComponent},

  {path:'user-login',component:UserLoginComponent},
  {path:'user-register',component:UserRegisterComponent},
  {path:'user-home',component:UserHomeComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    adminLoginComponent,
    adminRegisterComponent,
    AdminHomeComponent,


    ProductAddComponent,
    ProductListComponent,
    ProductDeleteComponent,
    ProductUpdateComponent, 

  
    VendorListComponent,
    VendorAddComponent,
    VendorUpdateComponent,

    CategoryListComponent,
    CategoryAddComponent,
    CategoryUpdateComponent,

    CustomerListComponent,

   

    UserListComponent,
    UserLoginComponent,
    UserRegisterComponent,
    UserHomeComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AdminService,
    VendorService,
    CategoryService,
    ProductService,
    UserService,
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
