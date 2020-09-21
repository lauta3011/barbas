var express = require('express');
var router = express.Router(); 
var nodemailer = require('nodemailer');
var creds = require('./config');

router.get('/', function(req, res, next){
    res.send('api');
});

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({
    host: 'smtp.live.com',
    port: 587,
    auth: {
        user: creds.USER,
        pass: creds.PASS
    },
    tls: {
        rejectUnauthorized: false
    }
});

router.post('/', function (req, res) {
    const name = req.body.name;
    const phone = req.body.phone;
    const day = req.body.day;
    const time = req.body.time;
    const servicesList = req.body.service;
    let services = '';

    for(var i = 0; i < servicesList.length; i++){
        services += servicesList[i].title + ', '; 
    }

    // setup email data with unicode symbols
    var mailOptions = {
        from: 'lauta_3011@hotmail.com',
        to: 'luser3011@gmail.com',
        subject: 'Nueva reservacion',
        text: name + ' quiere reservar un turno el dia ' + day + ' a la hora ' + time + '. Quiere ' + services +' Su numero de telefono es ' + phone 
    };
 
    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log('broke in sending mails')
            console.log(error)
            res.send(error)
        }
        res.send(info)
    });
});

module.exports = router;