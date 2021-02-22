import React from "react";

const Stamp = (props) => {
  const path = props.children;
  return <img src={props.src} alt="" />;
};

export default Stamp;
