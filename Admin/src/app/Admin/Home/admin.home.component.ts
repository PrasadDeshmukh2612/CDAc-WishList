import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as toastr from 'toastr'

@Component({
    selector: 'app-home-admin',
    templateUrl: 'admin.home.component.html',
    styleUrls:['admin.home.component.css']
})

export class AdminHomeComponent implements OnInit {
    username
    constructor(private router:Router) { 
        this.username=sessionStorage['username']
    }

    //logout
    onLogout(){
        sessionStorage.removeItem('login_status')
      // localStorage.removeItem('login_status')
        this.router.navigate(['/admin-login'])
        toastr.success('Logged Out')



    }

    ngOnInit() { }
}