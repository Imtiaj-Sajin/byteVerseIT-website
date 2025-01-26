// const express = require("express");
// const router = express.Router();
// const cors = require("cors");
// const nodemailer = require("nodemailer");

// // server used to send send emails
// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use("/", router);
// app.listen(5000, () => console.log("Server Running"));
// console.log(process.env.EMAIL_USER);
// console.log(process.env.EMAIL_PASS);

// const contactEmail = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: "********@gmail.com",
//     pass: ""
//   },
// });

// contactEmail.verify((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Ready to Send");
//   }
// });

// router.post("/contact", (req, res) => {
//   const name = req.body.firstName + req.body.lastName;
//   const email = req.body.email;
//   const message = req.body.message;
//   const phone = req.body.phone;
//   const mail = {
//     from: name,
//     to: "********@gmail.com",
//     subject: "Contact Form Submission - Portfolio",
//     html: `<p>Name: ${name}</p>
//            <p>Email: ${email}</p>
//            <p>Phone: ${phone}</p>
//            <p>Message: ${message}</p>`,
//   };
//   contactEmail.sendMail(mail, (error) => {
//     if (error) {
//       res.json(error);
//     } else {
//       res.json({ code: 200, status: "Message Sent" });
//     }
//   });
// });
// const { createServer } = require('http');
// const { parse } = require('url');
// const next = require('next');

// const port = parseInt(process.env.PORT || '3000', 10);
// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   createServer((req, res) => {
//     const parsedUrl = parse(req.url, true);
//     handle(req, res, parsedUrl);
//   }).listen(port, () => {
//     console.log(`> Ready on http://localhost:${port}`);
//   });
// });
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Periodically log memory usage
setInterval(() => {
  const memoryUsage = process.memoryUsage();
  console.log({
    rss: `${(memoryUsage.rss / 1024 / 1024).toFixed(2)} MB`, // Resident Set Size
    heapTotal: `${(memoryUsage.heapTotal / 1024 / 1024).toFixed(2)} MB`, // V8's memory allocation
    heapUsed: `${(memoryUsage.heapUsed / 1024 / 1024).toFixed(2)} MB`, // Actual memory used
    external: `${(memoryUsage.external / 1024 / 1024).toFixed(2)} MB`, // External resources
  });
}, 10000); // Logs every 10 seconds

// Example endpoint
app.get('/', (req, res) => {
  res.send('Server is running. Check your logs for memory usage.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
