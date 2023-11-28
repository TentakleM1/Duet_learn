const express = require('express')
const app = express()

const path = require('path')



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../front/index.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../front/about.html'))
})

app.listen(3000)