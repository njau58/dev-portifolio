

export default function sendMessage(req, res) {
    let nodemailer = require("nodemailer");
    require("dotenv").config();
    let MAILER_PASS = process.env.NEXT_PUBLIC_MAILER_PSS;


  const { email, subject, message } = req.body;

  console.log(req.body)

//   if(!email||!message){
//     res.status(401).end({error:'email and message must be filled.'})
//   }

  const transporter = nodemailer.createTransport({
    host: "gra109.truehost.cloud",
    port: 465,
    auth: {
      user: "info@softleafapplications.co.ke",
      pass: MAILER_PASS,
    },
  });

  let to = ` SoftLeaf Applications <info@softleafapplications.co.ke>`;

  var mailOptionsSoftLeaf = {
    from: `Portifolio Website`,
    to: to,
    subject: `${subject === "" ? "Visitor Message" : subject} `,
    text: `
  
      A visitor to developer portifolio of email ${email} sent a message:
      
      ${message}

  
      `,
  };

  return new Promise((reject, resolve) => {
    Promise.all([transporter.sendMail(mailOptionsSoftLeaf)])
      .then((result) => {
        return res.status(200).end(JSON.stringify(result));
       
      })
      .catch((err) => {
        return res.status(424).end();
        
      });
  });
}
