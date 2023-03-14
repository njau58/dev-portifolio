import React from "react";
import { RiArrowUpSLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: "100" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        exit={{ opacity: 0 }}
        
        
        onClick={goToTop}
        className="p-3 bg-[#9195ff] bg-opacity-50 hover:bg-[#696eff] shadow-2xl rounded-full bottom-5 right-5 fixed z-50"
      >
        <div className="text-white font-bold text-2xl">
          <RiArrowUpSLine />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ScrollToTop;
