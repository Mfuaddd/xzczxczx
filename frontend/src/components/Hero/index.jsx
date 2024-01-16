import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./index.scss";

function Hero() {
  return (
    <div className="hero">
      <Splide
        aria-label="My Favorite Images"
        options={{ type: "loop", perPage: 1 }}
      >
        <SplideSlide>
          <div className="slide-card">
            <div className="container slide-card__wrapper">
              <div className="slide-card__info">
                <div className="slide-card__category">
                  Markup: Title With Special Charapters
                </div>
                <div className="slide-card__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Mollitia laboriosam accusantium eum porro ratione
                  necessitatibus quo eligendi incidunt atque non voluptates,
                  iusto distinctio impedit nam. Vero atque officiis illum
                  dignissimos?
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="slide-card">
            <div className="container slide-card__wrapper">
              <div className="slide-card__info">
                <div className="slide-card__category">
                  Markup: Title With Special Charapters
                </div>
                <div className="slide-card__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Mollitia laboriosam accusantium eum porro ratione
                  necessitatibus quo eligendi incidunt atque non voluptates,
                  iusto distinctio impedit nam. Vero atque officiis illum
                  dignissimos?
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Hero;
