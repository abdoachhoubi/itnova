import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import vector from "@/public/vector.svg";
import { NavDesktop } from "@/components";

const { src: vec } = vector;

const About = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);
  return (
    <>
      {loader && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
        ></motion.div>
      )}
      <main className="about__container">
        <NavDesktop />
        <img src={vec} alt="vector" className="vector" />
        <header className="about__header">
          <section className="header__section">
            <motion.h1
              initial={{ opacity: 0, y: "2rem" }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 1, ease: "easeInOut", delay: 1.2 },
              }}
              className="about__title"
            >
              About itNova
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: "2rem" }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 1,
                  ease: "easeInOut",
                  delay: 1.4,
                },
              }}
              className="about__text"
            >
              Our platform connects Moroccan IT enthusiasts, students,
              companies, programmers, and investors.
              <br />
              We provide a vibrant community where members can collaborate,
              learn, and grow together.
              <br />
              From resource sharing and job boards to challenges, hackathons,
              and freelance opportunities,
              <br />
              our platform offers a comprehensive ecosystem for the Moroccan IT
              industry.
              <br />
              Stay updated with the latest news, showcase your skills, find
              exciting job opportunities,
              <br />
              and engage in coding challenges. Join us today and unlock the full
              potential of Morocco's IT community!
            </motion.p>
          </section>
        </header>
      </main>
    </>
  );
};

export default About;
