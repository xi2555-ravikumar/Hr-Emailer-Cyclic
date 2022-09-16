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

const sendMail = ({ senderEmployer, employeeCode, receiverEmployer, sending_to }) => {
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
                              <img src="https://drive.google.com/uc?export=view&id=1jkqKrst4S-2aBJ9BfiOnX2ClT1d_5JLV" width="100%" alt="Header" border="0" style="display:block;height:auto;font-family:'Roboto',sans-serif;font-size:15px;line-height:20px;color:#fff" class="CToWUd a6T" tabindex="0">
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
                  <td style="padding:38px 50px 30px 40px;text-align:center">
                    <h1 style="margin:0;font-family:'Roboto','Arial',sans-serif;font-size:21px;line-height:40px;color:#373A3C;font-weight:bold;letter-spacing:0px">Employee Information Request Raised</h1>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0px 40px 40px 40px;font-family:'Roboto',sans-serif;font-size:16px;line-height:26px;color:#373A3C;text-align:left;font-weight:300">
                    <p style="margin:0 0 5px 0">An access request is raised from <b>${senderEmployer}</b> for background verification of <b>${employeeCode}</b> associated with <b>${receiverEmployer}</b> previously.<br /><br />
                      The information shared is proprietary and is based on the information available with ${receiverEmployer}<br /><br />

                      ${receiverEmployer} shall notify ${senderEmployer} once the request is approved by the ${receiverEmployer}. Further, ${receiverEmployer} reserves right to deny the request without informing or notifying ${senderEmployer} by any channel.<br /><br />
                      
                      Note: <i>All confidential information is provided as is, and neither party gives any warranties, expressed, implied or otherwise, regarding its accuracy, completeness or performance.<br /><br />
                      
                      Both parties shall keep any information shared or any discussion or activities conducted in connection therewith strictly proprietary and confidential except required to be disclosed under the law or with another third party provided that such recipient is bound by confidentiality restriction.<br /><br />
                      
                      Recipient of Information agrees to indemnify and hold harmless Xebia and its directors, employees, officers’ personnel, and any person controlling any of them and each of their officers, directors, employees, and agent (<b>"Indemnified Persons"</b>) from and against any claims and all losses incurred or suffered by Indemnified persons.</i></p>
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
                            <p>You have received this email from system due to usage of Xebia’s service(s).
                              If this is not the case, then please report it to Xebia earliest.</p>
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
    subject: "Xebia BGV - Employee Information Request Raised",
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
