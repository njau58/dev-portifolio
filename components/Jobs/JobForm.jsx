import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import FileBase64 from "react-file-base64";
import axios from "axios";
import Router from "next/router";

import { toast } from "react-toastify";

const jobForm = ({ jobTitle }) => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    firstName: "",
    secondName: "",
    cv: "",
    aboutUs: "",
    jobTitle: `${jobTitle}`,
  });

  const [disabled, setDisabled] = useState(true);
  const [error, setErrors] = useState("");

  const handleOnchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handlePhoneOnchange = (phone) => {
    setFormData({ ...formData, phone: phone });
  };
  const handleRedirect = () => {
    return Router.push("/opportunities");
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      formData.email?.length < 1 ||
      formData.phone?.length < 1 ||
      formData.firstName?.length < 1 ||
      formData.secondName?.length < 1 ||
      formData.aboutUs?.length < 1 ||
      formData.jobTitle?.length < 1 ||
      formData.cv?.length < 0
    ) {
      alert("Please fill in all the fields.");
    } else {
      axios
        .post("/api/jobs", formData)
        .then((result) => {
          result.status === 204 ? alert("Please fill in all the fields.") : "";

          if (result.status === 201) {
            toast.success("Application sent successfully.", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            setTimeout(() => handleRedirect(), 3000);
          }
        })
        .catch((error) => {
          if (error) {
            toast.error("An Error occured. Try again later.", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        });
    }
  };

  return (
    <div>
      {" "}
      <div className=" pt-7 ">
        <form type="submit" className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              First Name
            </label>
            <input
              onChange={handleOnchange}
              type="text"
              name="firstName"
              className=" border mb-6  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="first name"
              required
            />
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Second Name
            </label>
            <input
              onChange={handleOnchange}
              type="text"
              name="secondName"
              className=" border mb-6 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="second name"
              required
            />
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Your email
            </label>
            <input
              onChange={handleOnchange}
              type="email"
              name="email"
              pattern="^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$"
              className=" border border-gray-300 mb-6 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="name@company.com"
              required
            />
            {/* <p className="text-red-500 text-xs">{validEmail}</p> */}
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900
          "
            >
              Your phoneNumber
            </label>
            <PhoneInput
              name="phone"
              enableSearch={true}
              country={"ke"}
              value={formData.phone}
              onChange={handlePhoneOnchange}
            />
          </div>
          <div></div>
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            upload CV(pdf)
          </label>
          <FileBase64
            type="file"
            multiple={false}
            onDone={({ base64 }) => setFormData({ ...formData, cv: base64 })}
          ></FileBase64>

          <div>
            <label className="block mb-2 mt-9 text-sm font-medium text-gray-900 ">
              How did you hear about us?
            </label>
            <textarea
              onChange={handleOnchange}
              name="aboutUs"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              required
              placeholder="I heard about Softleaf Applications..."
            ></textarea>
          </div>

          <button
            onClick={handleFormSubmit}
            className=" w-full text-white disabled:opacity-40  bg-theme-primary enabled:hover:bg-indigo-500  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center   "
          >
            Apply
          </button>
        </form>
      </div>
    </div>
  );
};

export default jobForm;
