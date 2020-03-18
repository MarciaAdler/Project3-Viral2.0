import React from "react";
import Header from "../components/Header";
import Markets from "../components/Markets";
import Footer from "../components/Footer";

function Home(props) {
  return (
    <div id="members-page">
      <Header />
      <Markets />
      <Footer />
    </div>
  );
}

export default Home;