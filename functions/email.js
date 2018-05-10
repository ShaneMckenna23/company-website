const nodemailer = require('nodemailer');

exports.handler = function(event, context) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'shanemckennadev@gmail.com',
      pass: process.env.emailPassword,
    },
  });

  const mailOptions = {
    from: 'shanemckennadev@gmail.com',
    to: 'nuclarpenguin@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
};
