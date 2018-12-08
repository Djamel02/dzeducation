import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
declare var UIkit:any;

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  stageName:string;
  allStages:any;
  idStage:any;
  yearName:string;
  allYears:any;
  idYear: any;
  fieldName: any;
  constructor(private data:ServiceService) { }

  ngOnInit() {
    this.getstages();
  }

  /*Start Stage works */
  //get stages
  getstages(){
    this.data.getStages().subscribe(res =>{
      this.allStages = res.json().data;
    })
  }
  //Add stage
  addStage(){
    this.data.addStage(this.stageName).subscribe(res => {
      // console.log(res.json())
      if(res.json().data.affectedRows > 0){
        this.successNotification(`تمت اضافة الطور ${this.stageName} بنجاح`)
        this.getstages()
      }else{
        this.errorNotification();
      }
    })
  }


  /*End Stage works */
  /*Start Year works */
  //get Year
  getYears(idstage){
    this.data.getYears(idstage).subscribe(res => {
      this.allYears = res.json().data
    })
  }
  //Add Year
  addYear(){
    let year ={
      idStage:this.idStage,
      yearName: this.yearName,
    }
    this.data.addYear(year).subscribe( res =>{
      if(res.json().data.affectedRows > 0){
        this.successNotification(`تمت اضافة السنة ${this.yearName} بنجاح`)
      }else{
        this.errorNotification();
      }
    })
  }
  /*End Year works */
  /*Start Field works */
  //Add Field
  addField(){
    let field = {
      fieldName:this.fieldName,
      idYear:this.idYear
    }
    this.data.addField(field).subscribe(res => {
      if(res.json().data.affectedRows > 0){
        this.successNotification(`تمت اضافة الشعبة ${this.fieldName} بنجاح`)
      }else{
        this.errorNotification();
      }
    })
  }
  /*End Field works */
  /*Start Modules works */
  //Add module
  addModule(){}
  /*End Modules works */
  /*Start Subject works */
  //Add Subject
  addSubject(){}

  /*End Subject works */
  /*Start Solution works */
  //Add Solution
  addSolution(){}
  /*End Solution works */
  /*Start Lesson works */
  //Add lesson
  addLesson(){}
  /*End Lesson works */

  //successnotification
  successNotification(message){
    UIkit.notification({
      message: message,
      status: 'success',
      pos: 'top-center',
      timeout: 3000
    });
  }
  //errror notification
  errorNotification(message ?){
    var msg = message ? message : '';
    UIkit.notification({
      message: msg+' خطأ !',
      status: 'warning',
      pos: 'top-center',
      timeout: 2000
    });
  }
}
