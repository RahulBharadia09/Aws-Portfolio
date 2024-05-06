import React from "react";

const AboutDesc = (props) => {
  return (
    <>
      <div className="row gap-4 pt-5 justify-content-between">
        <div className="col-4 fontcolor">
          <h4>{props.title}:</h4>
        </div>
        <div className="col-7">
          <div className="fontcolor">
            <p>{props.tech}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutDesc;
