// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import User from "../../models/User";
// import dbConnect from "../../lib/dbConnect";

// export default async function (req, res) {
//   await dbConnect();

//   return new Promise(async (resolve) => {
//     const { method } = req;

//     try {
//       switch (method) {
//         case "POST":
//           //get post data
//           const { name, password } = req.body;
//           if (!email || !password) {
//             return res.status(400).json({
//               status: "error",
//               error: "Missing name or password ",
//             });
//           }

//           //check that  user exist in database

//           const user = await User.findOne({ name });

//           if (!user) {
//             res.status(400).json({ status: "error", error: "User Not Found" });
//           }

//           if (user) {
//             //check and comapare password
//             bcrypt.compare(password, user.password).then((isMatch) => {
//               if (isMatch) {
//                 //create JWT payload

//                 const payload = {
//                   id: user.id,
//                   name: user.name,
//                 };
//                 //sign token
//                 jwt.sign(
//                   payload,
//                   JWT_SECRET,
//                   { expiresIn: "30d" },
//                   (err, token) => {
//                     //send success with token

//                     res
//                       .status(200)
//                       .json({ success: true, token: "Bearer" + token });
//                   }
//                 );
//               }
//             });
//           } else {
//             res
//               .status(400)
//               .json({ status: "error", error: "Incorect password" });
//           }

//           break;
//           default:
//             break;
//       }
//     } catch (error) {
//       console.log(error);
//     }

//     return resolve()
//   });

 

 
// }
