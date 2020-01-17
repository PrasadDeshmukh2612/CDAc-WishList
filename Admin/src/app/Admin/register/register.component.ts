import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import * as toastr from 'toastr'
import { Router } from '@angular/router';


@Component({
    selector: 'app-admin-register',
    templateUrl: './register.component.html',
    styleUrls:['./register.component.css']
})

export class adminRegisterComponent implements OnInit {
    username:''
    email:''
    password:''

    constructor(private adminService:AdminService,
        private router:Router) { }

    ngOnInit() { }

    onRegister(){
        if(this.username.length==0){
            toastr.error('Please Enter Valid UserName..')
        }
        else if(this.email.length==0){
            toastr.error('Please Enter Valid Email..')
        }
        else if(this.password.length==0){
            toastr.error('Please Enter Valid Password')
        }
        else{
            this.adminService.registerAdmin(this.username,this.email,this.password)
            .subscribe(response=>{
                if(response['status']=='success'){
                    toastr.success('Admin Registerd Succesfully..!!!')
                    //navigate router
                    this.router.navigate['/admin-login']
                }
                else{
                    toastr.error(response['error'])
                }
            })
        }
    }

}