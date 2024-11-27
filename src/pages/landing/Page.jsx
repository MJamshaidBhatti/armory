import React, { useEffect, useContext, useRef, useState } from "react";
import Introduction from "../../components/Introduction";
import Features from "../../components/Features";
import About from "../../components/About";
import Leadership from "../../components/Leadership";
import ContactUs from "../../components/ContactUs";
import AppTopbar from "../../components/AppTopbar";
import Footer from "../../components/Footer";

const LandingPage = () => {
  const [isHidden, setIsHidden] = useState(false);

  const toggleMenuItemClick = () => {
    setIsHidden((prevState) => !prevState);
  };
  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {});
    }
  }, []);

  return (
    <div className="">
      <AppTopbar />
        <Introduction />
      <Features />
        <About />
      <Leadership />
      <ContactUs style={{ position: "relative", zIndex: 1 }} />
      <Footer />
    </div>
  );
};

export default LandingPage;
