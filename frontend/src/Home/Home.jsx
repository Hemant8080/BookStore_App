import React from "react";
import Navbar from "../component/Navbar";
import Banner from "../component/Banner";
import Footer from "../component/footer";
import Freebook from "../component/Freebook";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Freebook />
      <Footer />
    </>
  );
}

export default Home;
