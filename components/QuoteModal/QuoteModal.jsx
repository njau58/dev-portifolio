import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleQuoteModal } from "../../redux/features/toggleSlice";
import { GrClose } from "react-icons/gr";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from "react-toastify";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";


const QuoteModal = () => {
  const dispatch = useDispatch();

  const { showQuoteModal } = useSelector((state) => ({ ...state.app }));
  const [disabled, setDisabled] = useState(false);
  const [validEmail, setValidEmail] = useState("");
  

  const quoteModalToggle = () => {
    dispatch(toggleQuoteModal());
  };

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    project_type: "",
    project_description: "",
    budget: "",
  });

  useEffect(() => {
    if (
      formData.email?.length > 0 &&
      formData.phone?.length > 0 &&
      formData.project_type?.length > 0 &&
      formData.project_description?.length > 0 &&
      formData.budget?.length > 0
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [
    formData.phone?.length,
    formData.email?.length,
    formData.project_type?.length,
    formData.project_description?.length,
    formData.budget?.length,
  ]);

  const handleOnchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneOnchange = (phone) => {
    setFormData({ ...formData, phone: phone });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

   

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      setValidEmail("")
      setDisabled(true);
      const id = toast.loading("Sending message...");
      setDisabled(true);

    
      axios
        .post("/api/quote", formData)
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

          quoteModalToggle();
return
       }

      
        })
        .catch(({response}) => {

         

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

       
          }
return

        });
    } else {
      setValidEmail("Please enter a valid email.");
    }
  };

  return (
    <AnimatePresence>
    <div 
      className={`${!showQuoteModal ? "hidden" : ""}`}> 
      <div
        tabindex="-1"
        className="  flex flex-col justify-center items-center align-middle min-h-screenoverflow-y-auto overflow-x-hidden bg-black bg-opacity-50 fixed top-0 right-0 left-0 z-[100] w-full md:inset-0 h-full md:h-full "
        aria-modal="true"
      >
          
          <div className="relative p-4 w-full max-w-md h-full pt-12">
         
            <motion.div
            key="quoteModel"
            initial={{opacity:0,scale:0.5,y:-1000}}
            animate={{opacity:1,scale:1, y:0}}
            transition={{ease:'easeInOut' ,duration:0.7}}

            exit={{rotateY:180}}
       
            
            className="relative bg-white rounded-lg z-50 ">
              <button
                onClick={quoteModalToggle}
                type="button"
                className="absolute bg-indigo-100 top-3 right-2.5 text-gray-400 bg-transparent  hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
                data-modal-toggle="authentication-modal"
              >
                <GrClose />
              </button>
              <div className=" pt-7 py-6 px-6 lg:px-8">
                <form className="space-y-6">
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Your email
                    </label>
                    <input
                      onChange={handleOnchange}
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="name@company.com"
                      required=""
                    />
                    <p className="text-red-500 text-xs">{validEmail}</p>
                  </div>
                  <div>
                    <label
                      for="email"
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

                  <div>
                    {" "}
                    <label
                      for="project_type"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Desired type of project
                    </label>
                    <select
                      onChange={handleOnchange}
                      name="project_type"
                      required
                      id="project_type"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      <option selected>Select type</option>
                      <option value="web-app">WebApp</option>
                      <option value="web-app">UI/UX</option>
                      <option value="moblile-app">Mobile App</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      for="description"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Describe your project
                    </label>
                    <textarea
                      onChange={handleOnchange}
                      id="project_description"
                      name="project_description"
                      rows="4"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                      required
                      placeholder="Your requirements..."
                    ></textarea>
                  </div>
                  <div>
                    {" "}
                    <label
                      for="budget"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Budget for your project
                    </label>
                    <select
                      onChange={handleOnchange}
                      required
                      id="budget"
                      name="budget"
                      className="bg-gray-50 mb-6 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    >
                      <option selected>Budget</option>
                      <option value="50k">-50k</option>
                      <option value="50k-150k">50k-150k</option>
                      <option value="150k-500k">150k-500k</option>
                      <option value=">500k">+500k</option>
                      <option value="not-sure">Not sure</option>
                    </select>
                  </div>
                  <button
                    disabled={disabled}
                    onClick={handleFormSubmit}
                    type="submit"
                    className=" w-full text-white disabled:opacity-40  bg-theme-primary enabled:hover:bg-indigo-600  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center   "
                  >
               Request Quote
                  </button>
                </form>
              </div>
            </motion.div>
       
  
          </div>  
    
      </div>
    </div>

</AnimatePresence>
   
  );
};

export default QuoteModal;
