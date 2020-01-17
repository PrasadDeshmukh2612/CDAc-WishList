import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot, Router } from '@angular/router';


@Injectable()
export class AdminService implements CanActivate {
    
  

    url='http://localhost:5000/admin'
    
    constructor(private http: HttpClient,private router:Router) { }

    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot) 
    {
        //checking if admin is already logged in or not
        if(sessionStorage['login_status']=='1'){
           // if(localStorage['login_status']=='1'){
            return true
        }

        this.router.navigate(['/admin-login'])
        return false
            }        


    loginAdmin(email:string,password:string){
        const body={
            email:email,
            password:password
        }
        return this.http.post(this.url+'/login',body)
    }
    registerAdmin(username:string,email:string,password:string){
        const body={
            username:username,
            email:email,
            password:password
        }
        return this.http.post(this.url+'/register',body)
    }
    

}