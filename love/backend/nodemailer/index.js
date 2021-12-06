const nodemailer = require('nodemailer');

const config = {
  service: 'gmail',
  host: 'smtp.gmail.com', 
  port: 587,  
  secure: false, 
  auth: {
    user: process.env.GOOGLE_MAIL, // 구글 계정 메일
    pass: process.env.GOOGLE_PASSWORD, // 구글 계정 비밀번호 혹은 앱 비밀번호
  }
}

const send = async (data) => {
  const transporter = nodemailer.createTransport(config);
  transporter.sendMail(data, (err, info) => {
    if(err) {
      console.log(err);
    }else {
      return info.response;
    }
  });
}

module.exports = {
  send
}