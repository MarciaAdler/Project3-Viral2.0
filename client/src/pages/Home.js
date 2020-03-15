import React from "react";
import Header from "../components/Header";
import PageDropdown from "../components/PageDropdown";
import Markets from "../components/Markets";
import CovidInfo from "../components/CovidInfo";
import Labor from "../components/Labor";
import Comments from "../components/Comments";
import Footer from "../components/Footer";

function Home(props) {
  return (
    <div>
      <Header />
      <PageDropdown />
      <Markets />
      <Labor />
      <CovidInfo />
      <Comments />
      <Footer />
    </div>
  );
}

export default Home;
