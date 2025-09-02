import rrImage from "../assets/rr-logo.png";
import { motion } from "framer-motion";

export const Header = () => (
  <>
    <div className="grid grid-cols-3 items-center h-20 px-4">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex justify-start"
      >
        <img
          src={rrImage}
          alt="rr_logo"
          className="flex justify-start w-12 h-12 sm:w-16 sm:h-16"
        />
      </motion.div>
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-amber-500 text-2xl sm:text-4xl font-bold font-imperial-script text-center"
      >
        Ruth Realtors
      </motion.h1>
    </div>
  </>
);
