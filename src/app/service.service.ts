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
      return this._http.put('/api/videos/'+id,video);
    }
    //Delete Video
    deleteVideo(id){
      return this._http.delete('/api/videos/'+id)
    }
  /* End Videos Works */
  /* Steps Works */
  addSteps(Steps){
    return this._http.post('/api/steps',Steps)
  }
  /* End Steps Works */
}
