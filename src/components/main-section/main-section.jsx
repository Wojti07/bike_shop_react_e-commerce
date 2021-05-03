import React from "react";
import { withRouter } from "react-router-dom";
import bikeProd from "../../icon/bicycle-cart1.png";
import "./main-section.styles.scss";

const MainSection = ({ history }) => {
  return (
    <div className="main-section container">
      <div className="row">
        <div className="col-sm image">
          <img src={bikeProd} alt=""  className="img-thumbnail" />
        </div>
        <div className="col-sm description">
          <h2>Lorem ipsum dolor sit amet consectetur.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            expedita iusto explicabo asperiores, quam officiis architecto quo.
            Ullam pariatur repellendus iusto ipsum exercitationem ratione!
          </p>
          <button
            className="button btn-success"
            id="shop-now"
            onClick={() => history.push("/product/1")}
          >
            BIKE
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MainSection);
