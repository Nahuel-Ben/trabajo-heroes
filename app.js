const express = require ('express')
const path = require ('path')

const app = express()

app.get('/', function(req, res){
    let file = path.resolve('home.html')

    res.sendFile(file)
})

app.get ('/heroes', function (req,res){
    let file = path.resolve('heroes.json')

    res.sendFile(file)
})

app.listen(3000)