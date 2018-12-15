import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { Title } from '@angular/platform-browser';
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
  allFields: any;
  idField: any;
  moduleName: any;
  allModules: any;
  idModule: any;
  lessonLink: string;
  lessonTitle: string;
  subjectTitle: string;
  subjectLink: string;
  constructor(private data:ServiceService,private titleService: Title ) { }

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
  //get Field
  getFields(idyear){
    this.data.getField(idyear).subscribe(res =>{
      this.allFields = res.json().data;
    })
  }
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
  //get module
  getModules(idfield){
    return this.data.getModules(idfield).subscribe(res => {
      this.allModules = res.json().data;
    })
  }
  //Add module
  addModule(){
    let modul = {
      moduleName: this.moduleName,
      idField: this.idField
    }
    this.data.addModule(modul).subscribe(res => {
      if(res.json().data.affectedRows > 0){
        this.successNotification(`تمت اضافة مادة ${this.moduleName} بنجاح`)
        this.moduleName = ''
      }else{
        this.errorNotification();
      }
    })
  }
  /*End Modules works */
  /*Start Subject works */
  //Add Subject
  addSubject(idmodule,subtitle,sublink){
    let subject = {
      idmodule:this.idModule,
      subjectTitle:subtitle,
      subjectLink:sublink
    }
    this.data.addSubject(subject).subscribe(res =>{
      if(res.json().data.affectedRows > 0){
        this.successNotification(`تمت اضافة موضوع ${subtitle} بنجاح`)
        this.subjectTitle ='';
        this.subjectLink =''
      }else{
        this.errorNotification();
      }
    })
  }

  /*End Subject works */
  /*Start Solution works */
  //Add Solution
  addSolution(){}
  /*End Solution works */
  /*Start Lesson works */
  //Add lesson
  addLesson(idModule,lessonTitle,lessonLink){
    let lesson = {
      idModule:this.idModule,
      lessonTitle:lessonTitle,
      lessonLink:lessonLink
    }
    this.data.addLesson(lesson).subscribe(res =>{
      if(res.json().data.affectedRows > 0){
        this.successNotification(`تمت اضافة درس ${lessonTitle} بنجاح`)
        this.lessonTitle ='';
        this.lessonLink =''
      }else{
        this.errorNotification();
      }
    })
    
  }
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
