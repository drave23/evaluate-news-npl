var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require("body-parser");
const app = express()

const dotenv = require('dotenv');
dotenv.config();


app.use(express.static('dist'))
app.use(bodyParser.json());

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.post('/article',async (req,res) =>{
    let text=req.body
    let apiUrl =  `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&txt=${text}&model=general&lang=en"`;
    console.log(apiUrl);

    let response = await fetch(apiUrl).then(response => {
        try {
            const data =  response.json();
            console.log(data);

            res.send(data);
        } catch (err){
            console.log("error: ", err);
        }
    });
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


