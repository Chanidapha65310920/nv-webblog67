let express = require('express');
let bodyParser = require('body-parser');
const {sequelize} = require('./models');
const config = require('./config/config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

//import routes
require('./routes')(app)

let port = config.port; 

sequelize.sync({force: false}).then(() => { 
    app.listen(port, function () {
        console.log('Server running on ' + port) 
    })
})