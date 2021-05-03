// 05. web server menggunakan express js
const express = require('express')

const app = express()

app.get('/', function(req, res){
    res.send('Hi :) 181110476 Steven disini, Pemrograman Web Lanjutan')
})

app.listen(3000, function(){console.log('server sudah jalan di port 3000')})
