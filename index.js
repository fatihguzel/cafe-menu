const express = require("express")
const bodyParser = require("body-parser")
const { appendFile } = require("fs")

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))
const path = require("path")
app.use('/css',express.static(path.join(__dirname, 'public/styles.css')));
app.use('/css',express.static(path.join(__dirname, '/app.js')));
app.use('/css',express.static(path.join(__dirname, '/images/indir.jpg')));


app.get("/",async(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.sendFile(path.resolve(__dirname+ '/public/index.html'))
}).listen(5040)


console.log("Listening on PORT 5040");