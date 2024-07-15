import { useRef } from "react";
import "./exp.scss";
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

const Exp = () => {
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
            <motion.b whileHover={{ color: "orange" }}>Experience</motion.b>
          </h1>
          <hr />
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        {/* <motion.div className="box"> */}

        <p className='about'>
          Created 'Virtual Community Support' as part of a full-stack development internship at TatvaSoft. Leveraged AngularJS for dynamic frontend interactions, .NET for robust backend logic, and PostgreSQL for efficient data management. The website enhances community interaction, demonstrating hands-on experience in frontend development, backend integration, and database design.
          <br/>
          <br/>
          Duration: June-2024 to July-2024
          <br/>
          <br/>
          Github link: <a href="https://github.com/Deep3123/Tatvasoft-Internship" target="_blank" style={{ color: 'yellow' }}>https://github.com/Deep3123/Tatvasoft-Internship</a>
        </p>
        {/* </motion.div> */}
      </motion.div>
    </motion.div>
  );
};

export default Exp;
