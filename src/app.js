const express= require("express")
const hbs= require("hbs")
const app = express();
const mongoose= require("mongoose")
const bodyParser= require("body-parser")
const routes=require('./routes/main')
const Detail=require("./models/Detail")
const Slider=require("./models/Slider") 
const Service= require("./models/Service")
 


app.use(bodyParser.urlencoded({
    extended:true
}))
app.use('/static',express.static("public"))
app.use('',routes)



 //(template engine)

 app.set("view engine","hbs")
 app.set("views","views")
 hbs.registerPartials("views/partials")

 mongoose.set('strictQuery', true);

 //db connections
 mongoose.connect("mongodb://127.0.0.1:27017/freelance_tut",()=>{
    console.log("db connected");

    // Service.create([
    //      {
    //         icon:"fa-solid fa-chalkboard-user fa-fade",
    //         title:"Provide Best Courses",
    //         description:"We provide courses that helps our student in learning and in placement",
    //         linkText:"https://www.princesarkar480.com",
    //         link:"Check"
    //      },
    //      {
    //         icon:"fa-solid fa-code fa-beat-fade",
    //         title:"Software Development",
    //         description:"We provide courses that helps our student in learning and in placement",
    //         linkText:"https://www.princesarkar480.com",
    //         link:"Learn"
    //      },
    //      {
    //         icon:"fa-solid fa-code fa-beat-fade",
    //         title:"Software Development",
    //         description:"We provide courses that helps our student in learning and in placement",
    //         linkText:"https://www.princesarkar480.com",
    //         link:"Learn"
    //      },
    // ])

    // Slider.create([
    //     {
    //         title:"Learn JavaScript in very easy manner",
    //         subTitle:"JavaScript in one of the most popular programming language.",
    //         imageUrl:"/static/images/s1.jpg"
    //     },
    //     {
    //         title:"What is Django in Python ?",
    //         subTitle:"Django is most famous web framework of python programming.",
    //         imageUrl:"/static/images/s2.jpg"
    //     },
    //     {
    //         title:"What about node js ?",
    //         subTitle:"Node js is runtime environment to execute javascript outside browser.",
    //         imageUrl:"/static/images/s3.jpg"
    //     },
    // ])


    // Detail.create({
    //     brandName:"Prince Technology👑",
    //     brandIconUrl:"https://yt3.googleusercontent.com/ytc/AGIKgqNWJgqK8rHu7CsoXsjbWB0gcY61sq_HYTZigvBzpQ=s176-c-k-c0x00ffffff-no-rj",
    //     links:[
    //         {
    //             label:"Home",
    //             url:"/"
    //         },
    //         {
    //             label:"Services",
    //             url:"/services"
    //         },
    //         {
    //             label:"Gallery",
    //             url:"/gallery"
    //         },
    //         {
    //             label:"About",
    //             url:"/about"
    //         },
    //         {
    //             label:"Contact Us",
    //             url:"/contact-us"
    //         },
    //     ]
    // }) 
 })

app.listen(process.env.PORT | 5556,() => {
    console.log("server started");
});

