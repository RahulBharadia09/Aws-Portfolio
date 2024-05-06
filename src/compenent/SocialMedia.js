import React from "react";
import { Link } from "react-router-dom";


const SocialMedia = (props) => {
  return (
    <>
      <Link
        className="btn btn-link btn-floating btn-lg text-white m-1"
        to={props.mediaLink}
        role="button"
        target="-blank_"
        data-mdb-ripple-color="dark"
      >
        <i>
          <props.icon />
        </i>
      </Link>
    </>
  );
};

export default SocialMedia;
