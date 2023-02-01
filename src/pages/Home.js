import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {Book, ContainerHome } from "../styles/HomeStyles";

const Home = () => {
  const containerWelcome = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <ContainerHome>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerWelcome}
      >
        <Book>
          <Link to="/books" className="content__button">
            Let's create your user
          </Link>
          <div className="imgBox">CRUD Books</div>
          <motion.div variants={item} className="footer">
            ©️ by Alejandra Olazagasti
          </motion.div>
        </Book>
      </motion.div>
    </ContainerHome>
  );
};

export default Home;
