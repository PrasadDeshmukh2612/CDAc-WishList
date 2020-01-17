import { Component, OnInit } from '@angular/core';
import * as toastr from 'toastr'
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-login',
    templateUrl: 'user.login.component.html',
    styleUrls:['user.login.component.css']
})

export class UserLoginComponent implements OnInit {
    
    email=''
    password=''
    constructor(private userService:UserService,private router:Router) { }

    ngOnInit() { }

    onUserLogin(){
        if(this.email.length==0){
            toastr.error('Please Enter Valid Mail!!!')
        }
        else if(this.password.length==0){
            toastr.error('Please Enter Valid Password')
        }
        else{
            this.userService.loginUser(this.email,this.password).subscribe(response=>{
                if(response['status']=='success'){
                    toastr.success('Welcome')
                    sessionStorage['login_status']='1'
                    sessionStorage['customer_id']=response['data']['customer_id']
                    sessionStorage['customer_name']=response['data']['customer_name']
                    this.router.navigate(['']);
                    
                }
                else{
                    // toastr.danger('Error While LogIn..!!')
                    toastr.error(response['error'])

                }
            })
        }
    }
}