import React from "react";
import Header from "../components/Header";
import Markets from "../components/Markets";
import Footer from "../components/Footer";
import Labor from "../components/Labor";

function Home(props) {
  return (
    <div>
      <Header />
      <Labor />
      <Footer />
    </div>
  );
}

export default Home;
