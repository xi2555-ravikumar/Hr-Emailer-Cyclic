const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: 'outlook.office365.com',
  secureConnection: true,
  port: 587,
  auth: {
    user: 'People.Group@xebia.com',
    pass: 'qxhsxgmlhylkvxqd'
  }
})

const sendMail = ({ name, avatarUrl, sending_to, cc_emails }) => {
  const htmlString = `<div><style type="text/css">
  <!--
  .rps_af0e table
    {border-collapse:collapse;
    border:1px dotted #4c2160}
  -->
  </style>
  <div class="rps_af0e">
  <div>
  <table height="400px" width="600px" align="center" border="0" cellspacing="0" cellpadding="0" style="background-color:#FFF8E3">
  <tbody>
  <tr>
  <td><img data-imagetype="External" src="https://i.imgur.com/OAJ0Cnr.png" alt="header">
  </td>
  <td style="background-color:#FFF8E3">
  <div><img data-imagetype="External" src="https://i.imgur.com/9XE8gf2.png"> </div>
  <div style="text-align:center"><img data-imagetype="External" src="${avatarUrl}" height="100" width="100" style="border-radius:50%">
  </div>
  <div style="text-align:center; font-family:arial; color:#000; font-weight:bold; margin-top:13px">
  <b><i>${name}</i></b></div>
  <div><img data-imagetype="External" src="https://i.imgur.com/JOPUjsk.png"> </div>
  </td>
  <td><img data-imagetype="External" src="https://i.imgur.com/w2X0vYx.png" alt="footer">
  </td>
  </tr>
  <tr style="background-color:#FFF8E3">
  </tr>
  <tr>
  </tr>
  </tbody>
  </table>
  </div>
  </div>
  </div>`

  const mailOptions = {
    from: 'People.Group@xebia.com',
    to: sending_to,
    cc: cc_emails,
    subject: `Happy Birthday ${name}`,
    html: htmlString
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        reject(error)
      } else {
        resolve(info)
      }
    })
  })
}

module.exports = sendMail
