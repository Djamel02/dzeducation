const mysql = require('mysql');

//Class Data Access Layer "database work"
module.exports = class ADL {
    
    constructor(){
        this.connection = mysql.createConnection({
            host:'localhost',
            database:'education',
            user:'root',
            password:''
        })
        this.connection.connect((err,db) =>{
            if (err) {console.error('connection with db doesnt work ');}
            else{console.log('connection with db works ');}
        })
        
        
        // Response handling
         this.response = {
            status: 200,
            data: [],
            message: null
        };
        
    }

    //Methodes
    // Error handling
    sendError(err, res) {
        this.response.status = 501;
        this.response.message = typeof err == 'object' ? err.message : err;
        res.status(501).json(this.response);
    };
    /* Start Admin data */
    //Get admin by email and password
    getAdmin(email,password,res){
        return this.connection.query(`SELECT * FROM admins WHERE email ='${email}' AND password = '${password}' `,(err,result) =>{
            try {
                this.response.data = result
                res.json(this.response)
            }catch(err) {
                this.sendError(err,res)
            }
            
        });
    }
    //get All admins
    findAdmins(res){
        return this.connection.query(`SELECT idAdmin,firstname,lastname,email FROM admins`,(err,result) =>{
            try {
                this.response.data = result
                res.json(this.response)
            }catch(err) {
                this.sendError(err,res)
            }
            
        });
    }
    //Update Admin 
    updateAdmin(idAdmin,fname,lname,email,pwd,res){
        return this.connection.query('UPDATE admins SET firstname = ? , lastname = ? , email = ? ,password = ? WHERE idAdmin = ? ',[fname,lname,email,pwd,idAdmin],(err,result) =>{
            try {
                this.response.data = result
                res.json(this.response)
            }catch(err) {
                this.sendError(err,res)
            }
           
        });
    }

    //Insert new admin
    insertAdmin(fname,lname,email,pwd,res){
        return this.connection.query('INSERT INTO admins (firstname,lastname,email,password) values(?,?,?,?)',[fname,lname,email,pwd],(err,result) =>{
            try {
                this.response.data = result
                res.json(this.response)
            }catch(err) {
                this.sendError(err,res)
            }
            
        })
    }

    //delete admin
    deleteAdmin(id,res){
        return this.connection.query('DELETE FROM admins WHERE idAdmin = ?',id,(err,result) =>{
            try {
                this.response.data = result
                res.json(this.response)
            }catch(err) {
                this.sendError(err,res)
            }
            
        })
    }
    /* End Admin data */
    /* Start Stage data */
    //Get stages
    getStage(res){
        return this.connection.query('SELECT * FROM stages',(err,result) =>{
            try {
                this.response.data = result
                res.json(this.response)
            }catch(err) {
                this.sendError(err,res)
            }
        })
    }
    //Create stage
    createStage(stageName,res){
        return this.connection.query('INSERT INTO stages (stage_name) values(?)',[stageName],(err,result) =>{
            try {
                this.response.data = result
                res.json(this.response)
            }catch(err) {
                this.sendError(err,res)
            }
            
        })
    }
    //Update Stage
    updateStage(idStage,stageName,res){
        return this.connection.query('UPDATE stage SET stage_name = ?  WHERE idStage = ? ',[stageName,idStage],(err,result) =>{
            try {
                this.response.data = result
                res.json(this.response)
            }catch(err) {
                this.sendError(err,res)
            }
           
        });
    }
    //Delete Stage
    //TODO
    deleteStage(idStage,res){}
    /* End Stage data */
    /* Start Years data */
    //Get Years
    getYear(idStage,res){
        return this.connection.query(`SELECT * FROM years WHERE idStage = ${idStage} `,(err,result) =>{
            try {
                this.response.data = result
                res.json(this.response)
            }catch(err) {
                this.sendError(err,res)
            }
        })
    }
    //Create year
    createYear(yearName,idStage,res){
        return this.connection.query('INSERT INTO years (year_name,idStage) values(?,?)',[yearName,idStage],(err,result) =>{
            try {
                this.response.data = result
                res.json(this.response)
            }catch(err) {
                this.sendError(err,res)
            }
            
        })
    }
    //Update year
    updateYear(idYear,yearName,res){
        return this.connection.query('UPDATE years SET year_name = ?  WHERE idYear = ? ',[yearName,idYear],(err,result) =>{
            try {
                this.response.data = result
                res.json(this.response)
            }catch(err) {
                this.sendError(err,res)
            }
           
        });
    }
    //Delete year
    //TODO
    deleteYear(idYear,res){}
    /* End Year data */
    /* Start Fields data */
    //Get Fields
    getFields(idYear,res){
        return this.connection.query(`SELECT * FROM fields WHERE idYear = ${idYear}`,(err,result) =>{
            try {
                this.response.data = result
                res.json(this.response)
            }catch(err) {
                this.sendError(err,res)
            }
        })
    }
    //Create Fields
    createField(fieldName,idyear,res){
        return this.connection.query('INSERT INTO fields (field_name,idYear) values(?,?)',[fieldName,idyear],(err,result) =>{
            try {
                this.response.data = result
                res.json(this.response)
            }catch(err) {
                this.sendError(err,res)
            }
            
        })
    }
    //Update Fields
    updateField(idField,fieldName,res){
        return this.connection.query('UPDATE fields SET field_name = ?  WHERE idField = ? ',[fieldName,idField],(err,result) =>{
            try {
                this.response.data = result
                res.json(this.response)
            }catch(err) {
                this.sendError(err,res)
            }
           
        });
    }
    //Delete Fields
    //TODO
    deleteField(idField,res){}
    /* End Fields data */
    /* Start Modules data */
    //Get Modules
    getModules(idField,res){
        return this.connection.query(`SELECT * FROM modules WHERE idField = ${idField}`,(err,result) =>{
            try {
                this.response.data = result
                res.json(this.response)
            }catch(err) {
                this.sendError(err,res)
            }
        })
    }
    //Create Modules
    createModules(moduleName,idField,res){
        return this.connection.query('INSERT INTO modules (module_name,idField) values(?,?)',[moduleName,idField],(err,result) =>{
            try {
                this.response.data = result
                res.json(this.response)
            }catch(err) {
                this.sendError(err,res)
            }
            
        })
    }
    //Update Modules
    updateModules(idModule,moduleName,res){
        return this.connection.query('UPDATE modules SET module_name = ?  WHERE idModule = ? ',[moduleName,idModule],(err,result) =>{
            try {
                this.response.data = result
                res.json(this.response)
            }catch(err) {
                this.sendError(err,res)
            }
           
        });
    }
    //Delete Modules
    //TODO
    deleteModules(idModule,res){}
    /* End Fields data */
    /*Start subjects works*/
    //Get Subjects
    getSubjects(idModule,res){
        return this.connection.query(`SELECT idSubject,subject_title FROM subjects WHERE idModule = ${idModule} ` ,(err,result) =>{
            try {
                this.response.data = result
                res.json(this.response)
            }catch(err) {
                this.sendError(err,res)
            }
        })
    }
    //Get Subject infos by id
    getSubjectById(idSubject,res){
        return this.connection.query(`SELECT * FROM subjects WHERE idSubject = ${idSubject} LIMIT 1 ` ,(err,result) =>{
            try {
                this.response.data = result
                res.json(this.response)
            }catch(err) {
                this.sendError(err,res)
            }
        })
    }
    //Add subject
    createSubject(idModule,subjectTitle,subjectLink,imgUrl,discrib,res){
        return this.connection.query('INSERT INTO subjects (subject_title,subject_link,img_url,discrib,idModule) values(?,?,?,?,?)',[subjectTitle,subjectLink,imgUrl,discrib,idModule],(err,result) =>{
            try {
                this.response.data = result
                res.json(this.response)
            }catch(err) {
                this.sendError(err,res)
            }
        })
    }
    //Update Subject
    updateSubject(idSubject,subject_title,subject_link,img_url,discrib,res){
        return this.connection.query('UPDATE subjects SET subject_title = ? , subject_link = ? , img_url = ? , discrib = ? WHERE idSubject = ?',[subject_title,subject_link,img_url,discrib,idSubject],(err,result) =>{
            try {
                this.response.data = result
                res.json(this.response)
            }catch(err) {
                this.sendError(err,res)
            }
        })
    }
    //Delete subject
    deleteSubject(idSubject,res){
        return this.connection.query('DELETE subjects, solutions FROM subjects INNER JOIN solutions ON subjects.idSubject = solutions.idSubject WHERE subjects.idSubject = ? ',[idSubject],(err,result) =>{
            try {
                this.response.data = result
                res.json(this.response)
            }catch(err) {
                this.sendError(err,res)
            }
        })
    }
    /*End subjects works */
    /*Start Solutions Works */
    //get Solution
    getSolution(idSubject,res){
        return this.connection.query(`SELECT idSolution,solution_link,imgUrl,subject_title FROM solutions INNER JOIN subjects WHERE solutions.idSubject = ${idSubject} AND solutions.idSubject = subjects.idSubject LIMIT 1 ` ,(err,result) =>{
            try {
                this.response.data = result
                res.json(this.response)
            }catch(err) {
                this.sendError(err,res)
            }
        })
    }
    //Create Solution
    createSolution(solLink,imgUrl,idSubject,res){
        return this.connection.query('INSERT INTO solutions (imgUrl,solution_link,idSubject) values(?,?,?)',[imgUrl,solLink,idSubject],(err,result) =>{
            try {
                this.response.data = result
                res.json(this.response)
            }catch(err) {
                this.sendError(err,res)
            }
        })
    }
    /*End Solutions Works */
    /*Start lessons works */
    //Get Lessons
    getLessons(idModule,res){
        return this.connection.query(`SELECT idLesson,lesson_title FROM lessons WHERE idModule = ${idModule} ORDER BY idLesson` ,(err,result) =>{
            try {
                this.response.data = result
                res.json(this.response)
            }catch(err) {
                this.sendError(err,res)
            }
        })
    }
    //Get Lesson By id
    getLessonById(idLesson,res){
        return this.connection.query(`SELECT * FROM lessons WHERE idLesson = ${idLesson} LIMIT 1` ,(err,result) =>{
            try {
                this.response.data = result
                res.json(this.response)
            }catch(err) {
                this.sendError(err,res)
            }
        })
    }
    //Add lesson
    createLesson(idModule,lessonTitle,lessonLink,imgUrl,discrib,res){
        return this.connection.query('INSERT INTO lessons (lesson_title,lesson_link,imgUrl,discrib,idModule) values(?,?,?,?,?)',[lessonTitle,lessonLink,imgUrl,discrib,idModule],(err,result) =>{
            try {
                this.response.data = result
                res.json(this.response)
            }catch(err) {
                this.sendError(err,res)
            }
        })
    }
    //Update lesson
    updateLesson(id,lessonTitle,lessonLink,imgUrl,discrib,res){
        return this.connection.query('UPDATE lessons SET lesson_title = ? , lesson_link = ? , imgUrl = ? , discrib = ? WHERE idLesson = ?',[lessonTitle,lessonLink,imgUrl,discrib,id],(err,result) =>{
            try {
                this.response.data = result
                res.json(this.response)
            }catch(err) {
                this.sendError(err,res)
            }
        })
    }
    //Delete Lesson
    deleteLesson(idLesson,res){
        return this.connection.query('DELETE FROM lessons WHERE idLesson = ?',[idLesson],(err,result) =>{
            try {
                this.response.data = result
                res.json(this.response)
            }catch(err) {
                this.sendError(err,res)
            }
        })
    }
    /*End lessons works */
    /* Start Languages data */
    //get All languages
    getLanguages(res){
        return this.connection.query(`SELECT * FROM languages`,(err,result) =>{
            try {
                this.response.data = result
                res.json(this.response)
            }catch(err) {
                this.sendError(err,res)
            }
            
        });
    }
    //Get Language by id
    getLanguageById(id,res){
        return this.connection.query(`SELECT language_name FROM languages WHERE idLanguage = ${id}`,(err,result) =>{
            try {
                this.response.data = result
                res.json(this.response)
            }catch(err) {
                this.sendError(err,res)
            }
            
        });
    }
    //Add Language
    addLanguage(languageName,res){
        return this.connection.query('INSERT INTO languages (language_name) values(?)',languageName,(err,result) =>{
            try {
                this.response.data = result
                res.json(this.response)
            }catch(err) {
                this.sendError(err,res)
            }
            
        })
    }
    //Update Language
    updateLanguage(idLanguage,languageName,res){
        return this.connection.query('UPDATE languages SET language_name = ?  WHERE idLanguage = ? ',[languageName,idLanguage],(err,result) =>{
            try {
                this.response.data = result
                res.json(this.response)
            }catch(err) {
                this.sendError(err,res)
            }
           
        });
    }
    //Delete Language
    deleteLanguage(idLanguage,res){
        return this.connection.query(`DELETE FROM languages WHERE idLanguage = ?`,idLanguage,(err,result) =>{
            try {
                this.response.data = result
                res.json(this.response)
            }catch(err) {
                this.sendError(err,res)
            }
        })
    }
    /* End Languages data */
    /* Start videos data */
    //get All videos
    getVideos(res){
        return this.connection.query(`SELECT idVideo,languages.language_name,video_title FROM videos INNER JOIN languages WHERE videos.idLanguage = languages.idLanguage `,(err,result) =>{
            try {
                this.response.data = result
                res.json(this.response)
            }catch(err) {
                this.sendError(err,res)
            }
            
        });
    }
    //Get video by id
    getVideoById(id,res){
        return this.connection.query(`SELECT videos.idLanguage,languages.language_name,video_title,video_link FROM videos INNER JOIN languages WHERE videos.idLanguage = languages.idLanguage AND idVideo = ${id} `,(err,result) =>{
            try {
                this.response.data = result
                res.json(this.response)
            }catch(err) {
                this.sendError(err,res)
            }
            
        });
    }
    //Add videos
    addVideo(title,link,idlang,res){
        return this.connection.query('INSERT INTO videos (video_title,video_link,idLanguage) values(?,?,?)',[title,link,idlang],(err,result) =>{
            try {
                this.response.data = result
                res.json(this.response)
            }catch(err) {
                this.sendError(err,res)
            }
            
        })
    }
    //Update videos
    updateVideo(idvideo,title,link,idlang,res){
        return this.connection.query('UPDATE videos SET video_title = ?,video_link = ?,idLanguage = ?  WHERE idVideo = ? ',[title,link,idlang,idvideo],(err,result) =>{
            try {
                this.response.data = result
                res.json(this.response)
            }catch(err) {
                this.sendError(err,res)
            }
           
        });
    }
    //Delete videos
     deleteVideo(idVideo,res) {
        return this.connection.query(`DELETE FROM videos WHERE idVideo = ? `, idVideo,(err,result) =>{
            try {
                this.response.data = result
                res.json(this.response)
            }catch(err) {
                this.sendError(err,res)
            }
        })
    }
    /* End Videos data */
    /* Start steps data */
    //get All videos
    getSteps(res){
        return this.connection.query(`SELECT * FROM steps`,(err,result) =>{
            try {
                this.response.data = result
                res.json(this.response)
            }catch(err) {
                this.sendError(err,res)
            }
            
        });
    }
    //Add steps
    addSteps(title,article,idlang,res){
        return this.connection.query('INSERT INTO steps (step_title,step_article,idLanguage) values(?,?,?)',[title,article,idlang],(err,result) =>{
            try {
                this.response.data = result
                res.json(this.response)
            }catch(err) {
                this.sendError(err,res)
            }
            
        })
    }
    //Update steps
    updateStep(idStep,title,article,idlang,res){
        return this.connection.query('UPDATE steps SET step_title = ?,step_article = ?,idLanguage = ?  WHERE idStep = ? ',[title,article,idlang,idStep],(err,result) =>{
            try {
                this.response.data = result
                res.json(this.response)
            }catch(err) {
                this.sendError(err,res)
            }
           
        });
    }
    //Delete steps
    deleteStep(idStep,res){
        return this.connection.query(`DELETE FROM steps WHERE idStep = ?`,idStep,(err,result) =>{
            try {
                this.response.data = result
                res.json(this.response)
            }catch(err) {
                this.sendError(err,res)
            }
        })
    }
    /* End Videos data */
}