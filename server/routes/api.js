const crypto = require('crypto');
const express = require('express');
const router = express.Router();
const adl = require('./ADL')



//Instance of class adl
let db = new adl();

//GET Admin for login from database
router.get('/admin&email=:email&pass=:pass',(req,res)=> {
    db.getAdmin(req.params.email,req.params.pass,res)    
})
//Get all admins
router.get('/admins',(req,res) =>{
    db.findAdmins(res)
})
//Update pwd Admin
router.put('/admin/:id',(req,res) =>{
    var admin = req.body;
    db.updateAdmin(req.params.id,admin.firstname,admin.lastname,admin.email,admin.password,res)
    
})

//insert Admin
router.post('/admins',(req,res) =>{
    admin = req.body;
    db.insertAdmin(admin.firstname,admin.lastname,admin.email,admin.password,res)
})

//Delete admin
router.delete('/admins/:id',(req,res) => {
    id = req.params.id;
    db.deleteAdmin(id,res)
})

//Add language
router.post('/languages',(req,res) =>{
    db.addLanguage(req.body[0],res)    
})
//Get all languages
router.get('/languages',(req,res)=>{
    db.getLanguages(res);
})
//Get language by id
router.get('/languages&id=:id',(req,res) =>{
    db.getLanguageById(req.params.id,res);
})
//Update Language
router.put('/languages/:id',(req,res)=>{
    db.updateLanguage(req.params.id,req.body[0],res)
})
//Add language steps
router.post('/steps',(req,res)=>{
    steps = req.body
    db.addSteps(steps.title,steps.article,steps.idLang,res)
})

//Get All videos
router.get('/videos',(req,res) => {
    db.getVideos(res)
})
//Get video by id
router.get('/videos/:id',(req,res) =>{
    db.getVideoById(req.params.id,res)
})
//Delete video
router.delete('/videos/:id',(req,res) =>{
    db.deleteVideo(req.params.id,res);
})
//Update video
router.put('/videos/:id',(req,res)=>{
    let video = req.body
    db.updateVideo(req.params.id,video.title,video.link,video.idlang,res)
})
//Add video
router.post('/videos',(req,res)=>{
    video = req.body
    db.addVideo(video.title,video.link,video.idLang,res)
})
module.exports = router;