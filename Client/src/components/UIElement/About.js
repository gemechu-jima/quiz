import React from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import "./About.css";
export default function About() {
  return (
    <section>
      <div className="about-cta">
        <div className="about-cta-inner">
          <div className="about-cta-inner-left">
            <h2 style={{color:"blue", fontSize:"2rem"}}>We build creative Website and apps</h2>
            <p style={{color:"blue", fontSize:"1rem"}}>
              lerom ipusm As with any gradient, a linear gradient has no
              intrinsic dimensions
            </p>
            <button
              className="button"
            >
              GET STARTED
            </button>
          </div>
          <div>
            <img
              src="images/images/cta-image.png"
              alt=""
              style={{ border: "none" }}
              className="about-section-2-group-image-1"
            />
          </div>
        </div>
      </div>
      <div className="about-second-section">
        <div className="about-cta-inner">
          <div>
            <img
              src="images/images/group-team-2.jpg"
              alt=""
              className="about-section-2-group-image-2"
            />
          </div>
          <div className="about-cta-inner-right">
            <h1>We build creative Website and apps</h1>
            <p>
              lerom ipusm As with any gradient, a linear gradient has no
              intrinsic dimensions
            </p>
            <button
              className="button"
            >
              GET STARTED
            </button>
          </div>
        </div>
      </div>
      <div className="about-section-three">
        <div className="section-three-1">
          <h1 style={{ color: "rgb(120, 0,120" }}> ABOUT US</h1>
          <div className="section-three-2">
            <div>
              <h2>290+</h2>
              <h2>Project Delivered</h2>
            </div>
            <div>
              <h2>550+</h2>
              <h2>Happy Clients</h2>
            </div>
            <div>
              <h2>0</h2>
              <h2>Unhappy Clients</h2>
            </div>
            <div>
              <h2>5000+</h2>
              <h2>Total Coffees</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="about-section-four">
        <div className="about-section-four-1">
          <h2 style={{ color: "rgb(145, 1, 135", fontSize: "2rem" }}>
            Services
          </h2>
          <h2>What We Do</h2>
          <div className="about-section-four-2">
            
          </div>
        </div>
      </div>
      <div className="about-second-section">
        <div className="about-cta-inner">
          <div className="about-cta-inner-right">
            <h2>Our project will help you standout</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div>
            <img
              src="images/images/group-team-1.jpg"
              alt=""
              className="about-section-2-group-image-2"
            />
          </div>
        </div>
      </div>
      <div className="about-our-works">
        <h1 style={{ color:"purple", textAlign:"center"}}> Some Of Our Amazing Works</h1>
       
        <div style={{position:"relative", display:"flex", alignItems:"center"}}>
        <button className="arrow-icon left-arrow"><FaChevronLeft className="arrow"/></button>
        <button className="arrow-icon right-arrow"><FaChevronRight className="arrow"/></button>
        
        </div>
       
      </div>

      <div>
        <h2 style={{ color:"purple", textAlign:"center"}}> Testimonials</h2>
        <h3> What People say</h3>
       
      </div>
      
      <div>
        <h2 style={{ color:"purple", textAlign:"center"}}> FAQ</h2>
        <h3>Frequently asked questions</h3>
          {/* <Accordion/> */}
      </div>
    </section>
  );
}
