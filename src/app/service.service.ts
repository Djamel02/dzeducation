import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor( private _http:Http ) { }
  //Get admin from database
  getAdmins(email,pass){
    return this._http.get('/api/admin&email='+email+'&pass='+pass)
  }
  //Get admins
  findAdmins(){
    var headers= new Headers();
    headers.append('Content-type','application/json');
    return this._http.get('/api/admins');
  }

  //update admin info
  updateAdminInfo(id,admin){
    var headers= new Headers();
    headers.append('Content-type','application/json');
    return this._http.put('/api/admin/'+id,admin)
  }

  //Add admin
  addAdmin(admin){
    var headers= new Headers();
    headers.append('Content-type','application/json');
    return this._http.post('/api/admins',admin)
  }
  //DELETE admin
  deleteAdmin(id){
    return this._http.delete('/api/admins/'+id)
  }

  /* Languages Works */
  //get languages
  getLanguages(){
    return this._http.get('/api/languages')
  }
  getLanguageById(id){
    return this._http.get('/api//languages&id='+id)
  }
  //Add language to db
  addLanguage(languageName){
    return this._http.post('/api/languages',[languageName])
  }
  //update language
  updateLanguage(id,languageName){
    return this._http.put('/api/languages/'+id,[languageName])
  }
  /* End Languages Works */
  /* Videos Works */
    //get all videos
    getVideos(){
      return this._http.get('/api/videos');
    }
    //get video by id
    getVideoById(id){
      return this._http.get('/api/videos/'+id);
    }
    //insert video to db
    addVideo(vidoe){
      return this._http.post('/api/videos',vidoe)
    }
    //Update Video
    updateVideo(id,title,link,idlang){
      var headers= new Headers();
      headers.append('Content-type','application/json');  
      let video = {
        title:title,
        link:link,
        idlang:idlang
      }
      return this._http.patch('/api/videos/'+id,video);
    }
    //Delete Video
    deleteVideo(id){
      return this._http.delete('/api/video/'+id)
    }
  /* End Videos Works */
  /* Steps Works */
  addSteps(Steps){
    return this._http.post('/api/steps',Steps)
  }
  /* End Steps Works */
  /* Start Stages works */
    //get stages
    getStages(){
      return this._http.get('/api/stages')
    }
    //add stage
    addStage(stageName){
      return this._http.post('/api/stage',[stageName]);
    }

  /* Start Stages works */
  /* Start years works */
    //get year by id stage
    getYears(idStage){
      return this._http.get('/api/years/'+idStage);
    }
    //add year
    addYear(year){
      return this._http.post('/api/year',year)
    }
  /* End years works */
  /* Start Fields works */
    //get field
    getField(idyear){
      return this._http.get('/api/fields/'+idyear);
    }
    //Add field
    addField(field){
      var headers= new Headers();
      headers.append('Content-type','application/json');
      return this._http.post('/api/field',field);
    }
  /* Start Fields works */
  /*Start Module Works */
    //get modules
    getModules(idfield){
      return this._http.get('/api/modules/'+idfield)
    }
    //add module
    addModule(modul){
      return this._http.post('/api/module',modul)
    }
  /*End Modules works */
  /*Start subjects works */
    //get Subjects
    getSubjects(idModule){
      return this._http.get('/api/subjects/'+idModule)
    }
    //get Subject by id
    getSubjectById(id){
      return this._http.get('/api/subject/'+id);
    }
    //add subject
    addSubject(subject){
      return this._http.post('/api/subject',subject);
    }
    //Edit subject
    editSubject(id,subject){
      return this._http.put('/api/subject/'+id,subject);
    }
    // Delete subject
    deleteSubject(id){
      return this._http.delete('/api/subject/'+id);
    }
  /*End Subjects works */
  /* Start Solutions Works */
    //get Solution
    getSolution(idSubject){
      return this._http.get('/api/solution/'+idSubject)
    }
    //add solution
    addSolution(solution){
      return this._http.post('/api/solution',solution)
    }
  /* End Solutions Works */
  /*Start Lessons works */
    //get Lessons
    getLessons(idModule){
      return this._http.get('/api/lessons/'+idModule)
    }
    //get Lesson by id
    getLessonById(id){
      return this._http.get('/api/lesson/'+id)
    }
    //add lesson
    addLesson(lesson){
      return this._http.post('/api/lesson',lesson);
    }
    //Edit Lesson
    editLesson(id,lesson){
      return this._http.put('/api/lesson/'+id,lesson)
    }
    //delete Lesson
    deleteLesson(id){
      return this._http.delete('/api/lesson/'+id);
    }
  /*End Lessons works */
}
