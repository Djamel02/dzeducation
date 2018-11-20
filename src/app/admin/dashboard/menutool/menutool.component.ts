import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menutool',
  templateUrl: './menutool.component.html',
  styleUrls: ['./menutool.component.scss']
})
export class MenutoolComponent implements OnInit {
  email:string;

  constructor(private router:Router) { }

  ngOnInit() {
      if(localStorage.getItem('admin') != null){
        this.email = JSON.parse(localStorage.getItem('admin')).email     
      }else{
        this.router.navigateByUrl('admin')
      }
  }
  logout(){
    localStorage.removeItem('admin');
    this.router.navigateByUrl('admin')
  }

}
