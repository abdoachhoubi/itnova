import React from "react";
import { motion } from "framer-motion";

const Signin = () => {
  return (
    <section className="auth__section auth__signin">
      <motion.h1
        className="auth__title"
        initial={{ opacity: 0, y: "2rem" }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { duration: 1, ease: "easeInOut" },
        }}
      >
        Welcome back
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
        Welcome back to the heart of Morocco's IT community!
        <br />
        Sign in now to dive into a world of connection, collaboration, and
        cutting-edge opportunities. Let's continue the journey together!
      </motion.p>
      <div className="auth__form">
        <motion.input
          initial={{ opacity: 0, y: "2rem" }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, ease: "easeInOut", delay: 0.6 },
          }}
          whileFocus={{ borderBottom: "2px solid #fff" }}
          type="text"
          name="username"
          id="username"
          className="form__input"
          placeholder="Username or email"
        />
        <motion.input
          initial={{ opacity: 0, y: "2rem" }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, ease: "easeInOut", delay: 0.8 },
          }}
          whileFocus={{ borderBottom: "2px solid #fff" }}
          type="password"
          name="password"
          id="password"
          className="form__input"
          placeholder="Password"
        />
      </div>
    </section>
  );
};

export default Signin;
