const express=require("express");
const app=express();

app.get("/health", (req, res) => {
  res.json({msg:"my healte is very ok now i feel better"});
});

module.exports=app;