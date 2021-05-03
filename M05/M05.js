const express = require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded())

// routing: rute /
app.get('/', function(req, res){
    res.send(
        `
            <html>
                <body>
                    <form action = "/nama" method="POST">
                        <label>Siapa namamu?</label>
                        <input name="nama"/>
                        <button>Lanjut</button>
                    </form>    
                </body>
            </html>
        `
    )
    res.end()
})

// routing: rute /, method post
app.post('/nama', function(req, res){
    // body parse
    console.log(req.body)
    res.send(
        `
            <html>
                <body>
                    <p> 
                        Hi, `+req.body.nama+`.
                    </p>    
                </body>
            </html>
        `
    )
    res.end()
})

//:name adalah param
//usia menggunakan query yang ditulis langsung di address bar, contoh /nama/Steven?usia=20
app.get('/nama/:name', function(req, res){
    res.send(
        `
            <html>
                <body>
                    <p>Nama : `+req.params.name+`</p>
                    <p>Usia : `+req.query.usia+`  
                </body>
            </html>
        `
    )
    res.end()
})

app.listen(3000, function(){console.log('server sudah jalan di port 3000')})
