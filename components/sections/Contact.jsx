import React, { FC, useReducer, useState } from "react";
import SectionHeading from "../sectionHeading/SectionHeading";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import Button from "../button/Button";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    subject: "",
  });
  const ACTIONS = {
    CALL_API: "call-api",
    SUCCESS: "success",
    ERROR: "error",
  };

  const sendMessageReducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.CALL_API: {
        return {
          ...state,
          loading: true,
        };
      }
      case ACTIONS.SUCCESS: {
        return {
          ...state,
          loading: false,
          messageData: action.data,
        };
      }
      case ACTIONS.ERROR: {
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      }
    }
  };

  const initialState = {
    messageData: {},
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(sendMessageReducer, initialState);
  const { messageData, loading, error } = state;

  const handleOnchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(initialState);

  const sendMessage = (e) => {
    e.preventDefault();

    dispatch({ type: ACTIONS.CALL_API });
    axios
      .post("/api/sendMessage", formData)
      .then((response) => {
        setFormData({})
        if (response.status === 200) {
          dispatch({ type: ACTIONS.SUCCESS, data: response.data });
          toast.success("Message sent succesfully.", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });

       

          return;
        }
      })
      .catch((error) => {
        dispatch({ type: ACTIONS.ERROR, error: error.error, loading: false });
        toast.error("Oops! An Error occured.", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  return (
    <div id="contact" className="mt-48 pb-32">
      <div className="mb-8">
        <SectionHeading label="Get In Touch  " />
      </div>

      <div className="flex flex-col md:flex-row justify-center md:space-x-32 space-y-24 md:space-y-0 mt-16">
        <div className="flex flex-col space-y-4 justify-start">
          <div className="text-primary-text-color text-2xl font-light">
            Let’s Work <span className="text-secondary-color">Together</span>
          </div>
          <div className="flex flex-row space-x-4 items-center w-full">
            <div className="text-xl text-primary-color">
              <AiFillPhone />
            </div>
            <div className="text-sm">+254706338454</div>
          </div>
          <div className="flex flex-row space-x-4 items-center">
            <div className="text-xl text-primary-color">
              <MdLocationOn />
            </div>
            <div className="text-sm">Nairobi, Kenya</div>
          </div>
          <div className="flex flex-row space-x-4 items-center">
            <div className="text-xl text-primary-color">
              <MdOutlineMarkEmailUnread />
            </div>
            <div className="text-sm">njauprince@gmail.com</div>
          </div>
        </div>

        <form className="w-full max-w-xl">
          <div className="flex flex-row  space-x-8">
            <div className="mb-6 w-full">
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-primary-text-color dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                className="bg-white border border-gray-300 text-primary-text-color text-sm block w-full p-2.5 "
                placeholder="name@company.com"
                required
                onChange={handleOnchange}
              />
            </div>
            <div className="mb-6 w-full">
              <label
                for="subject"
                className="block mb-2 text-sm font-medium text-primary-text-color dark:text-white"
              >
                Subject (OPTIONAL)
              </label>
              <input
                type="text"
                name="subject"
                className="bg-white border border-gray-300 text-primary-text-color text-sm block w-full p-2.5 "
                placeholder="Custom Website"
                onChange={handleOnchange}
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              for="message"
              className="block mb-2 text-sm font-medium text-primary-text-color dark:text-white"
            >
              Your message
            </label>
            <textarea
              name="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-primary-text-color bg-white focus:border-red-500  border border-gray-300 "
              placeholder="Write your message here..."
              required
              onChange={handleOnchange}
            ></textarea>
          </div>

          <Button
            handleOnclick={sendMessage}
            label={`${loading ? "Please wait..." : "Send Message"}`}
            labelColor="text-white"
            backGround="bg-primary-color"
            borderRadius="rounded-none"
            hover="hover:border-primary-color hover:border-[1px] hover:bg-white hover:text-primary-color hover:ease-in-out hover:duration-300"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
