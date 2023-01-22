import {NextRequest, NextResponse} from 'next/server'

export default function (NextRequest, NextResponse) {
  let nodemailer = require("nodemailer");
  require("dotenv").config();
  let MAILER_PASS = process.env.NEXT_PUBLIC_MAILER_PASS;

  const { name, email, message } = NextRequest.body;

  const transporter = nodemailer.createTransport({
    host: "gra109.truehost.cloud",
    port: 465,
    auth: {
      user: "info@softleafapplications.co.ke",
      pass:MAILER_PASS,
    },
  });

  let from = ` SoftLeaf Applications <info@softleafapplications.co.ke>`;

  var mailOptionsClient = {
    from: from,
    to: `${email}`,
    subject: "Welcome to SoftLeaf Applications ",
    text: `
 Hi ${name}, 

    We are glad to hear from you. 
    
    One of our representatives will touch base with you on your inquiry.
    
    Kind regards,

    SoftLeaf Team
    `,
  };

  var mailOptionsSoftLeaf = {
    from:`${email}` ,
    to: from,
    subject: "Welcome to SoftLeaf Applications ",
    text: `

    ${name} >>   ${message}

    `,
  };
  return new Promise((reject, resolve) => {
    Promise.all([
      transporter.sendMail(mailOptionsClient),
      transporter.sendMail(mailOptionsSoftLeaf),
    ])
      .then((result) => {
        return NextResponse.status(200).end(JSON.stringify(result));
       resolve();
    
      })
      .catch((err) => {
       return NextResponse.status(424).end();
      resolve();

        
      });
  });
}