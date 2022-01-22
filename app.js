const express = require('express');
const path = require('path');
const app = express();

app.use('/public',express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('pages/index');
});


console.log("App starting http://localhost:3000/")
app.listen(3000);