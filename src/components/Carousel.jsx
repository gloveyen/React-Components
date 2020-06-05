import React, { useState } from "react";
import "../assets/style/components/Carousel.css";

function Carousel(props) {
  const [focusIdx, setFocusIdx] = useState(1);

  function nextImg() {
    if (focusIdx === props.children.length - 1) {
      setFocusIdx(0);
    } else {
      setFocusIdx(focusIdx + 1);
    }
  }

  function prevImg() {
    if (focusIdx === 0) {
      setFocusIdx(props.children.length - 1);
    } else {
      setFocusIdx(focusIdx - 1);
    }
  }

  return (
    <div className="carousel-component">
      <div className="carousel-header">
        {props.children[focusIdx].props.name}
      </div>
      <button className="carousel-btn-left" onClick={prevImg}>
        <i className="fas fa-arrow-circle-left"></i>
      </button>
      <button className="carousel-btn-right" onClick={nextImg}>
        <i className="fas fa-arrow-circle-right"></i>
      </button>
      {props.children[focusIdx]}
    </div>
  );
}

export default Carousel;
