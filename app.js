var express = require('express');
var app = express();

//Definindo engine para o Express
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home/index");
})

app.get("/formulario", function(req, res){
    res.render("admin/form_add_noticias");
})

app.get("/noticias", function(req, res){
    res.render("noticias/noticias");
})

app.listen(3000, function(){
    console.log("Server is running on port 3000");
})