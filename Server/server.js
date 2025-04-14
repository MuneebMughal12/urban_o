require("dotenv").config({path:"./config/.env"}); // Load environment variables
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());
console.log(process.env.EMAIL,"EMAILLLLLL")
console.log(process.env.PASSWORD,"password")
// Configure Nodemailer with environment variables
// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 465, // Change from 587 to 465
//   secure: false, // Use secure mode
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASSWORD,
//   },
// });
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587, // Change to 587
  secure: false, // Must be false for port 587
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  tls: {
    rejectUnauthorized: false, // Prevent SSL issues
  },
});


// Email sending endpoint
app.post("/send-email", async (req, res) => {
  console.log("Received Data:", req.body); // Debugging log

  const { formData, type } = req.body;

  if (!formData) {
    console.error("Error: formData is missing from the request.");
    return res.status(400).json({ error: "Form data is missing" });
  }

  const { firstName, lastName, email, phone, message } = formData;

  console.log("Extracted Data:", {
    firstName,
    lastName,
    email,
    phone,
    message,
  });

  try {
    console.log(process.env.EMAIL,"EMAILLLLLL")
console.log(process.env.PASSWORD,"password")
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: `${type.toUpperCase()} Form Submission`,
      text: `Name: ${firstName || "N/A"} ${lastName || ""}
Email: ${email}
Phone: ${phone}
Message: ${message || "N/A"}`,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});



// PDF download endpoint
app.get("/download-pdf", (req, res) => {
  const filePath = path.join(__dirname, "document.pdf");
  res.sendFile(filePath);
});

app.listen(5000, () => console.log("Server running on port 5000"));
