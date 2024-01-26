import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmail = async (email: string, subject: string) => {
  await transport.sendMail({
    from: process.env.EMAIL_USER, // sender address
    to: email, // list of receivers
    subject, // Subject line
    text: "Hello world", // plain text body
    html: generateTemplate(email),
  });
};

const generateTemplate = (name: string) => {
  return `
    <div>
    <h1>Hello ${name}</h1>
    <h1>Welcome to our platform!</h1>
    <p>Please click on the following link to verify your account.</p>
    <a href="http://www.google.com" >Verify Account</a>
    </div>
    `;
};
