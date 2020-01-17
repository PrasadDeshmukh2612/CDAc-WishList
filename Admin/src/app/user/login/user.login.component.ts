import { Component, OnInit } from '@angular/core';
import * as toastr from 'toastr'
import { UserService } from '../user.service';

@Component({
    selector: 'app-user-login',
    templateUrl: 'user.login.component.html',
    styleUrls:['user.login.component.css']
})

export class UserLoginComponent implements OnInit {
    
    email=''
    password=''
    constructor(private userService:UserService) { }

    ngOnInit() { }

    onUserLogin(){
        if(this.email.length==0){
            toastr.success('Please Enter Valid Mail!!!')
        }
        else if(this.password.length==0){
            toastr.warning('Please Enter Valid Password')
        }
        else{
            this.userService.loginUser(this.email,this.password).subscribe(response=>{
                if(response['status']='success'){
                    toastr.success('Welcome')
                }
                else{
                    // toastr.danger('Error While LogIn..!!')
                    toastr.error(response['error'])

                }
            })
        }
    }
}