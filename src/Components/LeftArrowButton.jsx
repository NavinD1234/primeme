import React from "react";
import ReactDOM from "react-dom/client";
// import right_arrow from "../images/right-arrow.png";

function LeftArrowButton(props) {
  let classname = "not_display arrowbutton";
  if (props.isVisible) {
    classname = "arrowbutton";
  }

  return (
    <button
      //   className="arrowbutton"
      className={classname}
      onClick={(event) => {
        event.target.nextElementSibling.scrollLeft -= 1400; // USE REF HOOK
      }}
      style={{ gridArea: "left" }}
      //   style={style}
    >
      </button>
  );
}

export default LeftArrowButton;
