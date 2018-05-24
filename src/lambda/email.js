const CONTACT_ADDRESS = 'shanemckennadev@gmail.com';
const querystring = require('querystring');

const mailer = require('nodemailer').createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.GMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSWORD,
  },
});

exports.handler = (event, context, callback) => {
  const body = querystring.parse(event.body);
  mailer.sendMail(
    {
      from: body.from,
      to: [CONTACT_ADDRESS],
      subject: body.subject || '[No subject]',
      html: body.message || '[No message]',
    },
    (err, info) => {
      if (err) return callback(err);
      callback(null, { statusCode: 200, body: 'Success!' });
    }
  );
};
