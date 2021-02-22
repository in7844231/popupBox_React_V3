import React from "react";

import Stamp from "./Stamp";
import ChallengeText from "./ChallengeTitle";
import "./styles.css";

// 元件的 props

const MyComponent = () => {
  return (
    <div id={"popupBox-christmas"}>
      <div className={"popupBox-wrapper"}>
        <div className={"popupBox-stamp"}>
          <Stamp src={"/src/2020_pika_stamp.png"} data-role={"popupBox-img"} />
        </div>
        <ChallengeText
          className={"popupBox-title"}
          data-role={"popupBox-title"}
        >
          聖誕挑戰書
        </ChallengeText>

        <ChallengeText
          className={"popupBox-msg-to"}
          data-role={"popupBox-msgTo"}
        >
          Dear Pika
        </ChallengeText>
        <ChallengeText
          className={"popupBox-msg-desc"}
          data-role={"popupBox-msgDesc"}
        >
          聖誕來鬥快!
        </ChallengeText>
        <ChallengeText class="popupBox-msg-from" data-role="popupBox-msgFrom">
          聖誕老人上
        </ChallengeText>
      </div>
    </div>
  );
};

export default MyComponent;
