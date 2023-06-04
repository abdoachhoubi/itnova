import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const NavDesktop = () => {
  return (
    <nav className="nav__desktop">
      <motion.h1
        className="nav__title"
        initial={{ opacity: 0, y: "2rem" }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { duration: 1, ease: "easeInOut" },
        }}
      >
        <span className="sora">*</span>
        itNova
      </motion.h1>
      <ul className="nav__list">
        <motion.li
          className="nav__item"
          initial={{ opacity: 0, y: "2rem", color: "rgba(255, 255, 255, .8)" }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, ease: "easeInOut", delay: 0.2 },
          }}
          whileHover={{
            scale: 1.1,
            color: "rgba(255, 255, 255, 1)",
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          <Link href="/">Home</Link>
        </motion.li>
        <motion.li
          className="nav__item"
          initial={{ opacity: 0, y: "2rem", color: "rgba(255, 255, 255, .8)" }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, ease: "easeInOut", delay: 0.4 },
          }}
          whileHover={{
            scale: 1.1,
            color: "rgba(255, 255, 255, 1)",
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          <Link href="/about">About</Link>
        </motion.li>
        <motion.li
          className="nav__item"
          initial={{ opacity: 0, y: "2rem", color: "rgba(255, 255, 255, .8)" }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, ease: "easeInOut", delay: 0.6 },
          }}
          whileHover={{
            scale: 1.1,
            color: "rgba(255, 255, 255, 1)",
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          <Link href="/contact">Contact</Link>
        </motion.li>
      </ul>

      <div className="button__group-h">
        <motion.button
          className="button__primary"
          initial={{
            opacity: 0,
            y: "2rem",
            border: "1.5px solid rgba(255,255,255,0)",
            backgroundColor: "rgba(255,255,255,1)",
            color: "#000000",
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, ease: "easeInOut", delay: 0.8 },
          }}
          whileHover={{
            border: "1.5px solid #FFFFFF",
            backgroundColor: "rgba(255,255,255,0)",
            color: "#FFFFFF",
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
        >
          <Link href="/login">Login</Link>
        </motion.button>
        <motion.button
          className="button__secondary"
          initial={{
            opacity: 0,
            y: "2rem",
            border: "1.5px solid #FFFFFF",
            backgroundColor: "rgba(255,255,255,0)",
            color: "#FFFFFF",
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, ease: "easeInOut", delay: 1 },
          }}
          whileHover={{
            border: "1.5px solid rgba(255,255,255,0)",
            backgroundColor: "rgba(255,255,255,1)",
            color: "#000000",
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
        >
          <Link href="/signup">Sign Up</Link>
        </motion.button>
      </div>
    </nav>
  );
};

export default NavDesktop;
