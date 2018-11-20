import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';
declare var UIkit:any;
@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {
  langName:string;
  title:string;
  link:string;
  languages:any;
  videos:any;
  langv:any;
  article: any;
  titles: any;
  id:any;
  lang_name:string;
  video: any;
  lang_v: any;
  constructor(private data:ServiceService, private router:Router) { }

  ngOnInit() {
    this.getLanguages();
    this.getVideos()
  }
  //Add language
  addLang(){
    this.data.addLanguage(this.langName).subscribe(res =>{
      
      if(res.json().data.affectedRows > 0){
        this.successNotification(`تمت اضافة اللغة ${this.langName}`)
        this.langName =''
        this.getLanguages()
      }else{
        this.errorNotification()
      }
    })
    
  }
  //get Languages
  getLanguages(){
    this.data.getLanguages().subscribe(res =>{
      this.languages = res.json().data;
    })
  }
  //get All videos
  getVideos(){
    this.data.getVideos().subscribe(res =>{
      this.videos = res.json().data;
    })
  }
  //Add videos
  addVideo(){
    let video ={
      idLang:this.langv.valueOf(),
      title:this.title,
      link:this.link
    }
    this.data.addVideo(video).subscribe(res => {
      if(res.json().data.affectedRows > 0){
        this.successNotification(`تمت اضافة  ${this.title}`)
        this.title = '';
        this.link = '';
        this.router.navigateByUrl('./')
      }else{
        this.errorNotification()
      }
    })
    
  }

  //Add steps 
  addSteps(){
    let Steps = {
      idLang:this.langv.valueOf(),
      title:this.titles,
      article:this.article
    }
    this.data.addSteps(Steps).subscribe(res => {
      if(res.json().data.affectedRows > 0){
        this.successNotification(`تمت اضافة  ${this.titles}`)
        this.titles = '';
        this.article = '';
      }else{
        this.errorNotification();
      }
    })
  }

  //Update language
  updateLang(){
    this.data.updateLanguage(this.id,this.lang_name).subscribe(res =>{
      if(res.json().data.affectedRows > 0){
        this.getLanguages();
        UIkit.modal('#update-lang').hide();
        this.successNotification('تم التعديل بنجاح')
      }else {
        this.errorNotification();
      }
    })
  }

  //Delete video
  deleteVideo(){
    this.data.deleteVideo(this.id).subscribe(res => {
      if(res.json().data.affectedRows > 0){
        this.getVideos();
        UIkit.modal('#update-video').hide();
        this.successNotification('تم الحذف بنجاح')
        
      }else {
        this.errorNotification();
      }
    })
  }
  //Update video
  updateVideo(title,link){
    this.data.updateVideo(this.id,title,link,this.lang_v.valueOf()).subscribe(res => {
      if(res.json().data.affectedRows > 0){
        this.getVideos();
        UIkit.modal('#update-video').hide();
        this.successNotification('تم التعديل بنجاح')
      }else {
        this.errorNotification();
        console.log(res.json().data);
        
      }
    })
  }

  //Show modal languages
  showModal(id){
    this.id = id;
    this.data.getLanguageById(id).subscribe(res =>{
      this.lang_name = res.json().data[0].language_name
    })
    UIkit.modal('#update-lang').show();
  }

  //Show modal videos
  showModalVideo(id){
    this.id = id;
    this.data.getVideoById(id).subscribe(res =>{
       this.lang_v = this.langv;
       this.video =res.json().data
       UIkit.modal('#update-video').show();
       this.lang_v = res.json().data[0].idLanguage
    })
    
  }

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
  errorNotification(){
    UIkit.notification({
      message: 'خطأ !',
      status: 'warning',
      pos: 'top-center',
      timeout: 2000
    });
  }
}
