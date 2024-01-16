import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../../components/Hero";
import WooCommerce from "../../components/WooCommerce";
import Blogs from "../../components/Blogs";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Hero />
      <WooCommerce/>
      <Blogs/>
    </>
  );
}

export default Home;
