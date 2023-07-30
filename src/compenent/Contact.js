import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";




const Contact = () => {



  function Submit(e) {
    
    const userDetails = document.querySelector("form");
    e.preventDefault();
    const formData = new FormData(userDetails);
    fetch(
      "https://script.google.com/macros/s/AKfycby1fPfJxLRl3DZrBzmk1MAuxw7pxmkqsz0WEtEhQoY-XUfs5COEWkhd6SUbFR_TzMwKsw/exec",
      {
        method: "POST",
        body: formData,
      });
      userDetails.reset();
  }



  
 




  return (

    
    <div className="bg2 section">
      <div className="container">
        <div
          className="row justify-content-evenly contactform "
          style={{ color: "#5E5D5F" }}
        >
          <div className="col-sm-12 col-lg-5 order-2 order-lg-1 pe-lg-5 text-lg-start text-md-center text-center">
            <span className="subtitle text-center" style={{ color: "#5E5D5F" }}>
              Contact Me
            </span>
            <h2>Hire me</h2>
            <div className="row call-details mb-4">
              <label className="col-sm-3 col-lg-4"> Call Directly</label>

              <div className="col-sm-9 col-lg-8 mb-3 mb-lg-2 text-md-start">
                <Link to="">+91 9172185204</Link>
              </div>

              <label className="col-sm-3 col-lg-4">Contact Email :</label>
              <div className="col-sm-9 col-lg-8 mb-3 mb-lg-2 text-md-start">
                <Link to="mailto:rahulbharadia917@gmail.com">
                  rahulbharadia917@gmail.com
                </Link>
              </div>
            </div>

            <Form
              method="POST"
              className="form contactform"
              onSubmit={(e) => Submit(e)}
              acceptCharset="utf-8"
              name="userDetails"
            >
              <div className="mt-3 ">
                <label htmlFor="name">Your Name : </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control border-top-0 border-end-0 border-start-0"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="contact_num">Your Contact Number</label>
                <input
                  type="number"
                  name="contact_num"
                  id="contact_num"
                  className="form-control border-top-0 border-end-0 border-start-0"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="email">Your Email Id : </label>
                <input
                  type="email"
                  name="email_id"
                  id="email_id "
                  className="form-control border-top-0 border-end-0 border-start-0"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="message">Message : </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="1"
                  className=" form-control border-top-0 border-end-0 border-start-0"
                  autoComplete="off"
                  width="100%"
                ></textarea>
              </div>
              <button   type="submit" className="main-btn mt-4">
                Submit
              </button>
                         </Form>
              <div id="demo"></div>

            

          </div>

          <div className="map col-sm-12 col-lg-5 order-1 mb-4 order-lg-1 mb-lg-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61143.22453664123!2d74.42902501051852!3d16.704307403674793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0e265ba450af7%3A0x671b0ba88c556c2!2sIchalkaranji%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1642575864751!5m2!1sen!2sin"
              title="Gmap"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
