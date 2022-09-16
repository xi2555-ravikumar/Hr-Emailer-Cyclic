const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "outlook.office365.com",
  secureConnection: true,
  port: 587,
  auth: {
    user: "noreply_xenie@xebia.com",
    pass: "tgsrbgktgyprrzdv",
  },
});

const sendMail = ({ badge_image_url, badge_name, badge_url, sending_to }) => {
  const htmlString = `<center style="width:100%;background:#F2F2F2;text-align:left">
  <div style="max-width:600px;margin:auto;padding:24px;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width:600px;" bgcolor="#141414">
      <tbody>
        <tr>
          <td bgcolor="#1D1D1D" align="center" valign="top" style="text-align:center;background-position:center center!important;background-size:cover!important">      
            <div>
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" width="100%" style="max-width:600px;margin:auto">
                <tbody>
                  <tr>
                    <td align="right" valign="middle">
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" width="100%" style="max-width:600px;margin:auto">
                        <tbody>
                          <tr>
                            <td valign="middle" style="text-align:center;padding:0">
                              <img src="https://drive.google.com/uc?export=view&id=1VVQhGGZZ_M2VKRoIgCSyY0ruW1OHOQtd" width="100%" alt="Header" border="0" style="display:block;height:auto;font-family:'Roboto',sans-serif;font-size:15px;line-height:20px;color:#fff" class="CToWUd a6T" tabindex="0">
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>   
            </div>  
          </td>
        </tr>
        <tr>
          <td bgcolor="#141414">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" align="center" bgcolor="#FFFFFF">
              <tbody>
                <tr>
                  <td style="padding:38px 40px 0px 40px;text-align:center">
                    <h1 style="margin:0;font-family:'Roboto','Arial',sans-serif;font-size:25px;line-height:40px;color:#373A3C;font-weight:bold;letter-spacing:0px">${badge_name}</h1>
                  </td>
                </tr>
                <tr>
                <td style="padding:30px;text-align:center">
                  <img src="${badge_image_url}" width="100%" alt="Welcome Back!" border="0" style="display:block;height:auto;font-family:'Roboto',sans-serif;font-size:15px;line-height:20px;color:#fff;max-width:360px;margin:0 auto" tabindex="0">
                </td>
                </tr>
                <tr>
                  <td style="padding:0px 40px 20px 40px;font-family:'Roboto',sans-serif;font-size:17px;line-height:20px;color:#373A3C;text-align:center;font-weight:300">
                    <p style="margin:0 0 5px 0">Click below to check your digital badge</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0px 40px 60px 40px;text-align:center" align="center">      
                    <table role="presentation" align="center" cellspacing="0" cellpadding="0" border="0" style="border-collapse:separate;line-height:100%;">
                      <tbody>
                        <tr>
                          <td align="center" bgcolor="#1D1D1D" role="presentation" style="cursor:auto;padding:14px 44px;background:#6A205F;" valign="middle">
                            <a href="${badge_url}" style="text-decoration:none;background:#6A205F;color:#ffffff;font-family:'Courier',monospace;font-size:17px;font-weight:bold;line-height:120%;Margin:0;text-decoration:none;text-transform:none;" target="_blank">
                              <strong style="text-decoration:none;background:#6A205F;color:#ffffff">Click here</strong>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td bgcolor="#FFFFFF">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" bgcolor="#FFFFFF" style="border-top:1px solid #E7D9E1;">
              <tbody>
                <tr>
                  <td style="padding:10px 30px 18px 30px;text-align:center;font-family:'Roboto',sans-serif;font-size:15px;line-height:20px">
                    <table align="center" style="text-align:center">
                      <tbody>
                        <tr>
                          <td style="font-family:'Roboto',sans-serif;font-size:12px;line-height:20px;color:#808080;text-align:center;font-weight:300">
                            <p>This is a system generated email. Please do not reply to it.</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</center>`;

  const mailOptions = {
    from: "noreply_xenie@xebia.com",
    to: sending_to,
    subject: "Congratulations On Earning Badge!",
    html: htmlString,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        reject(error);
      } else {
        resolve(info);
      }
    });
  });
};

module.exports = sendMail;
