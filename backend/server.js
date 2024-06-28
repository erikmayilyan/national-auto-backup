const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/User');
const TeamMemberModel = require('./models/TeamMember');
const applicationMail = require('./controllers/application');
const contactHome = require('./controllers/contactHome');
const contactPage = require('./controllers/contactPage');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { secretKey } = require('./config');
const authenticateToken = require('./middleware/auth');
const nodemailer = require('nodemailer');

const app = express();
const port = 5102;

app.use(cors());
app.use(express.json());

app.use((err, req, res, next) => {
  console.error("Error:", err.stack);
  res.status(500).send('Something went wrong!');
});

mongoose.connect("mongodb+srv://nationa-backup:SQgMmUlvFBEzWb5M@atlascluster.nfkaonm.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

/* const secretKey = crypto.randomBytes(32).toString('hex'); */

const hashPassword = (password) => {
  return crypto.createHash('sha256').update(password).digest('hex');
};

app.post('/thelogin', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email: email });
    if (user) {
      const inputHashedPassword = hashPassword(password);
      if (inputHashedPassword === user.password) {
        const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' });
        res.json({ token, message: "Success" });
      } else {
        res.json({ message: "The email or the password is incorrect" });
      }
    } else {
      res.json({ message: "Such account does not exist" }); 
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: "Login failed" });
  }
});

app.post('/forgot-password', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await UserModel.findOne({ email: email });
    if (!user) {
      console.log(`User with email ${email} not found.`);
      return res.status(404).send({ Status: "User does not exist!" });
    }

    const token = jwt.sign({ email }, secretKey, { expiresIn: "1h" });

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'mayilyane9@gmail.com',
        pass: 'ttohiiceapkptdhb'
      }
    });

    let mailOptions = {
      from: 'mayilyane9@gmail.com',
      to: email,
      subject: 'Reset Password',
      text: `https://national-auto-backup-frontend.onrender.com/reset-password/${email}/${token}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).send({ Status: "Email send failed", error: error.message });
      } else {
        console.log('Email sent: ' + info.response);
        return res.send({ Status: "Success" });
      }
    });
  } catch (error) {
    console.error('Error in /forgot-password:', error);
    res.status(500).send({ Status: "Server error", error: error.message });
  }
});

app.post('/reset-password/:email/:token', (req, res) => {
  const { email, token } = req.params;
  const { password } = req.body;

  console.log("EMAIL", email);
  console.log("TOKEN", token);
  console.log("PASSWORD", password);

  jwt.verify(token, secretKey, (error, decoded) => {
    if (error) {
      console.error('Error with token:', error);
      return res.status(400).json({ Status: "Error with token", error });
    } else {
      const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
      
      UserModel.findOneAndUpdate({ email: email }, { password: hashedPassword })
        .then(() => {
          res.json({ Status: "Success" });
        })
        .catch(error => {
          console.error('Error updating password:', error);
          res.status(500).json({ Status: "Failed to update password" });
        });
    }
  });
});

app.post('/team-members', authenticateToken, async (req, res) => {
  const { name, occupation, cell, email } = req.body;
  try {
    const newTeamMember = new TeamMemberModel({ name, occupation, cell, email });
    await newTeamMember.save();
    res.status(201).json(newTeamMember);
  } catch (error) {
    res.status(500).json({
      message: 'Error creating team member', error
    });
  }
});

app.get('/team-members/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  try {
    const teamMember = await TeamMemberModel.findById(id);
    if (!teamMember) {
      return res.status(404).json({ message: 'Team member not found' });
    }
    res.json(teamMember);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching team member', error });
  }
});

app.get('/team-members', authenticateToken, async (req, res) => {
  try {
    const teamMembers = await TeamMemberModel.find();
    res.json(teamMembers);
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching team members', error
    });
  }
});

app.get('/the-team-members', async (req, res) => {
  try {
    const teamMembers = await TeamMemberModel.find();
    res.json(teamMembers);
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching team members', error
    });
  }
});

app.put('/team-members/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { name, occupation, cell, email } = req.body;
  try {
    const updatedTeamMember = await TeamMemberModel.findByIdAndUpdate(id, { name, occupation, cell, email }, { new: true });
    if (!updatedTeamMember) {
      return res.status(404).json({
        message: 'Team member not found'
      });
    }
    res.json(updatedTeamMember);
  } catch (error) {
    res.status(500).json({ message: 'Error updating team member', error });
  }
});

app.delete('/team-members/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTeamMember = await TeamMemberModel.findByIdAndDelete(id);
    if (!deletedTeamMember) {
      return res.status(404).json({ message: 'Team member not found' });
    }
    res.json({ message: 'Team member deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting team member', error });
  }
});

app.get('/api/reviews', async (req, res, next) => {
  const placeId = 'ChIJPwcd-mzqwoARsd-KPiGawvM';
  const apiKey = 'AIzaSyARvfALdzq1ngnn1eEmPgmo5lW28UN0Uy0';

  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`
    );

    if (response.data && response.data.result && response.data.result.reviews) {
      const reviews = response.data.result.reviews.slice(0, 10);
      res.json(reviews);
    } else {
      res.status(404).send('No reviews found for this place');
    }

    console.log(response.data);
  } catch (error) {
    next(error);
  }
});

app.post("/applicationmail", applicationMail);

app.post('/contactHome', contactHome);

app.post('/contactPage', contactPage);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
