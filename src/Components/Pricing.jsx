import React from "react";
import Card from "./Card";

const Pricing = () => {
  return (
    <div>
      <div className="container-fluid" style={{ backgroundColor: "#545fd2" }}>
        <div className="container p-5">
          <div className="row ">
            <h2 className="text-white">Pricing</h2>
            <div className="pb-2">
              <hr className="hero-underline  " />
            </div>
            <div className="col-lg-4">
              <Card
                price="200"
                year="Year: 6 months Under"
                life="Life: 12-14 Years"
                color="Color: Black"
              />
            </div>
            <div className="col-lg-4">
              <Card
                price="500"
                year=" Year: 2yrs under"
                life="Life: 12-14 Years"
                color=" Color: gray and blue"
              />
            </div>
            <div className="col-lg-4">
              <Card
                price="1000"
                year="Year: 5yrs over"
                life="Life: 12-14 Years"
                color="Color: White"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
