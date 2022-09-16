const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: 'outlook.office365.com',
  secureConnection: false,
  port: 587,
  auth: {
    user: 'People.Group@xebia.com',
    pass: 'qxhsxgmlhylkvxqd'
  }
// host: 'smtp.office365.com', // Office 365 server
// port: 587,     // secure SMTP
// secureConnection: false,
// secure: false,
//                   requireTLS: true, // false for TLS - as a boolean not string - but the default is false so just remove this completely
// auth: {
// 	user: 'Support.EnterpriseApps@Xebia.com',
// 	pass: 'Welcome@3743'
// },
// tls: {
// 	rejectUnauthorized: false
//   }

})
// const transporter = nodemailer.createTransport({
//   host: 'outlook.office365.com',
//   secureConnection: true,
//   port: 587,
//   auth: {
//     user: 'noreply_xenie@xebia.com',
//     pass: 'tgsrbgktgyprrzdv'
//   }
// })

const sendAnniversaryEmail = ({ name, count, sending_to, cc_emails, month }) => {
  let htmlString = ''
  switch (month) {
    case 25:
      htmlString = `<body>
	  <div>
		  <style type="text/css">
			  <!--
			  .rps_af0e table
				{border-collapse:collapse;
				border:1px dotted #4c2160;

						  }
						  .content{
							color: #ece4e4;
							margin-left: 50px;
							 margin-top: 370px;
							font-size: 14px;
							font-family: system-ui;
						  }
						  @media only screen and (max-width: 600px) {
							.content{
								color: #ece4e4;
								margin-left: 10px;
								 margin-top: 370px;
								font-size: 14px;
								font-family: system-ui;
							  }
						}
			  -->
		  </style>
		  <div class="rps_af0e">
		  <div>
			  <table
				  height="600px"
				  width="600px"
				  align="center"
				  border="0"
				  cellspacing="0"
				  cellpadding="0"
				  style="background-color: #540a91"
			  >
				  <tbody>
					  <tr>
						  <td>
							  <div></div>
						  </td>
						  <td>
							  <div style="margin: 55px">
								  <img
									  data-imagetype="External"
									  src="https://i.imgur.com/ycMNZPk.png"
									  alt="header"
								  />
							  </div>
							  <div
								  style="
									  line-height: 24px;
									  letter-spacing: 0.55px;
									  margin: 5px;
									  font-family: 'Open Sans', arial, sans-serif !important;
									  color: white;
								  "
							  >
								  <p>Dear ${name}</p>
								  <p>Congratulations on becoming a part of Amethyst club.</p>
								  <p>
									  Xebia ”ADORES” you for setting an exemplary standard for
									  all of us with your work ethics and dedication. Thank you
									  for being an essential part of our success.
								  </p>

								  <p>
									  We are looking forward to a much longer association with
									  you.
								  </p>
								  Best Wishes
							  </div>
							  <div>
							  <img
								  data-imagetype="External"
								  src="https://i.imgur.com/cwOjOak.png"
								  alt="header"
								  width="300"
							  />
							  </div>
						  </td>
						  <td></td>
					  </tr>

					  <tr>
						  <td></td>
						  <td style="background-color: #540a91"></td>
						  <td></td>
					  </tr>
					  <tr style="background-color: #540a91"></tr>
					  <tr></tr>
				  </tbody>
			  </table>
		  </div>
	  </div>
  </div>
	  </div>
  </body>`
      break
    case 50:
      htmlString = `<body>
	  <div>
		  <style type="text/css">
			  <!--
			  .rps_af0e table
				{border-collapse:collapse;
				border:1px dotted #4c2160;

						  }
						  .content{
							color: #ece4e4;
							margin-left: 50px;
							 margin-top: 370px;
							font-size: 14px;
							font-family: system-ui;
						  }
						  @media only screen and (max-width: 600px) {
							.content{
								color: #ece4e4;
								margin-left: 10px;
								 margin-top: 370px;
								font-size: 14px;
								font-family: system-ui;
							  }
						}
			  -->
		  </style>
		  <div class="rps_af0e">
		  <div>
			  <table
				  height="600px"
				  width="600px"
				  align="center"
				  border="0"
				  cellspacing="0"
				  cellpadding="0"
				  style="background-color: #3a5075"
			  >
				  <tbody>
					  <tr>
						  <td>
							  <div></div>
						  </td>
						  <td>
							  <div style="margin: 55px">
								  <img
									  data-imagetype="External"
									  src="https://i.imgur.com/QUqP3wa.png"
									  alt="header"
								  />
							  </div>
							  <div
								  style="
									  line-height: 24px;
									  letter-spacing: 0.55px;
									  margin: 5px;
									  font-family: 'Open Sans', arial, sans-serif !important;
									  color: white;
								  "
							  >
								  <p>Dear ${name}</p>
								  <p>Congratulations on becoming a part of Diamond club.</p>
								  <p>
									  Xebia ”ADORES” you for setting an exemplary standard for
									  all of us with your work ethics and dedication. Thank you
									  for being an essential part of our success.
								  </p>

								  <p>
									  We are looking forward to a much longer association with
									  you.
								  </p>
								  Best Wishes
							  </div>
							  <div>
							  <img
								  data-imagetype="External"
								  src="https://i.imgur.com/cwOjOak.png"
								  alt="header"
								  width="300"
							  />
							  </div>
						  </td>
						  <td></td>
					  </tr>

					  <tr>
						  <td></td>
						  <td style="background-color: #3a5075"></td>
						  <td></td>
					  </tr>
					  <tr style="background-color: #3a5075"></tr>
					  <tr></tr>
				  </tbody>
			  </table>
		  </div>
	  </div>
  </div>
	  </div>
  </body>`
      break
    case 75:
      htmlString = `<body>
	  <div>
		  <style type="text/css">
			  <!--
			  .rps_af0e table
				{border-collapse:collapse;
				border:1px dotted #4c2160;

						  }
						  .content{
							color: #ece4e4;
							margin-left: 50px;
							 margin-top: 370px;
							font-size: 14px;
							font-family: system-ui;
						  }
						  @media only screen and (max-width: 600px) {
							.content{
								color: #ece4e4;
								margin-left: 10px;
								 margin-top: 370px;
								font-size: 14px;
								font-family: system-ui;
							  }
						}
			  -->
		  </style>
		  <div class="rps_af0e">
		  <div>
			  <table
				  height="600px"
				  width="600px"
				  align="center"
				  border="0"
				  cellspacing="0"
				  cellpadding="0"
				  style="background-color: #5A5344"
			  >
				  <tbody>
					  <tr>
						  <td>
							  <div></div>
						  </td>
						  <td>
							  <div style="margin: 55px">
								  <img
									  data-imagetype="External"
									  src="https://i.imgur.com/NzCnC4D.png"
									  alt="header"
								  />
							  </div>
							  <div
								  style="
									  line-height: 24px;
									  letter-spacing: 0.55px;
									  margin: 5px;
									  font-family: 'Open Sans', arial, sans-serif !important;
									  color: white;
								  "
							  >
								  <p>Dear ${name}</p>
								  <p>Congratulations on becoming a part of Onyx club.</p>
								  <p>
									  Xebia ”ADORES” you for setting an exemplary standard for
									  all of us with your work ethics and dedication. Thank you
									  for being an essential part of our success.
								  </p>

								  <p>
									  We are looking forward to a much longer association with
									  you.
								  </p>
								  Best Wishes
							  </div>
							  <div>
							  <img
								  data-imagetype="External"
								  src="https://i.imgur.com/cwOjOak.png"
								  alt="header"
								  width="300"
							  />
							  </div>
						  </td>
						  <td></td>
					  </tr>

					  <tr>
						  <td></td>
						  <td style="background-color: #5A5344"></td>
						  <td></td>
					  </tr>
					  <tr style="background-color: #5A5344"></tr>
					  <tr></tr>
				  </tbody>
			  </table>
		  </div>
	  </div>
  </div>
	  </div>
  </body>`
      break
    case 100:
      htmlString = `<body>
	  <div>
		  <style type="text/css">
			  <!--
			  .rps_af0e table
				{border-collapse:collapse;
				border:1px dotted #4c2160;

						  }
						  .content{
							color: #ece4e4;
							margin-left: 50px;
							 margin-top: 370px;
							font-size: 14px;
							font-family: system-ui;
						  }
						  @media only screen and (max-width: 600px) {
							.content{
								color: #ece4e4;
								margin-left: 10px;
								 margin-top: 370px;
								font-size: 14px;
								font-family: system-ui;
							  }
						}
			  -->
		  </style>
		  <div class="rps_af0e">
		  <div>
			  <table
				  height="600px"
				  width="600px"
				  align="center"
				  border="0"
				  cellspacing="0"
				  cellpadding="0"
				  style="background-color: #17243A"
			  >
				  <tbody>
					  <tr>
						  <td>
							  <div></div>
						  </td>
						  <td>
							  <div style="margin: 55px">
								  <img
									  data-imagetype="External"
									  src="https://i.imgur.com/uGD9k6Z.png"
									  alt="header"
								  />
							  </div>
							  <div
								  style="
									  line-height: 24px;
									  letter-spacing: 0.55px;
									  margin: 5px;
									  font-family: 'Open Sans', arial, sans-serif !important;
									  color: white;
								  "
							  >
								  <p>Dear ${name}</p>
								  <p>Congratulations on becoming a part of Ruby club.</p>
								  <p>
									  Xebia ”ADORES” you for setting an exemplary standard for
									  all of us with your work ethics and dedication. Thank you
									  for being an essential part of our success.
								  </p>

								  <p>
									  We are looking forward to a much longer association with
									  you.
								  </p>
								  Best Wishes
							  </div>
							  <div>
							  <img
								  data-imagetype="External"
								  src="https://i.imgur.com/cwOjOak.png"
								  alt="header"
								  width="300"
							  />
							  </div>
						  </td>
						  <td></td>
					  </tr>

					  <tr>
						  <td></td>
						  <td style="background-color: #17243A"></td>
						  <td></td>
					  </tr>
					  <tr style="background-color: #17243A"></tr>
					  <tr></tr>
				  </tbody>
			  </table>
		  </div>
	  </div>
  </div>
	  </div>
  </body>`
      break
    case 125:
      htmlString = `<body>
	  <div>
		  <style type="text/css">
			  <!--
			  .rps_af0e table
				{border-collapse:collapse;
				border:1px dotted #4c2160;

						  }
						  .content{
							color: #ece4e4;
							margin-left: 50px;
							 margin-top: 370px;
							font-size: 14px;
							font-family: system-ui;
						  }
						  @media only screen and (max-width: 600px) {
							.content{
								color: #ece4e4;
								margin-left: 10px;
								 margin-top: 370px;
								font-size: 14px;
								font-family: system-ui;
							  }
						}
			  -->
		  </style>
		  <div class="rps_af0e">
		  <div>
			  <table
				  height="600px"
				  width="600px"
				  align="center"
				  border="0"
				  cellspacing="0"
				  cellpadding="0"
				  style="background-color: #201E1B"
			  >
				  <tbody>
					  <tr>
						  <td>
							  <div></div>
						  </td>
						  <td>
							  <div style="margin: 55px">
								  <img
									  data-imagetype="External"
									  src="https://i.imgur.com/lmAvVZK.png"
									  alt="header"
								  />
							  </div>
							  <div
								  style="
									  line-height: 24px;
									  letter-spacing: 0.55px;
									  margin: 5px;
									  font-family: 'Open Sans', arial, sans-serif !important;
									  color: white;
								  "
							  >
								  <p>Dear ${name}</p>
								  <p>Congratulations on becoming a part of Emerald club.</p>
								  <p>
									  Xebia ”ADORES” you for setting an exemplary standard for
									  all of us with your work ethics and dedication. Thank you
									  for being an essential part of our success.
								  </p>

								  <p>
									  We are looking forward to a much longer association with
									  you.
								  </p>
								  Best Wishes
							  </div>
							  <div>
							  <img
								  data-imagetype="External"
								  src="https://i.imgur.com/cwOjOak.png"
								  alt="header"
								  width="300"
							  />
							  </div>
						  </td>
						  <td></td>
					  </tr>

					  <tr>
						  <td></td>
						  <td style="background-color: #201E1B"></td>
						  <td></td>
					  </tr>
					  <tr style="background-color: #201E1B"></tr>
					  <tr></tr>
				  </tbody>
			  </table>
		  </div>
	  </div>
  </div>
	  </div>
  </body>`
      break
    case 200:
      htmlString = `<body>
	  <div>
		  <style type="text/css">
			  <!--
			  .rps_af0e table
				{border-collapse:collapse;
				border:1px dotted #4c2160;

						  }
						  .content{
							color: #ece4e4;
							margin-left: 50px;
							 margin-top: 370px;
							font-size: 14px;
							font-family: system-ui;
						  }
						  @media only screen and (max-width: 600px) {
							.content{
								color: #ece4e4;
								margin-left: 10px;
								 margin-top: 370px;
								font-size: 14px;
								font-family: system-ui;
							  }
						}
			  -->
		  </style>
		  <div class="rps_af0e">
		  <div>
			  <table
				  height="600px"
				  width="600px"
				  align="center"
				  border="0"
				  cellspacing="0"
				  cellpadding="0"
				  style="background-color: #252582"
			  >
				  <tbody>
					  <tr>
						  <td>
							  <div></div>
						  </td>
						  <td>
							  <div style="margin: 55px">
								  <img
									  data-imagetype="External"
									  src="https://i.imgur.com/cZXHgxe.png"
									  alt="header"
								  />
							  </div>
							  <div
								  style="
									  line-height: 24px;
									  letter-spacing: 0.55px;
									  margin: 5px;
									  font-family: 'Open Sans', arial, sans-serif !important;
									  color: white;
								  "
							  >
								  <p>Dear ${name}</p>
								  <p>Congratulations on becoming a part of Sapphire club.</p>
								  <p>
									  Xebia ”ADORES” you for setting an exemplary standard for
									  all of us with your work ethics and dedication. Thank you
									  for being an essential part of our success.
								  </p>

								  <p>
									  We are looking forward to a much longer association with
									  you.
								  </p>
								  Best Wishes
							  </div>
							  <div>
							  <img
								  data-imagetype="External"
								  src="https://i.imgur.com/cwOjOak.png"
								  alt="header"
								  width="300"
							  />
							  </div>
							  
						  </td>
						  <td></td>
					  </tr>

					  <tr>
						  <td></td>
						  <td style="background-color: #252582"></td>
						  <td></td>
					  </tr>
					  <tr style="background-color: #252582"></tr>
					  <tr></tr>
				  </tbody>
			  </table>
		  </div>
	  </div>
  </div>
	  </div>
  </body>`
      break
    default:
      break
  }

  const mailOptions = {
    from: 'People.Group@xebia.com',
    to: sending_to,
    cc: cc_emails,
    subject: `Congratulations ${name} for completing ${count} months with Xebia`,
    html: htmlString
  } 
//comenting
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
		  console.log(error)
        reject(error)
      } else {
        resolve(info)
      }
    })
  })
}
//testing with html string
module.exports = sendAnniversaryEmail
