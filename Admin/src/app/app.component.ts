import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as toastr from 'toastr'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wishlist';


  constructor(private router:Router){

  }

  toRender(){
   // if(localStorage['login_status']==1)
    if(sessionStorage['login_status']==1)
    return true
    else
    return false;
  }

  onLogout(){
    if(sessionStorage['login_status']==1)
    {
    sessionStorage.removeItem('login_status')
  // localStorage.removeItem('login_status')
    sessionStorage['log_out_flag']=1;
   //this.router.navigate(['/admin-home'])

    this.router.navigate(['/admin-login'])
    toastr.success('Logged Out')
  }else
  toastr.error('Already Logged out')

}

isLogOut()
  {
    if(sessionStorage['log_out_flag'] == 1)
    return true;
  else  if(sessionStorage['log_out_flag'] == 0)
    return false; 
  }



  onLogin()
  {
    if(!sessionStorage['login_status'])
    {
      
      this.router.navigate(['/admin-login'])
    }
    else
    {
      toastr.error('Already Logged in')

    }
  }


}
