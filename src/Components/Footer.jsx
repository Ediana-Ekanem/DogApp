import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="container-fluid bg-dark">
        <div className="row pt-2  ">
          <div className="col-md-6">
            <p className="text-secondary">
              Copyright &copy;2022 Your Dog App ||Ed
            </p>
          </div>
          <div className="col-md-6   ">
            <div className="d-flex justify-content-evenly mb-3 mb-lg-0">
              <div className="text-danger">
                <i className="bi bi-instagram"></i>
              </div>
              <div className="text-primary">
                <i className="bi bi-facebook"></i>
              </div>
              <div className="text-info">
                <i className="bi bi-twitter"></i>
              </div>
              <div className="text-danger">
                <i className="bi bi-google"></i>
              </div>
              <div className="text-primary">
                <i className="bi bi-linkedin"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
