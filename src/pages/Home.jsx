import React from "react";
import paris from "../assets/paris.mp4"
import Footer from "../components/Footer";
import Features from "../Features/Features";
import ContactUsPopup from "./ContactUsPopup";
import TravelPackages from "../packages/TravelPackages";

function Home() {
  return (
   <>
      <div className="homepage">
      <div className="Eiffel-Video">
      <video src={paris} autoPlay loop muted/>
      </div>
        <div className="content">
        <h1>Welcome to Travel Company</h1>
        <p>Your adventure starts here! Explore the world's most beautiful destinations.</p>
        <div>
          <h1><ContactUsPopup/></h1>
        </div>
        </div>
      </div>
      <TravelPackages/>
      <Features/>
    <Footer/>
   </>


    
    
  );
}

export default Home;
