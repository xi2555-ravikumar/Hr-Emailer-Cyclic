const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: "outlook.office365.com",
  secureConnection: true,
  port: 587,
  auth: {
      user: 'People.Group@xebia.com',
      pass: 'qxhsxgmlhylkvxqd'
  }
});

const sendMail = ({subject, body, sending_to, attachments,ccEmails, bccEmails,}) => {

  const mailOptions = {
    from: 'People.Group@xebia.com',
    to: sending_to,
    subject: subject,
    html: body
  };

  if(ccEmails){
    mailOptions['cc'] = ccEmails
  }
  if(bccEmails){
    mailOptions['bcc'] = bccEmails
  }
  if(attachments){
    mailOptions['attachments'] = [attachments]
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        reject(error)
      } else {
        resolve(info);
      }
    });
  })
};

module.exports = sendMail;