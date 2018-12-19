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
  lessons: any;
  id: number;
  lesson :any;
  subjects: any;
  subject: any;
  solution: any;
  constructor(private data:ServiceService,private titleService: Title ) {
    this.lesson = {
      idModule:0,
      idLesson:0,
      lesson_title:'',
      lesson_link:'',
      imgUrl:'',
      discrib:''
    };
    this.subject = {
      idModule:0,
      idSubject:0,
      subject_title:'',
      subject_link:'',
      img_url:'',
      discrib:''
    }
   }

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
    })
  }
  //Get Subject By id
  getSubjectById(id){
    this.data.getSubjectById(id).subscribe(res =>{
      this.subject = res.json().data[0];
    })
  }
  //Add Subject
  addSubject(){
    this.data.addSubject(this.subject).subscribe(res =>{
      if(res.json().data.affectedRows > 0){
        this.successNotification(`تمت اضافة موضوع ${this.subject.subject_title} بنجاح`)
        this.subject.subject_title ='';
        this.subject.subject_link =''
      }else{
        this.errorNotification();
      }
    })
  }
  //Edit subject
  editSubject(){
    this.data.editSubject(this.id,this.subject).subscribe(res =>{
      if(res.json().data.affectedRows > 0){
        this.successNotification(` تمت تعديل موضوغ ${this.subject.subject_title} بنجاح`)
        this.getSubjects(this.idModule)
        this.hideModal('#editSubject');
        this.showModal('#subject_tbl')
      }else{
        this.errorNotification();
      }
    })
  }
  deleteSubject(){
    this.data.deleteSubject(this.id).subscribe(res => {
      if(res.json().data.affectedRows > 0){
        this.successNotification(` تم حذف موضوغ بنجاح`)
        this.getSubjects(this.idModule)
        this.hideModal('#deleteSubject');
        this.showModal('#subject_tbl')
      }else{
        this.errorNotification();
      }
    })
  }
  /*End Subject works */
  /*Start Solution works */
  //get solution
  getSolution(idSubject){
    this.data.getSolution(idSubject).subscribe(res =>{
      this.solution = res.json().data[0]
    })
  }
  //Add Solution
  addSolution(imgUrl,solLink){
    let solution ={
      imgUrl:imgUrl,
      solutionLink:solLink,
      idSubject:this.id
    }
    this.data.addSolution(solution).subscribe(res =>{
      if(res.json().data.affectedRows > 0){
        this.successNotification(`تمت اضافة الحل بنجاح`)
        this.hideModal('#solutionModal')
        this.showModal('#subject_tbl')
      }else{
        this.errorNotification();
      }
    })
  }
  /*End Solution works */
  /*Start Lesson works */
  //Get Lesson
  getLessons(id){
    this.data.getLessons(id).subscribe(res => {
      this.lessons = res.json().data
    })
  }
  //Get lesson by id
  getLessonById(id){
    this.data.getLessonById(id).subscribe(res =>{
      this.lesson = res.json().data[0]
    })
  }
  //Add lesson
  addLesson(){

    this.data.addLesson(this.lesson).subscribe(res =>{
      if(res.json().data.affectedRows > 0){
        this.successNotification(`تمت اضافة درس ${this.lesson.lesson_title} بنجاح`)
        this.lesson.lesson_title ='';
        this.lesson.lesson_link ='';
      }else{
        this.errorNotification();
      }
    })
  }
  //Edit Lesson
  editLesson(){
      this.data.editLesson(this.id,this.lesson).subscribe(res =>{
      if(res.json().data.affectedRows > 0){
        this.successNotification(` تمت تعديل درس ${this.lesson.lesson_title} بنجاح`)
        this.getLessons(this.idModule)
        this.hideModal('#editLesson');
        this.showModal('#lesson_tbl')
      }else{
        this.errorNotification();
      }
    })
  }
  //Delete Lesson
  deleteLesson(){
    this.data.deleteLesson(this.id).subscribe(res =>{
      if(res.json().data.affectedRows > 0){
        this.successNotification(` تمت حذف الدرس بنجاح`)
        this.getLessons(this.idModule)
        this.hideModal('#deleteLesson');
        this.showModal('#lesson_tbl')
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
