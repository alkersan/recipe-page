import React from "react";
import styled from "styled-components";

const VisuallyHidden = ({ children, ...delegated }) => {
  return <Wrapper {...delegated}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  clip-path: inset(50%);
  white-space: nowrap;
`;

export default VisuallyHidden;
