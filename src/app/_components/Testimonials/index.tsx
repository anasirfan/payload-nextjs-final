"use client"
import React, { useState,useEffect } from 'react';
import './CardSlider.css';
import Card from './Card';
import { Media as MediaType } from '../../../payload/payload-types';

interface Testimonial {
  media?: string | MediaType | null;
  title?: string | null;
  description?: string | null;
  link?: string | null;
}

interface CardSliderProps {
  content?: Testimonial[];
}

const Testimonial: React.FC<CardSliderProps> = ({ content }) => {
 let [sliderNumber, setSliderNumber] = useState(1);
  let [totalSlides, setTotalSlides] = useState(Math.trunc(content.length / 3));
  useEffect(() => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(
      ".slider-wrapper .slide-button"
    );

    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    const customPrevButton = document.getElementById("custom-prev");
    const customNextButton = document.getElementById("custom-next");

    customPrevButton.addEventListener("click", () => {
      const scrollAmount = imageList.clientWidth;
      imageList.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    customNextButton.addEventListener("click", () => {
      const scrollAmount = imageList.clientWidth;
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  }, []);

  const incSlide = () => {
    if (sliderNumber < totalSlides) {
      setSliderNumber(++sliderNumber);
    }
  };

  const decSlide = () => {
    if (sliderNumber <= totalSlides && sliderNumber > 1) {
      setSliderNumber(--sliderNumber);
    }
  };
  return (
    <>
     

      <div className="main_slider">
        
        <div className="slider_container main_container_corporate_content">
          <div className="slider-wrapper">
            <div className="main_container_blog_content_heading">
              <h1 className="main_container_blog_content_heading_h1">
                Thought leadership
              </h1>
            </div>
            <ul className="image-list">
              {content?.map((testimonial, index) => (
                <Card key={index} testimonial={testimonial}/>
              ))}
            </ul>
          </div>
          <div className="additional-buttons">
            <div className="bar_with_btn"></div>
            <button
              onClick={() => {
                decSlide();
              }}
              id="custom-prev"
              className="slide-button material-symbols-rounded custom-btn"
            >
              &#8249;
            </button>
            <p className="slide_number">
              {sliderNumber}/{totalSlides}
            </p>
            <button
              onClick={() => {
                incSlide();
              }}
              id="custom-next"
              className="slide-button material-symbols-rounded custom-btn"
            >
              &#8250;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
