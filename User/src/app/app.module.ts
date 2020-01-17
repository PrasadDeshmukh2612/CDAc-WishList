import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {RouterModule,Route} from '@angular/router';
import { UserLoginComponent } from './User/login/user.login.component';
import { UserRegisterComponent } from './User/register/user.register.component';
import { UserHomeComponent } from './User/HomePage/user.home.component';
import { UserService } from './User/user.service';
import { UserAboutusComponent } from './User/About-Us/user.about.component';
import { UserContactUsComponent } from './User/Contact-us/user.contact.component';
// import {ProductDetailsComponent} from './User/Product/details/product.details.component';
// import {ProductsService} from './User/Product/products.service'
import { ProductService } from './User/Product/product.service';
import { SearchResultComponent } from './User/SearchResult/searchResult.product.component';
import { Ng2SearchPipeModule } from "ng2-search-filter";
import {CartService} from './User/Cart/cart.service'
import { UserProfileService } from './User/Profile/profile.service';
import { ProfileViewComponent } from './User/Profile/Profile-view/profile.view.component';
import { ProfileEditComponent } from './User/Profile/Profile-Edit/profile.edit.component';
import { from } from 'rxjs';
import { SearchProductComponent } from './User/Product/Product_Search/search.component';
import { ProductDescriptionComponent } from './User/Product/Product-Description/product.description.component';
import { CartComponent } from './User/Cart/UserCart/cart.component';



const routes:Route[]=[
  {path:'user-login',component:UserLoginComponent},
  {path:'user-register',component:UserRegisterComponent},
  {path:'user-home',component:UserHomeComponent},
  {path:'user-aboutUs',component:UserAboutusComponent},
  {path:'user-contactUs',component:UserContactUsComponent},
  {path:'user-search',component:SearchProductComponent},
  {path:'search-result',component:SearchResultComponent},
  {path:'user-profile',component:ProfileViewComponent},
  {path:'user-profile-edit',component:ProfileEditComponent},
  {path:'product-details',component:ProductDescriptionComponent},
  {path:'user-cart',component:CartComponent}

]

@NgModule({
  declarations: [
    AppComponent,

    UserLoginComponent,
    UserRegisterComponent,
    UserHomeComponent,
    UserAboutusComponent,
    UserContactUsComponent,
    SearchProductComponent,
    SearchResultComponent,
    ProfileViewComponent,
    ProfileEditComponent,
    ProductDescriptionComponent,
    CartComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    Ng2SearchPipeModule
  ],
  providers: [
    UserService,
    ProductService,
    CartService,
    UserProfileService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
