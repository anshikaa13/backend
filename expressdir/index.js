const express=require("express")
const app= express();

let port=8080;

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})

// app.use((req,res)=>{
//   console.log("request recieved")
//   res.send("this is a basic response")
// })

app.get("/",(req,res)=>{
    res.send("you contacted root path")
});
app.get("/:username/:id",(req,res)=>{
    console.log(req.params);
    res.send("you contacted root path")
});

app.get("/search",(req,res)=>{
    let={q}=req.query
    res.send(`you contacted search path :${q}`)
});

// app.get("*",(req,res)=>{
//     res.send("this path doesn,t exist")
// });