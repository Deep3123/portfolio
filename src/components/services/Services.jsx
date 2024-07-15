import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        {/* <hr /> */}
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          {/* <img src="/people.webp" alt="" /> */}
          <h1>
            <motion.b whileHover={{color:"orange"}}>About Me</motion.b>
          </h1>
          <hr/>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        {/* <motion.div className="box"> */}
          <p className='about'>
          I am a dedicated software developer with a strong focus on web development and machine learning. My expertise includes HTML, CSS, and JavaScript for front-end development, and Django along with Django REST Framework for the back end. Additionally, I have a deep understanding of machine learning, deep learning, and natural language processing, utilizing Python libraries such as TensorFlow and Keras.
          <br/><br/>
          I hold a CPI of 9.13 from my academic tenure, reflecting my commitment to excellence and continuous learning. I thrive in dynamic, challenging environments that push me to expand my skills and knowledge.
          </p>
        {/* </motion.div> */}
      </motion.div>
    </motion.div>
  );
};

export default Services;
