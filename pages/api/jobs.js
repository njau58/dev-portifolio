import dbConnect from "../../lib/dbConnect";
import Job from "../../models/Job";

export default async function jobs(req, res) {
  await dbConnect();

  const { method } = req;

  const { email, phone, firstName, secondName, cv, aboutUs, jobTitle } =
    req.body;

  //check for empty fields

  if (
    !email ||
    !phone ||
    !firstName ||
    !secondName ||
    !cv ||
    !aboutUs ||
    !jobTitle
  ) {
    res.status(204).send("Please add all the fields.");
  }

  switch (method) {
    case "POST":
      try {
        const job = await Job.create({
          first_name: firstName,
          second_name: secondName,
          email: email,
          cv: cv,
          phone_number: phone,
          about_us: aboutUs,
          job_title: jobTitle,
        });

        if (job) {
          res.status(201).json({ success: true, data: job });
        }
      } catch (error) {
        res.status(400).json({ success: false });
      }
  }
}
