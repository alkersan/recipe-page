import React, { useEffect, useState } from "react";
import styled from "styled-components";
import desktopImg from "/docs/design/desktop-design.jpg";
import mobileImg from "/docs/design/mobile-design.jpg";
import { QUERIES } from "../constants.js";

const DesignOverlay = () => {
  const [showDesign, setShowDesign] = useState(false);
  const handleKeyDown = (event) => {
    if (event.code === "KeyD") {
      setShowDesign(!showDesign);
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showDesign]);

  if (!showDesign) {
    return <></>;
  }

  return (
    <picture>
      <source srcSet={desktopImg} media={QUERIES.tabletAndUp} />
      <Overlay src={mobileImg} />
    </picture>
  );
};

const Overlay = styled.img`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

export default DesignOverlay;
