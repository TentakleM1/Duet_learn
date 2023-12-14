const express = require('express')
const app = express()

const jsonParser = express.json();
const PORT = 3000
const fs = require('fs')
const path = require('path')

////// start body

function writeFile(value) {
    let data = value
    if(data === undefined) return
    fs.writeFile("form.js", `${data}` ,{flag: 'a'}, (err) => { 
        if (err) 
          console.log(err); 
        else { 
          console.log("File written successfully\n"); 
          console.log("The written has the following contents:"); 
          console.log(fs.readFileSync("form.js")); 
        } 
      }) 
}
const keyDatafile = () =>{
     fs.appendFile("form.js", '',function(error){
        if(error) return console.log(error) // если возникла ошибка
                     
        console.log("Запись файла завершена")
     })
 }
 
 app.use(express.static('front'));

 app.use('/form', (req, res, next) => {
    keyDatafile()
    writeFile()
    next()
 })

app.post("/form", jsonParser, (req, res) => {
    const test = req.body
    console.log(test)
    writeFile(test.data)
    res.status(201).json({})
});
   
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../front/index.html"));
})


app.get('/about', (req, res) => {
    
    res.sendFile(path.join(__dirname, '../front/about.html'))
})

app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, '../front/form.html'))
})


////// end body 

app.listen(PORT, () => {
    console.log(`listen on port ${PORT}`)
})