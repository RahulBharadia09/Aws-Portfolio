import React from "react";
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const page5 = () => {
  return (
    <div className="bg2">
      <div className="container">
        <div className="text-center text-white ">
          <Link
            className="btn btn-link btn-floating btn-lg text-white m-1"
            to="https://www.instagram.com/_the_commrade_/"
            role="button"
            target="-blank_"
            data-mdb-ripple-color="dark"
          >
            <i>
              <AiOutlineInstagram />
            </i>
          </Link>

          <Link
            className="btn btn-link btn-floating btn-lg text-white m-1"
            to="https://wa.me/919172185204/?"
            target="-blank_"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i>
              <AiOutlineWhatsApp/>
            </i>
          </Link>

          <Link
            className="btn btn-link btn-floating btn-lg text-white m-1"
            to="https://www.linkedin.com/in/dkte-rahulbharadia/"
            target="-blank_"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i>
              <AiFillLinkedin />
            </i>
          </Link>

          <Link
            className="btn btn-link btn-floating btn-lg text-white m-1"
            to="https://github.com/RahulBharadia09"
            role="button"
            target="-blank_"
            data-mdb-ripple-color="dark"
          >
            <i>
              <AiFillGithub />
            </i>
          </Link>
        </div>

        <div className="text-center text-white bg2">
          <div className="p-2">
            <span>&copy; {new Date().getFullYear()} </span>
            <span>Design By Rahul Bharadia</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page5;
