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
          placeholder="Full Name"
        />
        <motion.input
          initial={{ opacity: 0, y: "2rem" }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, ease: "easeInOut", delay: 0.8 },
          }}
          whileFocus={{ borderBottom: "2px solid #fff" }}
          type="text"
          name="email"
          id="email"
          className="form__input"
          placeholder="Email"
        />
        <motion.input
          initial={{ opacity: 0, y: "2rem" }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, ease: "easeInOut", delay: 1 },
          }}
          whileFocus={{ borderBottom: "2px solid #fff" }}
          type="password"
          name="password"
          id="password"
          className="form__input"
          placeholder="Password"
        />
        <motion.button
          initial={{ opacity: 0, y: "2rem" }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, ease: "easeInOut", delay: 1.2 },
          }}
          whileHover={{
            border: "1.5px solid #FFFFFF",
            backgroundColor: "rgba(0,0,0,0)",
            color: "#FFFFFF",
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
          className="form__cta"
        >
          Sign up
        </motion.button>
      </div>
    </section>
  );
};

export default Signup;
