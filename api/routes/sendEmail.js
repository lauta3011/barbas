var express = require('express');
var router = express.Router(); 
var nodemailer = require('nodemailer');
var creds = require('./config');

router.get('/', function(req, res, next){
    res.send('api');
});

//TODO ESTO QUEDO DEPRECADO PQ AHORA MANDAMOS MENSAJES POR WPP  

// create reusable transporter object using the default SMTP transport
// var transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false,
//     requireTLS: true,
//       auth: {
//         user: creds.USER,
//         pass: creds.PASS
//     }
// });

// router.post('/', function (req, res) {
//     const name = req.body.name;
//     const phone = req.body.phone;
//     let emailText = '';
//     let subject = '';

//     if(req.body.type === 'Reservacion'){
//         const day = req.body.day;
//         const time = req.body.time;
//         const servicesList = req.body.service;
//         let services = '';
    
//         for(var i = 0; i < servicesList.length; i++){
//             services += servicesList[i].title + ', '; 
//         }
//         subject = req.body.type;
//         emailText = name + ' quiere reservar un turno el dia ' + day + ' a la hora ' + time + '. Quiere ' + services +' Su numero de telefono es ' + phone ;
    
//     }else if(req.body.type === 'Producto') {
//         const comment = req.body.extraComment;
//         const product = req.body.productName;
//         const price = req.body.price;
        
//         subject = req.body.type;    
//         emailText = name + ' quiere reservar el producto ' + product + ' al precio ' + price + '. En caso de que haya o no haya stock de este producto, avisarle al numero ' + phone ;
//         if(comment !== ''){
//             emailText += '. El usuario dejo este comentario: "' + comment + '".';
//         }else{
//             emailText += '. El usuario no dejo comentarios extra.';
//         }
//     }

//     // setup email data with unicode symbols
//     var mailOptions = {
//         from: 'barbas.barbershop1@gmail.com',
//         to: 'barbas.barbershop1@gmail.com',
//         subject: subject,
//         text: emailText
//     };
 
//     // send mail with defined transport object
//     transporter.sendMail(mailOptions, function (error, info) {
//         if (error) {
//             console.log('broke in sending mails')
//             console.log(error)
//             res.send(error)
//         }
//         res.send(info)
//     });
// });

module.exports = router;