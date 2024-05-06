import React from "react";
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import SocialMedia from "./SocialMedia";

const page5 = () => {
  return (
    <div className="bg2">
      <div className="container">
        <div className="text-center text-white ">
          <SocialMedia
            mediaLink="https://www.instagram.com/_the_commrade_/"
            icon={AiOutlineInstagram}
          />
          <SocialMedia
            mediaLink="https://wa.me/919172185204/?"
            icon={AiOutlineWhatsApp}
          />
          <SocialMedia
            mediaLink="https://www.linkedin.com/in/rahulbharadia/"
            icon={AiFillLinkedin}
          />
          <SocialMedia
            mediaLink="https://github.com/RahulBharadia09"
            icon={AiFillGithub}
          />
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
