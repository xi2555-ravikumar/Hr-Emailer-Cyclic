var express = require('express')
var cors = require('cors')
var app = express();

const sendPlasmaEmail = require('./mailers/plasma');
const sendRecruitmentEmail = require('./mailers/recruitmentDocstore');
const sendAnalyticsEmail = require('./mailers/analytics');
const sendBgvEmail = require('./mailers/bgv');
const sendBgvRaiseRequestEmail = require('./mailers/bgvRaiseRequest');
const sendBgvApproveRequestEmail = require('./mailers/bgvApproveRequest');
const sendGenericEmail = require('./mailers/genericEmail');
const sendBadgeEmail = require('./mailers/badge')
const sendBirthDayEmail = require('./mailers/birthday');
const sendAnniversaryEmail = require('./mailers/anniversary');

var corsOptions = {
  origin: ["https://myxebia.web.app", "https://xebia-certification.web.app", "https://xebiaresume.southeastasia.cloudapp.azure.com", "http://localhost:3000"],
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(express.json());

app.get('/api/mail', (req, res) => {
  return res.status(200).json({
    msg: "Xebia Email Get Request",
    success: true,
  })
})

app.post('/api/mail/plasma', async (req, res) => {
  const bodyObject = req.body;
  const response = await sendPlasmaEmail(bodyObject);
  return res.status(200).json({
    msg: "Plasma Email Request",
    success: true,
    content: response,
  })
});

app.post('/api/mail/recruitment', async (req, res) => {
  const bodyObject = req.body;
  const response = await sendRecruitmentEmail(bodyObject);
  return res.status(200).json({
    msg: "Recruitment Email Request",
    success: true,
    content: response,
  })
});

app.post('/api/mail/analytics', async (req, res) => {
  const bodyObject = req.body;
  const response = await sendAnalyticsEmail(bodyObject);
  return res.status(200).json({
    msg: "Employee Analytics Email Request",
    success: true,
    content: response,
  })
});

app.post('/api/mail/bgv', async (req, res) => {
  const bodyObject = req.body;
  const response = await sendBgvEmail(bodyObject);
  return res.status(200).json({
    msg: "Employee BGV Email Request",
    success: true,
    content: response,
  })
});

app.post('/api/mail/bgv/raise_request', async (req, res) => {
  const bodyObject = req.body;
  const response = await sendBgvRaiseRequestEmail(bodyObject);
  return res.status(200).json({
    msg: "Employee BGV Email Request",
    success: true,
    content: response,
  })
});

app.post('/api/mail/bgv/approve_request', async (req, res) => {
  const bodyObject = req.body;
  const response = await sendBgvApproveRequestEmail(bodyObject);
  return res.status(200).json({
    msg: "Employee BGV Email Request",
    success: true,
    content: response,
  })
});

app.post('/api/mail/general', async (req, res) => {
  const bodyObject = req.body;
  const response = await sendGenericEmail(bodyObject);
  return res.status(200).json({
    msg: "Generic Email Send Request",
    success: true,
    content: response,
  })
});

app.post('/api/mail/badge', async (req, res) => {
  const bodyObject = req.body;
  const response = await sendBadgeEmail(bodyObject);
  return res.status(200).json({
    msg: "Employee Badge Email Request",
    success: true,
    content: response,
  })
});


app.post('/api/mail/birthday', async (req, res) => {
  const bodyObject = req.body;
  const response = await sendBirthDayEmail(bodyObject);
  return res.status(200).json({
    msg: "Employee Birthday Email Request",
    success: true,
    content: response,
  })
})


app.post("/api/mail/anniversary", async (req, res) => {
  const bodyObject = req.body;
  const response = await sendAnniversaryEmail(bodyObject);
  return res.status(200).json({
    msg: "Employee Anniversary Email Request",
    success: true,
    content: response
  });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`CORS-enabled web server listening on http://localhost:${PORT}`)
});