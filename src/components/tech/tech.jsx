import { useRef } from "react";
import "./tech.scss";
import { motion, useInView } from "framer-motion";
// import Technologies from "../Technologies/Technologies";

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

const Tech = () => {
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
            <motion.b whileHover={{ color: "orange" }}>Skills</motion.b>
          </h1>
          <hr />
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        {/* <motion.div className="box"> */}
        {/* <Technologies /> */}
        {/* </motion.div> */}
        <div className="icon-row">
          <img src="html.png" alt="Icon 1" class="icon" />
          <img src="css3.svg" alt="Icon 2" class="icon" />
          <img src="js.png" alt="Icon 3" class="icon" />
          <img src="react.png" alt="Icon 3" class="icon" />
          <img src="django.png" alt="Icon 3" class="icon" />
          <img src="django rest.png" alt="Icon 3" class="icon" />
          <img src="git.png" alt="Icon 3" class="icon" />
          <img src="npm.png" alt="Icon 3" class="icon" />
          <img src="python.png" alt="Icon 3" class="icon" />
          <img src="c++.png" alt="Icon 3" class="icon" />
          <img src="java.svg" alt="Icon 3" class="icon" />
          <img src="mongo.png" alt="Icon 3" class="icon" />
          <img src="mysql.png" alt="Icon 3" class="icon" />
          <img src="postgresql.png" alt="Icon 3" class="icon" />
          <img src="machine.jpg" alt="Icon 3" class="icon" />
          <img src="deep.jpg" alt="Icon 3" class="icon" />
          <img src="nlp.jpg" alt="Icon 3" class="icon" />
          <img src="aiml.jpg" alt="Icon 3" class="icon" />
          <img src="data.jpg" alt="Icon 3" class="icon" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Tech;
