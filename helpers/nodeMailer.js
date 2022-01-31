const nodemailer = require("nodemailer")
const dotenv = require("dotenv")
dotenv.config()

module.exports = {
        // nodemailer configuration
        transporter: nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        serure: false,
        port: 587,
        tls:{
            ciphers: 'SSLv3'
        },
        requireTLS: true,
        // service: 'hotmail',
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.PASSWORD
        }
    }),
    
    // declaring username to dynamically pass the username on sign up
    username: '',
    
    // mailing options
    mailOptions: {
        from: 'xyz@outlook.com',
        to: '',
        subject: 'Sending an Email from Node.js Assignment',
        text: `Welcome ` + this.username    // need to check to dynamically display the username
    }
}