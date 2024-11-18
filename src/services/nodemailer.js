const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "vinodvinod0979@gmail.com",
    pass: "erkl lrly dzdt ykwq",
  },
});

const sendMail = async (email, subject, html) => {
  try {
    const res = await transporter.sendMail({
      from: '"Credentials👻" <vinodvinod0979@gmail.com>',
      to: email,
      subject: subject,
      html: html,
    });
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports = { sendMail };
