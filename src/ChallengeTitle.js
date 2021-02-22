import React from "react";

const ChallengeTitle = (props) => {
  const title = props.children;
  return (
    <div className={props.className} data-role={props.dataRole}>
      {title}
    </div>
  );
};

export default ChallengeTitle;
