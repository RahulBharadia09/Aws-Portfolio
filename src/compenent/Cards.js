import React from 'react'
import { Link } from "react-router-dom";
import { BsLink45Deg } from "react-icons/bs";

const Cards = (props) => {
  return (
    <>
        <div className="col-12 col-lg-5 col-xl-4">
            <div className="card">
              <div className="image">
                <img src={props.imgName} alt={props.imgAlt} />
              </div>
              <div className="details">
                <div className="center">
                  <h1>
                    <Link target="_blank_" to={props.imgLink}>
                      <BsLink45Deg />
                    </Link>
                  </h1>
                </div>
              </div>
            </div>
          </div>
      
    </>
  )
}

export default Cards
