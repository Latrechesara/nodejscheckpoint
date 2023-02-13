var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'latreche.sara93@gmail.com',
    pass: 'xxxx'
  }
});

var mailOptions = {
  from: 'latreche.sara93@gmail.com',
  to: 'messaadhammache@gmail.com',
  subject: 'Sending Email using Node.js',
  text: `Hi mom, Ilove you this is me .
         `
          
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});