/* bringing in dependencies */

const express = require('express');

/*initialize app variables*/ 

const app = express();
const nodemailer= require('nodemailer');

//middleware

app.use(express.static('public'));
app.use(express.json()); //we added this after writing app.js


//static folder - from here extract the css


/*the rest practically just configures the app and starts a local server*/

app.get('/', (req, res) => { /*row for index page? this is used for sending in a port*/
    res.sendFile(__dirname + '/public/getintouch.html');
});

app.post('/', (req, res) => { //we added this after writing app.js - our server will be able to read json in our body, the data now get shown in the terminal
    console.log (req.body)

    const transporter = nodemailer.createTransport({
        host: 'wes1-smtp.wedos.net',
        port: 465,
        secure: true,
        auth:  {
            user: 'info@doggoland.cz',
            pass: 'Napoleon+popyna007'
        }
    }) //utilizing nodemailer - this method just passes our email data on

    const mailOptions = {
        from: 'info@doggoland.cz',
        to: 'info@doggoland.cz',
        subject: `A new client: ${req.body.email}`,
        text: `A new business inquiry from ${req.body.firstname} ${req.body.lastname}

Email: ${req.body.email}

How has the client found us: ${req.body.howdidyouhear}

Preferred amount to allocate: ${req.body.amount}

Custom message attached: ${req.body.customMess}

Client should be contacted within 5 business days as stated on the website.`
    }

    transporter.sendMail(mailOptions, (error, info)=> {
        if(error){
            console.log(error);
            res.send('error');
        }
        else{
            console.log('Email sent: ' + info.response);
            res.send('success');
        }
    })
})


app.listen(3000, () => console.log('Server started...')); /*listening on a port 3000, the rest is callback - to show the server has started*/

