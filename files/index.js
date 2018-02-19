var express=require('express');
var bodyParser = require('body-parser');
var app=express();
app.set('view engine', 'pug');
//app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
//app.use(bodyParser.json()); // support json encoded bodies
var jsonParser = bodyParser.json()
//app.use(express.bodyParser());
app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
  });
//
//console.log(Buffer.from("Hello World").toString('base64'));
//console.log(Buffer.from("SGVsbG8gV29ybGQ=", 'base64').toString('ascii'));
// or consider https://www.npmjs.com/package/base-64 if already in project
//
  app.all('/process-feedback',jsonParser , function (req, res) {
      //console.log(req.rawHeaders);
      console.log('Content-Type: ' + req.header('Content-Type'));
      parseInput(req, res);
    //res.render('email-resp', { title: 'Email', message: 'Hello there! Processing for email' })
  });
  app.get('/:path{0,}', function (req, res) {
    res.render('404', { title: '404!', message: '404 ...!', path: req.path })
  });
  parseInput = (req, res) => {
    console.log(req.body);
    // console.log(JSON.stringify(req.body));
    // console.log(req.path);
    let feedback = req.body.feed;
    if (feedback === undefined || feedback === null) {
      res.json({Error: 'no input'})
    }
    sendMail(feedback,res);
    //res.json({Success: 'Ok'})
    //console.log(req.bodyParser.json)
  }

var server=app.listen(3001,function() {});

sendMail = (feedback, res) => {
  var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
  user: 'qyvyzww5zrkhakws@ethereal.email',
  pass: 'vrVhQ3cEHQGzpfcymp'
  }
  });

  /*
// Create the transporter with the required configuration for Gmail
// change the user and pass !
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'youremail@gmail.com',
        pass: 'yourpassword'
    }
});
*/
//console.log("HTML: " + formatHtml(feedback));
// setup e-mail data
var mailOptions = {
    from: 'balamurugan.raman@gmail.com', // sender address (who sends)
    to: 'srbala@gmail.com', // list of receivers (who receives)
    subject: 'APPEMAIL: ' + feedback.subject , // Subject line
    text: formatText(feedback) , // plaintext body
    html: formatHtml(feedback) // html body
};
//console.log(mailOptions.html);
// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
        return res.json({Error: 'no input'})
    }

    console.log('Message sent: ' + info.response);
    return res.json({Sucess: 'Ok'})
});
};

formatHtml = (feedback) => {
  return '<div>'
    + '<h4>User Feedback</h4>'
    + '<div>' + feedback.comment.replace(/\r\n|\r|\n/g,"<br />") + '<br /><hr /></div>'
    + '<div style="background-color:rgba(0,255,0,0.3);">' 
    + '<h4>Application Data</h4>'
    + '<em>Name: </em><strong>' + feedback.name + '</strong> <br />'
    + '<em>Folder: </em><strong>' + feedback.folder + '</strong>'
    + '</div>' 
    + '</div>';
    
};
formatText = (feedback) => {
  return feedback.comment
    + '\n____________________'
    + '\nName: ' + feedback.node
    + '\nFolder: ' +feedback.folder;
};
