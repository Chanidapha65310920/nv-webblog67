let express = require('express');
let bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

//import routes
require('./routes')(app)

let port = 8080

app.listen(port, function(){
    console.log('Server running on http://localhost:' + port)
});