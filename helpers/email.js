// imports
const nodemailer = require("nodemailer");

// creating and configuring transporter for SMTP server
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// ====================================
// FUNCTION TO SEND EMAIL ALERT ON NEW ATTENDANCE CREATION
// ====================================

const sendAttendanceCreationAlert = (email, name, attendanceId, link) => {
  const text = `Configuration link: ${link}. Successfully created new attendance record. If this was you, you don't need to do anything. If not, delete records from system with following ATTENDANCE ID: ${attendanceId}`;

  const html = `<body style="text-align: center; word-spacing: 4px">
  <h2 style="color: #0a9396">Smart Attendance Monitoring System</h2>
  <h1 style="color: #000000">New attendance created</h1>

  <hr style="width: 50%" />
  <div
    style="
      max-width: 400px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.3;
      color: #000000;
      text-align: justify;
    "
  >
    <p>Faculty: <span style="font-weight: bold">${name}</span></p>
    <p>Attendace ID: <span style="font-weight: bold">${attendanceId}</span></p>
    <p>
      Configuration Link<sup>*</sup>:
      <a style="font-weight: bold" href="${link}">${link}</a>
    </p>
    <p>
      Successfully created new attendance record. If this was you, you don't
      need to do anything. If not, delete the record from system using
      attendance id.
    </p>
    <p><sup>*</sup>Configuration link is valid only for 1 hour.</p>
  </div>
</body>`;

  return transporter.sendMail({
    from: "Smart Attendance Monitoring System",
    to: email,
    subject: "New attendance created",
    text: text,
    html: html,
  });
};

// ====================================
// FUNCTION TO SEND EMAIL FOR PASSWORD RESET
// ====================================

const sendResetLink = (email, link) => {
  const text = `Please click the following link or copy and paste into browser to reset your password. ${link} The above link is valid only for 1 hour. If you did not make request to reset your password, please ignore this email.`;

  const html = `<body style="text-align: center; word-spacing: 4px;">
  <h2 style="color: #0a9396;">Smart Attendance Monitoring System</h2>
  <h1 style="color: #000000;">Reset Password</h1>
  
  <hr style=" width: 50%; ">
  <div style="max-width: 400px; margin-left: auto; margin-right: auto;line-height: 1.3;color: #000000;text-align: justify;">
  <p >Please click the following link or copy and paste into browser to reset your password.</p>
  <a href=${link}>${link}</a>
  <p >The above link is valid only for 1 hour.</p>
  <p >If you did not make request to reset your password, please ignore this email.</p>
</div>
</body>`;

  return transporter.sendMail({
    from: "Smart Attendance Monitoring System",
    to: email,
    subject: "Reset your password",
    text: text,
    html: html,
  });
};

// ====================================
// FUNCTION TO SEND EMAIL FOR PASSWORD RESET
// ====================================

const sendRegistrationMail = (email, password, link) => {
  const text = `Email: ${email} Password: ${password}`;

  const html = `<body style="text-align: center; word-spacing: 4px;">
  <h2 style="color: #0a9396;">Smart Attendance Monitoring System</h2>
  <h1 style="color: #000000;">Registration successful</h1>
  
  <hr style=" width: 50%; ">
  <div style="max-width: 400px; margin-left: auto; margin-right: auto;line-height: 1.3;color: #000000;text-align: justify;">
  <p >Email: <span style="font-weight: bold;">${email}</span></p>
  <p>Password: <span style="font-weight: bold;">${password}</span></p>
  <p >Above password is generated by the admin. Reset your password to an unique and strong password.</p>
  <p >Click on <span style="font-weight: bold;">Fogotten password</span> on login page or click following link to reset your password.</p>
  <a href=${link}>${link}</a>
</div>
</body>`;

  return transporter.sendMail({
    from: "Smart Attendance Monitoring System",
    to: email,
    subject: "Registration successful",
    text: text,
    html: html,
  });
};

// exports
module.exports = {
  sendAttendanceCreationAlert,
  sendResetLink,
  sendRegistrationMail,
};
