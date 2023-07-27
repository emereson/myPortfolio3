import React, { useState } from "react";

const MyProjectSlider = () => {
  const [transaleImg, settransaleImg] = useState(3);

  return (
    <div className="myProjectSlider__container">
      <div
        className="myProjectSlider__imgContainer"
        onClick={() => settransaleImg(1)}
        style={
          transaleImg === 1
            ? { transform: `translatex(0) scale(1.1)`, zIndex: "5" }
            : { transform: `translate(-120%) scale(0.7)`, zIndex: 3 }
        }
      >
        <img src="/projectImg/ecomerce.png" alt="" />
        <span
          style={
            transaleImg === 1
              ? { background: "transparent" }
              : { backgroundColor: "" }
          }
        ></span>
      </div>
      <div
        onClick={() => settransaleImg(2)}
        className="myProjectSlider__imgContainer"
        style={
          transaleImg === 2
            ? { transform: `translatex(0) scale(1.1)`, zIndex: "5" }
            : transaleImg === 1
            ? { transform: `translate(-120%) scale(0.7)`, zIndex: 2 }
            : { transform: `translate(-60%) scale(0.9)`, zIndex: 3 }
        }
      >
        <img src="/projectImg/ligaPadel.png" alt="" />
        <span
          style={
            transaleImg === 2
              ? { backgroundColor: "transparent" }
              : { backgroundColor: "" }
          }
        ></span>
      </div>
      <div
        onClick={() => settransaleImg(3)}
        className="myProjectSlider__imgContainer"
        style={
          transaleImg === 3
            ? { transform: `translatex(0) scale(1.1)`, zIndex: "5" }
            : transaleImg === 1
            ? { transform: `translate(-60%) scale(0.9)`, zIndex: 3 }
            : transaleImg === 2
            ? { transform: `translate(-60%) scale(0.9)`, zIndex: 3 }
            : { transform: `translate(60%) scale(0.9)`, zIndex: 3 }
        }
      >
        <img src="/projectImg/netflyx.png" alt="" />
        <span
          style={
            transaleImg === 3
              ? { backgroundColor: "transparent" }
              : { backgroundColor: "" }
          }
        ></span>
      </div>
      <div
        onClick={() => settransaleImg(4)}
        className="myProjectSlider__imgContainer"
        style={
          transaleImg === 4
            ? { transform: `translatex(0) scale(1.1)`, zIndex: "5" }
            : transaleImg === 3
            ? { transform: `translate(60%) scale(0.9)`, zIndex: 3 }
            : transaleImg === 5
            ? { transform: `translate(120%) scale(0.7)`, zIndex: 2 }
            : { transform: `translate(60%) scale(0.9)`, zIndex: 3 }
        }
      >
        <img src="/projectImg/polyclinic.png" alt="" />
        <span
          style={
            transaleImg === 4
              ? { backgroundColor: "transparent" }
              : { backgroundColor: "" }
          }
        ></span>
      </div>
      <div
        onClick={() => settransaleImg(5)}
        className="myProjectSlider__imgContainer"
        style={
          transaleImg === 5
            ? { transform: `translatex(0) scale(1.1)`, zIndex: "5" }
            : { transform: `translate(120%) scale(0.7)`, zIndex: 2 }
        }
      >
        <img src="/projectImg/qrPet.png" alt="" />
        <span
          style={
            transaleImg === 5
              ? { backgroundColor: "transparent" }
              : { backgroundColor: "" }
          }
        ></span>
      </div>
    </div>
  );
};

export default MyProjectSlider;
