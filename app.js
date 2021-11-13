const express = require("express")
const app = express();
const path = require("path")
var mongoose = require('mongoose');
const { stringify } = require("querystring");
// Connecting the mongoose to the local host /contact
mongoose.connect('mongodb://localhost/contact',{useNewUrlParser: true});
const port = process.env.PORT || 80;

// Making the schema
var contactschema=  new mongoose.Schema({
    name: String,
    Address: String,
    Contact: String
})
// Locking the schema and making the model
var Contact= mongoose.model('Contact',contactschema);

// Static file
app.use('/static', express.static('Static'));
app.use(express.urlencoded());

// Pug 
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'));

// Endpoint
app.get('/',(req,res)=>{
    res.status(200).render('home.pug')
})
app.get('/contact',(req,res)=>{
    res.status(200).render('contact.pug')
})
// Making a post request for the contact page
app.post('/contact',(req,res)=>{
    var myData= new Contact(req.body);
    // Saving the data into my data
    myData.save().then(()=>{
        res.redirect('/')
    }).catch(()=>{
        res.status(404).end()
    })
})

// Listen
app.listen(port,()=>{
    console.log(`Server at port ${port}`);
})
