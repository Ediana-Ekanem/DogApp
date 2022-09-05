import React from "react";
import "../CSS/styles.css";

const SubCategory = ({ img, name, content }) => {
  return (
    <div>
      <div className="card Cat-div  media-main">
        <div className="Cat-img-wrapper media-main">
          <img
            src={img}
            className="card-img-top img-wrapper  img-responsive"
            alt="..."
          />
        </div>
        <div className="card-body">
          <h4 className="dog-name">{name}</h4>

          <p className="dog-content  p-1">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default SubCategory;
