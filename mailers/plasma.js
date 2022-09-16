const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: "outlook.office365.com",
  secureConnection: true,
  port: 587,
  auth: {
      user: 'noreply_xenie@xebia.com',
      pass: 'tgsrbgktgyprrzdv'
  }
});

const sendMail = ({emp_email, emp_name, emp_num1, emp_num2, emp_blood_grp, emp_location, emp_additional_info, sending_to}) => {
  const htmlString = `<div class="rps_43ba"><div><div class="x__3U2q6dcdZCrTrR_42Nxby x_JWNdg1hee9_Rz6bIGvG1c x_allowTextSelection"><div><div class="x_rps_bf32"><div dir="ltr">Hi All,
  <div>Our employee ${emp_name ? emp_name : ''} has requested for Plasma Donation, please reach out if you can help or refer someone who can help.</div><div><br></div><div>Please find the details for the same:-</div><div><br></div><div><table cellspacing="0" cellpadding="1" width="" style="border-collapse:collapse"><tbody><tr style="background-color:rgb(255,255,255)"><td style="border-width:1px; border-style:solid; border-color:rgb(171,171,171)">Mobile Number</td><td style="width:558px; border-width:1px; border-style:solid; border-color:rgb(171,171,171)">
  <span style="color:rgb(0,0,0); font-size:14px; background-color:rgb(255,255,255); display:inline!important">${emp_num1 ? emp_num1: ''}, ${emp_num2 ? emp_num2: ''}</span><br></td></tr><tr style="background-color:rgb(255,255,255)"><td style="width:166px; border-width:1px; border-style:solid; border-color:rgb(171,171,171)"><span style="color:rgb(0,0,0); font-size:14px; background-color:rgb(255,255,255); display:inline!important">DonorBlood Group<span>&nbsp;</span></span><br></td><td style="border-width:1px; border-style:solid; border-color:rgb(171,171,171)">
  <span style="color:rgb(0,0,0); font-size:14px; background-color:rgb(255,255,255); display:inline!important">${emp_blood_grp ? emp_blood_grp: ''}</span><br></td></tr><tr style="background-color:rgb(255,255,255)"><td style="border-width:1px; border-style:solid; border-color:rgb(171,171,171)"><span style="color:rgb(0,0,0); font-size:14px; background-color:rgb(255,255,255); display:inline!important">Hospital<span>&nbsp;</span></span><br></td><td style="border-width:1px; border-style:solid; border-color:rgb(171,171,171)">
  <span style="color:rgb(0,0,0); font-size:14px; background-color:rgb(255,255,255); display:inline!important">${emp_location ? emp_location: ''}</span><br></td></tr><tr style="background-color:rgb(255,255,255)"><td style="border-width:1px; border-style:solid; border-color:rgb(171,171,171)"><span style="color:rgb(0,0,0); font-size:14px; background-color:rgb(255,255,255); display:inline!important">Additional Info<span>&nbsp;</span></span><br></td><td style="border-width:1px; border-style:solid; border-color:rgb(171,171,171)">
  <span style="color:rgb(0,0,0); font-size:14px; background-color:rgb(255,255,255); display:inline!important">${emp_additional_info ? emp_additional_info: ''}</span></td></tr></tbody></table></div><div>&nbsp;</div><div>You can also find above details on our <a href="https://myxebia.web.app/covid-corner/"target="_blank" rel="noopener noreferrer" data-auth="NotApplicable"title=" https://myxebia.web.app/covid-corner/" data-linkindex="0">myXebia Intranet portal</a>. Thanks for your support in advance.</div><div>&nbsp;</div><div>Regards,</div><div>Team HR</div><br></div></div></div></div></div></div>`

  const mailOptions = {
    from: 'noreply_xenie@xebia.com',
    to: sending_to,
    cc: emp_email,
    subject: 'URGENT - Plasma Donors Required',
    html: htmlString
  };

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