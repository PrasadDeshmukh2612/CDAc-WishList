import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import * as toastr from 'toastr'
import { Router } from '@angular/router';

@Component({
    selector: 'app-admin-login',
    templateUrl: './login.component.html',
    styleUrls:['./login.component.css']
})

export class adminLoginComponent implements OnInit {
    email=''
    password=''
    rememberme=false
    constructor(private adminService: AdminService,
        private router:Router) { }

    ngOnInit() { }

    onLogin(){
        if(this.email.length==0){
            toastr.error('Enter Valid Email')
        }
        else if(this.password.length==0){
            toastr.error('Enter Valid Password')
        }
        else{
            this.adminService
            .loginAdmin(this.email,this.password)
            .subscribe(response=>{
                if(response['status']=='success'){
                    toastr.success('Welcome!!')
                    console.log(this.rememberme)

                  sessionStorage['login_status']='1'
                  sessionStorage['username']=response['data']['username']

                    //localStorage['login_status']='1'
                  
                   // this.router.navigate(['/vendor-add'])

                   this.router.navigate(['/admin-home'])
                }
                else{
                    toastr.error(response['error'])
                }

            })
        }
    }
}