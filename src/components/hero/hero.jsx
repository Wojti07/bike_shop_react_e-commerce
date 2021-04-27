import React from "react";
import "./hero.styles.scss";

const Hero = () => {
  return (
    <section className="hero hero-image ">
      <div className="container hero-body ">
        <div className="row">
          <div className="col">
            <h1 className="hero-title">Buy it and spin your wheel</h1>
            <div className="shop-now-btn">
              <button
                id="shop-now"
                className="btn btn-primary btn-success"
                type="button"
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
