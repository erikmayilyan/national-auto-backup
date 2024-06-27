const nodeMailer = require('nodemailer');

const contactHome = (req, res) => {
  console.log('req body', req.body);
  res.status(200).json({ message: "Request received successfully" });

  const {
    fullName,
    email,
    message
  } = req.body;

  let transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mayilyane9@gmail.com',
      pass: 'ttohiiceapkptdhb'
    }
  });

  let theMessage = {
    from: email,
    to: 'mayilyane9@gmail.com, businessmayilyan@gmail.com',
    subject: 'Contact Request (From Home Page)',
    html: `<html>
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');

          body {
            background-color: #0a0a0a;
            padding: 20px;
          }
          .container {
            background-color: #ffffff;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .title h1 {
            color: white;
            font-family: 'Orbitron', sans-serif;
          }
          .title h3 {
            color: white;
            font-family: 'Orbitron', sans-serif;
          }
          h3 {
            color: #333333;
          }
          .info {
            margin-top: 20px;
          }
          .info p {
            margin: 5px 0;
          }
          .title {
            background-color: black;
            color: black;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .title h1 {
            text-align: center;
            margin-bottom: 5px;
            color: #fff;
          }
          .title h3 {
            color: #fff;
            text-align: center;
            margin-bottom: 10px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="title">
            <h1>NATIONAL AUTO</h1>
            <h3>Contact Request (Home Page)</h3>
          </div>
          <div class="info">
            <p><strong>Full Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>
          </div>
        </div>
      </body>
    </html>` 
  };

  transporter.sendMail(theMessage, (error, info) => {
    if (error) {
      console.log("Error in sending mail", error);
      return res.status(400).json({
        message: `Error in sending mail ${error}`
      });
    } else {
      console.log("Successfully sent the mail", info);
      return res.json({
        message: info
      })
    }
  });
};

module.exports = contactHome;