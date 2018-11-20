import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-dsh',
  templateUrl: './dsh.component.html',
  styleUrls: ['./dsh.component.scss']
})
export class DshComponent implements OnInit {
  admins:Object;
  displayedColumns = ['id', 'firstname', 'lastname', 'email'];
  posts:Object;
  displayedColumns2 = ['firstname', 'subject', 'title', 'link'];

  constructor(private data:ServiceService) { }

  ngOnInit() {
    this.data.findAdmins().subscribe(res =>{
      this.admins = res.json().data
      
    })
  }

}
