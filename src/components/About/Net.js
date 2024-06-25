import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
import MainNavbar from "../mainNavbar/MainNavbar";
import pic from "../../assets/lakshaydp.jpg";
import dew from "../../assets/dew.png";

// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const Net = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          THREE: THREE,
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 1100.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div style={{ position: "relative", width: "100%" }} ref={myRef}>
       <MainNavbar />
 
      <div className="title">
        <b>LAKSHAY DABAS</b>
        <div className="full-stack">FRONT-END DEVELOPER</div>
      </div>
      <div className="image">
        <img src={pic} className="dp" />
      </div>
    </div>
  );
};

export default Net;
