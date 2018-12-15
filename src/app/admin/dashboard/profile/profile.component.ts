import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  id:number;
  ida:number;
  fname='';
  lname='';
  email='';
  pass='';
  npass = '';
  nfname='';
  nlname='';
  nemail='';
  success:string = null;
  unseccess = false;
  constructor(private data:ServiceService ) {
    this.email = JSON.parse(localStorage.getItem('admin')).email
    this.pass = JSON.parse(localStorage.getItem('admin')).password
    data.getAdmins(this.email,this.pass).subscribe(res =>{
        this.id = res.json().data[0].idAdmin;
        this.fname = res.json().data[0].firstname;
        this.lname = res.json().data[0].lastname;
    })
   }

  ngOnInit() {
  }

  updateAdminInfo(){
    var pwd = this.npass == '' ? this.pass : this.npass;
    let admin = {
      firstname:this.fname,
      lastname:this.lname,
      email:this.email,
      password:pwd
    }
    
    this.data.updateAdminInfo(this.id,admin).subscribe(res => {
      let adm ={
        email:this.email,
        password:pwd
      }

      localStorage.setItem('admin',JSON.stringify(adm))
      this.success = res.json().data.affectedRows
    })
  }

  insertAdmin(){
    let admin = {
      firstname:this.nfname,
      lastname:this.nlname,
      email:this.nemail,
      password:this.npass
    }
    this.data.addAdmin(admin).subscribe(res =>{
      this.success = res.json().data.affectedRows
      
    })
  }

  deleteAdmin(ida){
    this.data.deleteAdmin(ida).subscribe(res => {
      this.unseccess = res.json().data.affectedRows
    })
  }
}
