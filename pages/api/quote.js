
// import {NextRequest, NextResponse} from 'next/server'
// export default function (NextRequest, NextResponse) {
//   let nodemailer = require("nodemailer");
//   require("dotenv").config();
//   let MAILER_PASS = process.env.NEXT_PUBLIC_MAILER_PASS;

//   const { email, phone, project_type, project_description, budget } = NextRequest.body;

//   const transporter = nodemailer.createTransport({
//     host: "gra109.truehost.cloud",
//     port: 465,
//     auth: {
//       user: "info@softleafapplications.co.ke",
//       pass: MAILER_PASS,
//     },
//   });

//   let from = ` SoftLeaf Applications <info@softleafapplications.co.ke>`;

//   var mailOptionsClient = {
//     from: from,
//     to: `${email}`,
//     subject: "Estimate Request ",
//     text: `
//    Hi, 
  
//       Thank you for contacting us. We have recieved your request.
//       One of our representatives will touch base with you on your inquiry within the shortest time.
      
//       Kind regards,
  
//       SoftLeaf Team
//       `,
//   };

//   var mailOptionsSoftLeaf = {
//     from: `${email}`,
//     to: from,
//     subject: "Estimate Request ",
//     text: `
  
//       email: ${email}
//       phone_number:  ${phone}
//       project_type:  ${project_type}
//       project_budget:  ${budget}

//       project_description:
//                             ${project_description}

  
//       `,
//   };

//   return new Promise((reject, resolve) => {
//     Promise.all([
//       transporter.sendMail(mailOptionsClient),
//       transporter.sendMail(mailOptionsSoftLeaf),
//     ])
//       .then((result) => {
//         return NextResponse.status(200).end(JSON.stringify(result));
//        resolve();
    
//       })
//       .catch((err) => {
//        return NextResponse.status(424).end();
//       resolve();

        
//       });
//   });
// }
