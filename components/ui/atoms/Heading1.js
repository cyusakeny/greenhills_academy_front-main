import React from "react";

const defaultStyles = {
  fontFamily: "Outfit",
  fontSize: "55px",
  fontWeight: "bold",
};

const Heading1 = ({ children, style }) => {
  const combinedStyles = { ...defaultStyles, ...style };
  return <h1 style={combinedStyles}>{children}</h1>;
};

export default Heading1;
