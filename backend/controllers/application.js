const nodeMailer = require('nodemailer');

const applicationMail = (req, res) => {
  console.log('req body', req.body);
  res.status(200).json({ message: "Request received successfully" });

  const {
    firstName,
    lastName,
    email,
    phone,
    dateBirth,
    license,
    socialSecurity,
    status,
    currAddress,
    city,
    state,
    zipCode,
    yearsLived,
    prevAddress,
    prevCity,
    prevState,
    prevZipCode,
    prevYearsLived,
    currOccupation,
    currEmployer,
    empPhoneNumber,
    yearsWorking,
    empAddress,
    empCity,
    empState,
    empZipCode,
    prevOccupation,
    prevEmployer,
    prevEmpPhoneNumber,
    prevYearsWorking,
    prevEmployerAddress,
    prevEmpCity,
    prevEmpState,
    prevEmpZipCode,
    totalGrossIncome,
    residence,
    monthlyPayment,
    checkingAccount,
    enterMessage
  } = req.body;

  let transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mayilyane9@gmail.com',
      pass: 'ttohiiceapkptdhb'
    }
  });

  let message = {
    from: email,
    to: 'mayilyane9@gmail.com, businessmayilyan@gmail.com',
    subject: "New Credit Application",
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
            <h3>Credit Application Details</h3>
          </div>
          <div class="info">
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Date of Birth:</strong> ${dateBirth}</p>
            <p><strong>Driver's License:</strong> ${license}</p>
            <p><strong>Social Security Number:</strong> ${socialSecurity}</p>
            <p><strong>Status:</strong> ${status}</p>
            <p><strong>Current Address:</strong> ${currAddress}</p>
            <p><strong>City:</strong> ${city}</p>
            <p><strong>State:</strong> ${state}</p>
            <p><strong>ZIP Code:</strong> ${zipCode}</p>
            <p><strong>Years Lived There:</strong> ${yearsLived}</p>
            <p><strong>Previous Address:</strong> ${prevAddress}</p>
            <p><strong>Previous City:</strong> ${prevCity}</p>
            <p><strong>Previous State:</strong> ${prevState}</p>
            <p><strong>Previous ZIP Code:</strong> ${prevZipCode}</p>
            <p><strong>Years Lived At Previous Address:</strong> ${prevYearsLived}</p>
            <h3>Employment Information</h3>
            <p><strong>Current Occupation:</strong> ${currOccupation}</p>
            <p><strong>Current Employer:</strong> ${currEmployer}</p>
            <p><strong>Employer Phone Number:</strong> ${empPhoneNumber}</p>
            <p><strong>Years Working There:</strong> ${yearsWorking}</p>
            <p><strong>Employer's Address:</strong> ${empAddress}</p>
            <p><strong>City:</strong> ${empCity}</p>
            <p><strong>State:</strong> ${empState}</p>
            <p><strong>ZIP Code:</strong> ${empZipCode}</p>
            <p><strong>Previous Occupation:</strong> ${prevOccupation}</p>
            <p><strong>Previous Employer:</strong> ${prevEmployer}</p>
            <p><strong>Previous Employer Phone Number:</strong> ${prevEmpPhoneNumber}</p>
            <p><strong>Years Working There:</strong> ${prevYearsWorking}</p>
            <p><strong>Previous Employer's Address:</strong> ${prevEmployerAddress}</p>
            <p><strong>Previous City:</strong> ${prevEmpCity}</p>
            <p><strong>Previous State:</strong> ${prevEmpState}</p>
            <p><strong>Previous ZIP Code:</strong> ${prevEmpZipCode}</p>
            <h3>Financial Information</h3>
            <p><strong>Total Monthly Gross Income:</strong> ${totalGrossIncome}</p>
            <p><strong>Residence:</strong> ${residence}</p>
            <p><strong>Rent or Mortgage Monthly Payment:</strong> ${monthlyPayment}</p>
            <p><strong>Checking Account With:</strong> ${checkingAccount}</p>
            <p><strong>Message:</strong> ${enterMessage}</p>
          </div>
        </div>
      </body>
    </html>`
  };

  transporter.sendMail(message, (error, info) => {
    if (error) {
      console.log("Error in sending mail", error);
      return res.status(400).json({
        message: `Error in sending mail ${error}`
      });
    } else {
      console.log("Successfully sent the mail", info);
      return res.json({
        message: info
      });
    }
  });
};

module.exports = applicationMail;