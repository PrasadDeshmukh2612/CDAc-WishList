import { Component } from '@angular/core';
import * as toastr from 'toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WishList';

  customer_name = sessionStorage['customer_name']
  constructor(private router: Router) 
  {
   
  }


  toRender() {
    // if(localStorage['login_status']==1)
    if (sessionStorage['login_status'] == 1)
    {
      this.customer_name = sessionStorage['customer_name']
      return true
    }
    else
      return false;
  }

  onLogout() {
    if (sessionStorage['login_status'] == 1) {
      sessionStorage.clear()
      this.customer_name = ''
      this.router.navigate(['/user-home'])
      toastr.success('Logged Out')
    } else
      toastr.error('Already Logged out')

  }

  isLogOut() {
    if (sessionStorage['log_out_flag'] == 1)
      return true;
    else if (sessionStorage['log_out_flag'] == 0)
      return false;
  }





}

