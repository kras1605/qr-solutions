import React from "react";

import NextNProgress from "nextjs-progressbar";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

import Header from "./Header";
import Footer from "./Footer";

const Index = (props) => {
  const { Component, pageProps } = props;
  const router = useRouter();

  return (
    router.pathname.includes(['/404', '/500']) ? <Component {...pageProps} /> : <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-700 via-orange-400 to-rose-600 text-text-main min-h-screen min-w-full w-full overflow-x-hidden flex flex-col">
      <NextNProgress
        color="#dd6b59"
        height={2}
        options={{ showSpinner: false }}
      />
      { router.pathname !== '/404' && <Header />}
      <Component {...pageProps} />
      { router.pathname !== '/404' && <Footer />}
    </motion.div>
  );
};

export default Index;
