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
  lessons: any;
  id: number;
  lesson: any;
  subjects: any;
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
        this.getModules('');
      }else{
        this.errorNotification();
      }
    })
  }
  /*End Modules works */
  /*Start Subject works */
  //get subjects
  getSubjects(id){
    this.data.getSubjects(id).subscribe(res =>{
      this.subjects = res.json().data
      console.log(this.subjects)
    })
  }
  //Add Subject
  addSubject(subtitle,subjecImg,sublink,discrib){
    let subject = {
      idmodule:this.idModule,
      subjectTitle:subtitle,
      subjectLink:sublink,
      imgUrl:subjecImg,
      discrib:discrib
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
  //Get Lesson
  getLessons(id){
    this.data.getLessons(id).subscribe(res => {
      this.lessons = res.json().data
    })
  }
  //Get lesson by id
  getLessonById(){
    this.data.getLessonById(this.id).subscribe(res =>{
      this.lesson = res.json().data
      console.log(this.lesson)
    })
  }
  //Add lesson
  addLesson(idModule,lessonTitle,lessonLink,limgUrl,ldiscrib){
    let lesson = {
      idModule:this.idModule,
      lessonTitle:lessonTitle,
      lessonLink:lessonLink,
      imgUrl:limgUrl,
      discrib:ldiscrib
    }
    this.data.addLesson(lesson).subscribe(res =>{
      if(res.json().data.affectedRows > 0){
        this.successNotification(`تمت اضافة درس ${lessonTitle} بنجاح`)
        this.lessonTitle ='';
        this.lessonLink ='';
        this.getLessons('');
      }else{
        this.errorNotification();
      }
    })
    
  }
  //Delete Lesson
  deleteLesson(id){}
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

  //showModal
  showModal(modal:string, id?:number){
    UIkit.modal(modal).show();
    if(id){
      this.id = id;
    }
  }
  //hide modal
  hideModal(modal){
    UIkit.modal(modal).hide();
  }
}
