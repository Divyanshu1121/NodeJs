const express = require('express');
const port = 8081;
const app = express();
const Qrcode = require('qrcode');

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    return res.render('index');
})

app.get('/qrcode', (req, res) => {
    const url = 'https://www.primevideo.com';

    Qrcode.toDataURL(url, (err, qrCodeUrl) => {
        if (err) {
            console.log("Server not Started");
            return false;
        }
        res.send(`
           <!DOCTYPE HTML>
            <html>
           <head>
           <title>QR Code Generator</title>
           </head>
           <body>
           <h1>QR Code Generator</h1>
           <img src="${qrCodeUrl}" alt="QR Code">
           <p>Scan the QR Code to Visit the Website</p>
           </body>
           </html>  `)
    })
})

app.listen(port, (err) => {
    if (err) {
        console.log("Server not Started");
        return false;
    }
    console.log("Server Start On http://localhost:" + port);

})