const express = require('express');

const path=require('path');
const cookieSession = require('cookie-session');
const bcrypt = require('bcrypt');
const mysql = require('mysql2');
const { body, validationResult } = require('express-validator');
const port= 8080
const app = express()

app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}));
app.set('views',path.join(__dirname,'views'));
app.use(cookieSession({
    name : 'myfood',
    keys : ['myfood1','myfood2'],
    maxAge: 3600*2000
}))
const connection = mysql.createPool({
    host     : 'localhost', // MYSQL HOST NAME
    user     : 'root', // MYSQL USERNAME
    password : '', // MYSQL PASSWORD
    database : 'login' // MYSQL DB NAME
}).promise();
app.get("/get",(req,res) =>{
    res.send ("This is get method");
})

// app.get("/",(req,res) =>{
//     res.render('index')
// })
// app.get("/home",(req,res) =>{
//     res.render('home')
// })
// app.get("/Profile",(req,res) =>{
//     res.render('Profile')
// })
// app.get("/Delivery1",(req,res) =>{
//     res.render('Delivery1')
// })

// app.get("/Receive1",(req,res) =>{
//     res.render('Receive1')
// })
// app.get("/R1",(req,res) =>{
//     res.render('R1')
// })
// app.get("/R2",(req,res) =>{
//     res.render('R2')
// })
// app.get("/R3",(req,res) =>{
//     res.render('R3')
// })
// app.get("/R4",(req,res) =>{
//     res.render('R4')
// })
// app.get("/R5",(req,res) =>{
//     res.render('R5')
// })
// app.get("/R6",(req,res) =>{
//     res.render('R6')
// })
// app.get("/R7",(req,res) =>{
//     res.render('R7')
// })
// app.get("/R8",(req,res) =>{
//     res.render('R8')
// })
// app.get("/R9",(req,res) =>{
//     res.render('R9')
// })
// app.get("/R10",(req,res) =>{
//     res.render('R10')
// })
// app.get("/R11",(req,res) =>{
//     res.render('R11')
// })
// app.get("/R12",(req,res) =>{
//     res.render('R12')
// })
// app.get("/R13",(req,res) =>{
//     res.render('R13')
// })
// app.get("/R14",(req,res) =>{
//     res.render('R14')
// })
// app.get("/R15",(req,res) =>{
//     res.render('R15')
// })
// app.get("/R16",(req,res) =>{
//     res.render('R16')
// })
// app.get("/R17",(req,res) =>{
//     res.render('R17')
// })
// app.get("/R18",(req,res) =>{
//     res.render('R18')
// })

// app.get("/Receive1",(req,res) =>{
//     res.render('Receive1')
// })
// app.get("/Receive2",(req,res) =>{
//     res.render('Receive2')
// })
// app.get("/Receive3",(req,res) =>{
//     res.render('Receive3')
// })
// app.get("/Recommended-restaurants1",(req,res) =>{
//     res.render('Recommended-restaurants1')
// })
// app.get("/Recommended-restaurants2",(req,res) =>{
//     res.render('Recommended-restaurants2')
// })
// app.get("/Recommended-restaurants3",(req,res) =>{
//     res.render('Recommended-restaurants3')
// })
// app.get("/Singin1",(req,res) =>{
//     res.render('Singin1')
// })
// app.get("/Singin2",(req,res) =>{
//     res.render('Singin2')
// })
// app.get("/sugar",(req,res) =>{
//     res.render('sugar')
// })
// app.get("/typeoffood",(req,res) =>{
//     res.render('typeoffood')
// })
// app.get("/allrestaurants",(req,res) =>{
//     res.render('allrestaurants')
// })
// app.get("/buy",(req,res) =>{
//     res.render('buy')
// })
// app.get("/Delivery2",(req,res) =>{
//     res.render('Delivery2')
// })
// app.get("/Delivery3",(req,res) =>{
//     res.render('Delivery3')
// })
// app.get("/Fattyfood",(req,res) =>{
//     res.render('Fattyfood')
// })
// app.get("/general",(req,res) =>{
//     res.render('general')
// })
// app.get("/Healthyfood",(req,res) =>{
//     res.render('Healthyfood')
// })
// app.get("/Login",(req,res) =>{
//     res.render('Login')
// })
// app.get("/payment",(req,res) =>{
//     res.render('payment')
// })
// const ifNotLoggedin = (req,res,next) => {
//     if(!req.session.isLoggedIn){
//         return res.render('Login');
//     }
//     next();
// }

// const ifLoggedin = (req,res,next) => {
//     if(req.session.isLoggedIn){
//         return res.redirect('/home');
//     }
//     next();
// }

// app.get('/',ifNotLoggedin,(req,res,next) => {
//     connection.execute("SELECT name FROM users WHERE id = ?",[req.session.userID])
//     .then(([rows]) => {
//         res.render('home',{
//             name:rows[0].name
//         })
//     })
// })

// app.post('/Singin1', ifLoggedin, 
// // post data validation(using express-validator)
// [
//     body('Email','Invalid email address!').isEmail().custom((value) => {
//         return connection.execute('SELECT email FROM users WHERE email=?', [value]) 
//         .then(([rows]) => {
//             if(rows.length > 0){
//                 return Promise.reject('This E-mail already in use!');//****
//             }
//             return true;
//         });
//     }),
//     body('Name','Username is Empty!').trim().not().isEmpty(),//***
//     body('Pass','The password must be of minimum length 8 characters').trim().isLength({ min: 8 }),
// ],// end of post data validation
// (req,res,next) => {

//     const validation_result = validationResult(req);
//     const {Name, Pass, Email} = req.body;
//     // IF validation_result HAS NO ERROR
//     if(validation_result.isEmpty()){
//         // password encryption (using bcryptjs)
//         bcrypt.hash(Pass, 12).then((hash_pass) => {
//             // INSERTING USER INTO DATABASE
//             connection.execute("INSERT INTO users(name,email,password) VALUES(?,?,?)",[Name,Email, hash_pass])
//             .then(result => {
//                 res.render('Singin2');
//             }).catch(err => {
//                 // THROW INSERTING USER ERROR'S
//                 if (err) throw err;
//             });
//         })
//         .catch(err => {
//             // THROW HASING ERROR'S
//             if (err) throw err;
//         })
//     }
//     else{
//         // COLLECT ALL THE VALIDATION ERRORS
//         let allErrors = validation_result.errors.map((error) => {
//             return error.msg;
//         });
//         // REDERING login-register PAGE WITH VALIDATION ERRORS
//         res.render('Singin1',{
//             register_error:allErrors,
//             old_data:req.body
//         });
//     }
// });
app.get('/',(req,res)=>{
    res.send("mmmmmm")
})

app.listen(port,()=>{
    console.log("i sus is on port: ",port)
})




