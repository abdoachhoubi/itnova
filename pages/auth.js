import { useRouter } from "next/router";
import { Signin, Signup } from "@/views";
import Head from "next/head";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import vector from "@/public/vector.svg";
import { NavDesktop } from "@/components";

const { src: vec } = vector;

const Auth = () => {
  const router = useRouter();
  const { query } = router;
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);
  return (
    <>
      <Head>
        <title>itNova</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loader && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
        ></motion.div>
      )}
      <main className="auth__container">
        <NavDesktop />
        <img src={vec} alt="vector" className="vector" />
        {query.ref === "signin" ? <Signin /> : <Signup />}
      </main>
    </>
  );
};

export default Auth;