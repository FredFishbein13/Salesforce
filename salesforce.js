var express = require( 'express' ); //Adding Express
var app = express();
const path = require('path');
app.set( 'port', process.env.PORT || 3001 );
var SF = require('./sfopertions');
var  cors = require('cors');
var  router = express.Router();
var  bodyParser = require('body-parser');
var http = require( 'http' ); //Adding http
var jsforce = require('jsforce'); //Adding JsForce
const recordsRouter = require('./routes/records')


//View Engine 
app.set("view engine", "ejs")

app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extend:true}));
app.use(bodyParser.json())


app.use('/api', router);

app.get('/', function (req, res) {
  res.render('Main')
});

// api/records
router.use('/records', recordsRouter)


http.createServer( app ).listen( app.get( 'port' ), function (){
    console.log( 'Express server listening on port ' + app.get( 'port' ));
    });

