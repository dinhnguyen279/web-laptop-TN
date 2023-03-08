import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import NotFound from "./notFound";
const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <NotFound />
      <Footer />
    </>
  );
};

export default ErrorPage;
