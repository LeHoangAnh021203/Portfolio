const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Sever Running"));

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "********@gmail.com",
    pass: "",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log("error");
  } else {
    console.log("Ready To Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstname + req.body.lastname;
  const email = req.bpdy.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "********@gmail.com",
    subject: "Contact form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
        <p>Phone: ${phone}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if(error){
        res.json(error);
    }else {
        res.json({code:200, status:'Message Sent'});
    }
  })
});
