import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleContactModal } from "../../redux/features/toggleSlice";
import { GrClose } from "react-icons/gr";
import { toast } from "react-toastify";
import axios from "axios";
import {AnimatePresence, motion} from 'framer-motion'

const ContactModal = () => {
  const dispatch = useDispatch();

  const { showContactModal } = useSelector((state) => ({ ...state.app }));
  const [disabled, setDisabled] = useState(false);
  const [validEmail, setValidEmail] = useState("");

  const contactModalToggle = () => {
    dispatch(toggleContactModal());
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (
      formData.name?.length > 0 &&
      formData.email?.length > 0 &&
      formData.message?.length > 0
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [formData.name?.length, formData.email?.length, formData.message?.length]);

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      setValidEmail("");
      const id = toast.loading("Sending message...");
      setDisabled(true);
      axios
        .post("/api/contact", formData)
        .then((result) => {

          if(result.status===200){
            toast.update(id, {
              render: "Message sent successfully.",
              type: "success",
              isLoading: false,
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
            });
  
            contactModalToggle();

            return

          }
  
        })
        .catch(({ response}) => {
      
          if (response.status===424) {
            toast.update(id, {
              render: "Error occured. Try again later.",
              type: "error",
              isLoading: false,
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
            });

            return
          }
      
        });
    } else {
      setValidEmail("Please enter a valid email.");
    }
  };

  return (
    <div className={`${!showContactModal ? "hidden" : ""}`}>
      <div
        tabindex="-1"
        className=" flex flex-col justify-center items-center align-middle min-h-screen overflow-y-auto overflow-x-hidden bg-black bg-opacity-50 fixed top-0 right-0 left-0 z-[100] w-full md:inset-0 h-full md:h-full"
        aria-modal="true"
      >
        <div className="relative p-4 w-full max-w-md h-full pt-12 ">
        <AnimatePresence>
            <motion.div
            key="quoteModel"
            initial={{opacity:0,scale:0.5,y:-1000}}
            animate={{opacity:1,scale:1, y:0}}
            transition={{ease:'easeInOut' ,duration:0.7}}
       
            
            className="relative bg-white rounded-lg z-50 ">
            <button
              onClick={contactModalToggle}
              type="button"
              className="absolute top-3 bg-indigo-100 right-2.5 text-gray-400 bg-transparent  hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
            >
              <GrClose />
            </button>
            <div className="flex items-center justify-center">
              {" "}
              <h3 className="mb-4 text-xl pt-9 font-medium text-gray-900  border-slate-400 border-b-[0.1rem] pb-4">
                Let Us Hear from you
              </h3>
            </div>

            <div className="py-6 px-6 lg:px-8">
              <form className="space-y-6">
                <div>
                  <label
                    for="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your name
                  </label>
                  <input
                    onChange={handleOnChange}
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your email
                  </label>
                  <input
                    onChange={handleOnChange}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="name@company.com"
                    required
                  />
                  <p className="text-red-500 text-xs">{validEmail}</p>
                </div>

                <div>
                  <label
                    for="message"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Message
                  </label>
                  <textarea
                    onChange={handleOnChange}
                    id="message"
                    name="message"
                    rows="4"
                    className="block mb-6 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                    required
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <div className="flex justify-between"></div>
                <button
                  disabled={disabled}
                  onClick={handleFormSubmit}
                  type="submit"
                  className="w-full text-white disabled:opacity-40  bg-theme-primary enabled:hover:bg-indigo-500  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center   "
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;