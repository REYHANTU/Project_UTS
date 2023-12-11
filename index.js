var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb+srv://Reyhan:reyhan@atlascluster.qytbguy.mongodb.net/test',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.post("/sign_up",(req,res)=>{
    var name = req.body.user_name;
    var email = req.body.email;
    var password = req.body.password;

    var data = {
        "user name": user_name,
        "email" : email,
        "password" : password
    }

    db.collection('login').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('index.html')

})

app.post("/log_in",(req,res)=>{
    var email = req.body.email;
    var password = req.body.password;

    var data = {
        "email" : email,
        "password" : password
    }

    db.collection('login').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('index.html')

})

app.get('/', (req,res) => {
    res.render('pages/index')
})

app.get('/login', (req, res) => {
    res.render('pages/Login')
})

app.get('/signup', (req, res) => {
    res.render('pages/Signup')
})

app.get('/cart', (req, res) => {
    res.render('pages/cart')
})

app.get('/category_automotive', (req, res) => {
    res.render('pages/category_automotive')
})

app.get('/category_bag', (req, res) => {
    res.render('pages/category_bag')
})

app.get('/category_electronic', (req, res) => {
    res.render('pages/category_electronic')
})

app.get('/cartegory_healthy', (req, res) => {
    res.render('pages/category_healthy')
})

app.get('/category_laptopandcomputer', (req, res) => {
    res.render('pages/category_laptopandcomputer')
})

app.get('/category_makeup', (req, res) => {
    res.render('pages/category_makeup')
})

app.get('/cartegory_pants', (req, res) => {
    res.render('pages/category_pants')
})

app.get('/category_photography', (req, res) => {
    res.render('pages/category_photography')
})

app.get('/category_shirt', (req, res) => {
    res.render('pages/category_shirt')
})

app.get('/cartegory_shoes', (req, res) => {
    res.render('pages/category_shoes')
})

app.get('/category_smartphone', (req, res) => {
    res.render('pages/category_smartphone')
})

app.get('/category_watch', (req, res) => {
    res.render('pages/category_watch')
})

app.get('/produk1', (req, res) => {
    res.render('pages/produk1')
})

app.get('/produk2', (req, res) => {
    res.render('pages/produk2')
})

app.get('/produk3', (req, res) => {
    res.render('pages/produk3')
})

app.get('/produk4', (req, res) => {
    res.render('pages/produk4')
})

app.get('/produk5', (req, res) => {
    res.render('pages/produk5')
})

app.get('/produk6', (req, res) => {
    res.render('pages/produk6')
})

app.get('/produk7', (req, res) => {
    res.render('pages/produk7')
})

app.get('/produk8', (req, res) => {
    res.render('pages/produk8')
})

app.get('/produk9', (req, res) => {
    res.render('pages/produk9')
})

app.get('/produk10', (req, res) => {
    res.render('pages/produk10')
})

app.get('/produk11', (req, res) => {
    res.render('pages/produk11')
})

app.get('/produk12', (req, res) => {
    res.render('pages/produk12')
})

const notesSchema = {
    title: String,
    content: String
}

const Note = mongoose.model("Note", notesSchema);

app.get("/", function(req, res)  {
    res.send("express is working");
})

app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('pages/index');
}).listen(3800);

console.log("Listening on PORT 3800");