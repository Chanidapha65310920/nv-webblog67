let express = require('express');
let bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.get('/status', function(req, res){
    console.log('------------------------------');
    console.log(req);
    console.log('------------------------------');
    res.send('Hello nodejs server');
})

app.get('/hello/:person', function (req,res) {
    console.log('hello - ' + req.params.person)
    res.send('sey hello with ' + req.params.person)
})

app.get('/user/:userId', function (req,res) {
    res.send('ดูข้อมูลผู้ใช้งานคนที่'+ req.params.userId)
})

app.get('/users', function (req,res) {
    res.send('เรียกข้อมูลผู้ใช้งานทั้งหมด'+ req.params.userId)
})

app.post('/user/',function (req, res){
    res.send('ทำการสร้างผู้ใช้งาน: ' + JSON.stringify(req.body))
})

app.put('/user/:userId', function (req, res) { res.send('ทำการแก้ไขผู้ใช้งาน:' + req.params.userId + ' : ' +
JSON.stringify(req.body)) })

let port = 8080

app.listen(port, function(){
    console.log('Server running on http://localhost:' + port)
});