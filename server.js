//require('dotenv').config({ debug: process.env.DEBUG });
var express =  require('express'); //third-part module
var app = express();
var nodemailer = require('nodemailer');
var chalk = require('chalk');
var bodyparser = require('body-parser');

const PORT = 8443;

// Crée un serveur HTTP
var cors = require('cors');
app.use(cors('*'));
app.use(bodyparser.json());


//app.use(express.static(process.cwd()+"/dist/ecommercesite/", { extensions: ['html'] }));
//app.use(express.static(process.cwd()+"/dist/ecommercesite/"));


//process.cwd() : give the pull path of dist/index file of deployment
console.log(chalk.red(process.cwd()));
 
app.get("/", function(req, res){
   res.send("root");
  //res.sendFile(process.cwd()+"/dist/ecommercesite/index.html")
});
const hostname ="197.13.27.55"
app.listen(PORT,hostname, () => {
  console.log(`Le serveur tourne à l'adresse http://${hostname}:${PORT}/`);
})