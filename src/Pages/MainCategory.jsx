import React from "react";
import "../CSS/styles.css";
import SubCategory from "../Components/SubCategory";

const MainCategory = () => {
  return (
    <div>
      <div className="continer-fluid bg-dark ">
        <div className="container p-5">
          <h1 className="text-light">Categories</h1>
          <div className="pb-3">
            <hr className="hero-underline  " />
          </div>

          <p className="text-white media-main-p">
            We have varieties of dogs that suit your needs, like The German
            shepered, Golden retriever, Poodle,Pormeranian etc. We have all the
            groups of dogs to choose from, : Sporting, Hound, Working, Terrier,
            Toy, Non-Sporting, Herding.
          </p>
          <div className="row p-3">
            <div className="col-lg-4">
              <SubCategory
                img="https://c1.wallpaperflare.com/preview/248/509/102/dog-labrador-light-brown-hundeportrait.jpg"
                name="Labrador Retriever"
                content="The sweet-faced,labrador Retriever is America's most popular dog breed. Friendly, outgoing, and high-spirited"
              />
            </div>
            <div className="col-lg-4">
              <SubCategory
                img="https://wallpapercave.com/wp/0xTUBtu.jpg"
                name="Border Collie"
                content="The Border Collie is an amazing bright and workaholic dog"
              />
            </div>
            <div className="col-lg-4">
              <SubCategory
                img="https://cdn.wallpapersafari.com/24/56/OcA2ba.jpg"
                name="The Bull Dog"
                content="The Bulldog is a thick-set, low-slung, well-muscled bruiser.These docile, loyal companions adapt well to town or country"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCategory;
