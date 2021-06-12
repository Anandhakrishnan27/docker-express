let express=require('express');
let app=express();
const PORT=process.env.PORT||3000;
app.get('/',(req,res)=>{
     res.send("hello")
});
app.listen(PORT,()=>console.log("app running at port"+PORT));