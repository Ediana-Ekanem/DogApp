import React from "react";

const Subscribe = () => {
  return (
    <div>
      <div className="container-fluid ">
        <div className="row subscribe p-5 ">
          <div className="col-lg-12">
            <h3>Contact Information</h3>
            <div className="pb-3">
              <hr className="hero-underline  " />
            </div>
            <p>
              Please kindly reach out to us in person or through the email below
            </p>
            <p>
              <strong>Address:</strong> G.U AKe Road, Farm Road 2, Eliozu,
              Junction, Port Harcourt
            </p>
            <p>
              <i>Phone: </i>0903 511 6519
            </p>

            <div className="row">
              <div className="col-lg-6 ">
                <div>
                  <input
                    className="subscribe-form"
                    placeholder="Your Email here"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <button
                  type="button"
                  class="btn btn-light rounded-pill btn-subscribe mt-4 mt-lg-0 "
                >
                  Send Mail
                </button>
              </div>
            </div>
            {/* <div className=" d-flex justify-content-center gap-4 media-sub">
            <div>
                <input
                  className="subscribe-form"
                  placeholder="Your Email here"
                />
              </div>
              <div>
                <button
                  type="button"
                  class="btn btn-light rounded-pill btn-subscribe "
                >
                  Send Mail
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
