import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  header = 'لوحة التحكم'
  listItem:Array<Object> = [
    {
      title:"لوحة التحكم" ,
      icon:"dashboard",
      link:"./"
    },
    {
      title:"بروفايل الأدمين" ,
      icon:"account_box",
      link:"profile"
    },
    {
      title:"مدرسة اللغات" ,
      icon:"account_balance",
      link:"languages"
    },
    {
      title:"المقالات" ,
      icon:"assignment",
      link:"articles"
    },
    {
      title:"المنشورات" ,
      icon:"book",
      link:"status"
    },
    {
      title:"الاحصائيات" ,
      icon:"assessment",
      link:"statics"
    },
  ]
  constructor() { }

  ngOnInit() {
  }
  setHeader(i){
    this.header = this.listItem[i]['title'];
  }

}
