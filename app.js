const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const ejs = require('ejs');

const app=express()
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

//**************************************************************
function PageType(name, i1, i2, i3, i4, i5){
  this.name=name;
  this.i1=i1;
  this.i2=i2;
  this.i3=i3;
  this.i4=i4;
  this.i5=i5;
}
const wood = new PageType("wood","traintrack","wood","woodbottle","woodphoto","coasters");
const other = new PageType("other","box","slate","perspex","stamp","copperflower");
const flowers = new PageType("flowers","wiredFlowers","bauble","vase","flowerpot","pinflowers");
const hair = new PageType("hair","3pins","tallpin","comb","broach","smallpin");

const types=[wood,other,flowers,hair];
//*********************************************************

app.get("/", function(req, res){
  res.render("home");
});

app.get("/news",function(req,res){
  res.render("news");
});

app.get("/products",function(req,res){
  res.render("products");
});

app.get("/contact",function(req,res){
  res.render("contact");

});
app.get("/items/:page",function(req,res){
  res.render("items");
})

app.get("/product/:page", function(req, res) {
const pageConst = req.params.page;

  types.forEach(function(type){

    if(_.lowerCase(pageConst)===_.lowerCase(type.name))

  res.render("product",{
    img1: type.i1,
    img2: type.i2,
    img3: type.i3,
    img4: type.i4,
    img5: type.i5,
  });
});

});

//********************************************************************
app.listen(3000, function(){
  console.log("server started on port 3000.");
});
