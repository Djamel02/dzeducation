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
router.delete('/video/:id',(req,res) =>{
    db.deleteVideo(req.params.id,res)
})
//Update video
router.patch('/videos/:id',(req,res)=>{
    let video = req.body
    db.updateVideo(req.params.id,video.title,video.link,video.idlang,res)
})
//Add video
router.post('/videos',(req,res)=>{
    video = req.body
    db.addVideo(video.title,video.link,video.idLang,res)
})

//get stages
router.get('/stages',(req,res) =>{
    db.getStage(res)
})
//Add stage
router.post('/stage',(req,res) =>{
    db.createStage(req.body[0],res);
})

//get Years
router.get('/years/:id',(req,res) =>{
    db.getYear(req.params.id,res)
})
//Add year
router.post('/year',(req,res) =>{
    year = req.body
    db.createYear(year.yearName,year.idStage,res);
})

//get Fields
router.get('/fields/:id',(req,res) => {
    db.getFields(req.params.id,res)
})
//Add field
router.post('/field',(req,res)=>{
    field = req.body;
    db.createField(field.fieldName,field.idYear,res)
})

//get modules
router.get('/modules/:id',(req,res) =>{
    db.getModules(req.params.id,res)
})
//add Module
router.post('/module',(req,res) =>{
    let modul = req.body;
    db.createModules(modul.moduleName,modul.idField,res)
})
//get subjects
router.get('/subjects/:id',(req,res)=>{
    db.getSubjects(req.params.id,res);
})
//get subject by id
router.get('/subject/:id',(req,res) =>{
    db.getSubjectById(req.params.id,res);
})
//add subject
router.post('/subject',(req,res) =>{
    let sub = req.body;
    db.createSubject(sub.idModule,sub.subject_title,sub.subject_link,sub.img_url,sub.discrib,res)
})
//edit subject
router.put('/subject/:id',(req,res) =>{
    let subject = req.body;
    db.updateSubject(req.params.id,subject.subject_title,subject.subject_link,subject.img_url,subject.discrib,res)
})
//delete subject
router.delete('/subject/:id',(req,res) =>{
    db.deleteSubject(req.params.id,res)
})
//get solution
router.get('/solution/:id',(req,res) =>{
    db.getSolution(req.params.id,res);
})
//add solution
router.post('/solution',(req,res) =>{
    let solution = req.body;
    db.createSolution(solution.solutionLink,solution.imgUrl,solution.idSubject,res)
})
//Edit Solution
router.patch('/solution/:id',(req,res) =>{
    let solution = req.body
    db.updateSolution(req.params.id,solution.solution_link,solution.imgUrl,res)
})
//get lessons
router.get('/lessons/:id',(req,res) =>{
    db.getLessons(req.params.id,res)    
})
//get lessson by id lesson
router.get('/lesson/:id',(req,res)=>{
    db.getLessonById(req.params.id,res)
})
//add lesson
router.post('/lesson',(req,res) =>{
    let lesson = req.body
    db.createLesson(lesson.idModule,lesson.lesson_title,lesson.lesson_link,lesson.imgUrl,lesson.discrib,res)
})
//edit lesson
router.put('/lesson/:id',(req,res) =>{
    let lesson = req.body;
    db.updateLesson(req.params.id,lesson.lesson_title,lesson.lesson_link,lesson.imgUrl,lesson.discrib,res)
})
//delete Lesson
router.delete('/lesson/:id',(req,res) =>{
    db.deleteLesson(req.params.id,res)
})
module.exports = router;