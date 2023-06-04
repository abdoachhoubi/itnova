import React from "react";
import { motion } from "framer-motion";

const Signup = () => {
  return (
    <section className="auth__section auth__signup">
      <motion.h1
        className="auth__title"
        initial={{ opacity: 0, y: "2rem" }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { duration: 1, ease: "easeInOut" },
        }}
      >
        Create a new account
      </motion.h1>
      <motion.p
        className="auth__description"
        initial={{ opacity: 0, y: "2rem" }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { duration: 1, ease: "easeInOut", delay: 0.4 },
        }}
      >
        Ready to level up your IT journey?
        <br />
        Sign up today and join a dynamic community of Moroccan tech enthusiasts,
        where innovation, collaboration, and endless possibilities await!
      </motion.p>
    </section>
  );
};

export default Signup;
