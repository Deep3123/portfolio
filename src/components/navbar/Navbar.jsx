import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Deep Patel
        </motion.span>
        <div className="social">
          <a href="https://github.com/Deep3123" target="_blank">
            <img src="/github.png" alt="" />
          </a>
          {/* <a href="" target="_blank">
            <img src="/youtube.png" alt="" />
          </a> */}
          <a href="https://www.linkedin.com/in/deep-patel-5b8798298/" target="_blank">
            <img src="/linkdin.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
