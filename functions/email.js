const aws = require('aws-sdk');

const ses = new aws.SES({
  region: 'us-west-2',
});

exports.handler = function(event, context) {
  console.log('Incoming: ', event);
  // var output = querystring.parse(event);

  const eParams = {
    Destination: {
      ToAddresses: ['shanemckenna23@hotmail.co.uk'],
    },
    Message: {
      Body: {
        Text: {
          Data: 'Hey! What is up?',
        },
      },
      Subject: {
        Data: 'Email Subject!!!',
      },
    },
    Source: 'test@test.com',
  };

  var email = ses.sendEmail(eParams, (err, data) => {
    if (err) console.log(err);
    else {
      context.succeed(event);
    }
  });
};
