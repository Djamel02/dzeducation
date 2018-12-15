import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ServiceService } from '../../service.service'
import { Title } from '@angular/platform-browser';
declare var UIkit:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email:string;
  pass:string;
  
  constructor(public data:ServiceService,private router:Router,private titleService:Title) {
    this.titleService.setTitle('تسجيل الدخول')
    //TODO: check if localstorage has admin, then login with data
    if(localStorage.getItem('admin') != null){
      let admin = JSON.parse(localStorage.getItem('admin'));
      this.email = admin.email;
      this.pass = admin.password;
      this.getAdmin(this.email,this.pass)
    }
  }

  ngOnInit() {
  }
  //Login operation
  getAdmin(email,pass){
    this.data.getAdmins(email,pass).subscribe(res => {
      if (res.json().data.length > 0){
          UIkit.notification({
            message: `مرحبا ${res.json().data[0]['firstname']}`,
            status: 'success',
            pos: 'top-center',
            timeout: 2000
          });
          this.router.navigateByUrl('/admin/dashboard').catch(err => console.log(err))
          this.storeAdmin()
      }else{
        UIkit.notification({
          message: 'خطأ في البريد أو كلمة السر',
          status: 'warning',
          pos: 'top-center',
          timeout: 2000
        });
      }
    })
  }
  
  //Add infos to localStorage
  storeAdmin(){
    let admin ={
      email:this.email,
      password:this.pass
    }

    localStorage.setItem('admin',JSON.stringify(admin));
  }
}
