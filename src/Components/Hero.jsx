import React from "react";
import "../CSS/styles.css";
import Dog6 from "../Assets/Dog6.webp";
import Dog3 from "../Assets/Dog3.jpg";

const Hero = () => {
  return (
    <div>
      <div className="container-fluid bg-dark">
        <div className="container">
          <div className="row">
            <h1 className="text-white pt-4 ">Welcome To New Dog App</h1>
            <div className="">
              <hr className="hero-underline " />
            </div>

            <div className="col-lg-6 my-3">
              <p className="my-justify text-white">
                The way we look at personal pets over the years has changed, but
                humans have cared for animals forever. First, as cattle and
                workers; now, pets are looked at as part of the family.Dogs are
                man’s best friend, and they make our lives so much better. This
                companionship comes with its anxieties, however. We wonder if we
                are taking care of them to the best of our abilities? Who will
                care for them while we’re away? Doing some research on a
                professional dog website will help make us the best pet parents
                possible.
              </p>
            </div>
            <div className="col-lg-6 my-3 media-img">
              <div className="row g-2">
                <div className=" col-lg-6">
                  <div className=" header-div">
                    <img
                      src={Dog3}
                      alt="picture of dog "
                      className="header-img rounded border border-info pad"
                    />
                  </div>
                </div>
                <div className="col-lg-6 ">
                  <div className=" header-div">
                    <img
                      src={Dog6}
                      alt="picture of dog"
                      className="header-img rounded border border-info  pad"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
