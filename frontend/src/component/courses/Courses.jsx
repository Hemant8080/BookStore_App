import React from "react";
import Navbar from "../Navbar";
import Footer from "../footer";
import Course from "../Course";
import list from "../../assets/list.json";

function Courses() {
  console.log(list);
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Course />
      </div>
      <Footer />
    </>
  );
}

export default Courses;
