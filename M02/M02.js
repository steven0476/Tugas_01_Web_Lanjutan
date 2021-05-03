const http = require('http')

var server = http.createServer(function(req, res){
    // metode request (req) dan response (res)
    const url = req.url
    res.write('Posisi/ URL sekarang : '+url)
    res.write('\n\nHi :)\n181110476 Steven disini\nPemrograman Web Lanjutan')
    res.end()
})

server.listen(3000)