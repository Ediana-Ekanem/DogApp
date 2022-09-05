import React from "react";

const Learn = () => {
  return (
    <div>
      <div className="container-fluid learn-session">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 p-5">
              <p className="learn-p">
                Every dog owner has experienced the annoyance of realizing
                you’ve run out of dog food after you’ve run all your errands for
                the night, ending up with one more trip out of the house. Never
                experience this inconvenience again when you order your food
                straight to your door via Petco. Also, Petco rewards online
                customers with things like coupons and free shipping!
              </p>
              <button
                type="button"
                class="btn btn-dark rounded-pill"
                style={{ width: "150px" }}
              >
                Order Now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
