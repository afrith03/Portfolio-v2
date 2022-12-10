// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {


  if (req.method === 'POST') {
    // Process a POST request
    require('dotenv').config()
    
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,
     // host: "smtp.gmail.com",
      service: "Gmail",
      auth: {
        user: "afrithshariff20@gmail.com",
        pass: process.env.password,
      },
      secure: true,
    })
    const mailData = {
      from: 'afrithshariff20@gmail.com',
      to: req.body.email,
      bcc: "afrith.s@dyooti.com",
      subject: `Got your message,${req.body.name}!`,
      //text: req.body.description + " | Sent from: " + req.body.email,
      html: `<div>${req.body.description}</div><p>Sent from:
      ${req.body.email}</p>`
    }
    transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info)
    })
    res.status(200)
  } else {
    // Handle any other HTTP method
    res.status(200).json({ name: 'John Doe' })
  }
}
