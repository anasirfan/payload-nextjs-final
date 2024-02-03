import React from "react";
import "./CardSlider.css";
import { useEffect } from "react";
import Card from "./Card";
const CardSlider = () => {
  useEffect(() => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(
      ".slider-wrapper .slide-button"
    );
    const sliderScrollbar = document.querySelector(
      ".container .slider-scrollbar"
    );
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    // Handle scrollbar thumb drag
    const handleMouseDown = (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumb.offsetLeft;
      const maxThumbPosition =
        sliderScrollbar.getBoundingClientRect().width -
        scrollbarThumb.offsetWidth;

      // Update thumb position on mouse move
      const handleMouseMove = (e) => {
        const deltaX = e.clientX - startX;
        const newThumbPosition = thumbPosition + deltaX;

        // Ensure the scrollbar thumb stays within bounds
        const boundedPosition = Math.max(
          0,
          Math.min(maxThumbPosition, newThumbPosition)
        );
        const scrollPosition =
          (boundedPosition / maxThumbPosition) * maxScrollLeft;

        scrollbarThumb.style.left = `${boundedPosition}px`;
        imageList.scrollLeft = scrollPosition;
      };

      // Remove event listeners on mouse up
      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      // Add event listeners for drag interaction
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    // Your existing code...

    // Slide images for custom-prev and custom-next buttons
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

  return (
    <div>
      <div class="main_slider">
        <div class="container">
          <div class="slider-wrapper">
            <div class="main_container_blog_content_heading">
              <h1 class="main_container_blog_content_heading-h1">
                Thought leadership
              </h1>
            </div>
            <ul class="image-list">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </ul>
          </div>
          <div class="additional-buttons">
            <button
              id="custom-prev"
              class="slide-button material-symbols-rounded custom-btn"
            >
              &#8249;
            </button>
            <button
              id="custom-next"
              class="slide-button material-symbols-rounded custom-btn"
            >
              &#8250;
            </button>
          </div>
          <div class="slider-scrollbar">
            <div class="scrollbar-track">
              <div class="scrollbar-thumb"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
