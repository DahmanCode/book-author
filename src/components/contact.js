import React from "react";
import data from "../data/contact.json";
import { Link } from "react-router-dom"
import { socialLink } from "../global";

const Contact = ({ isBg }) => {
  const { contact } = data;
  return (
    <section 
     id="contact"
     className={`p-80px-tb ${isBg === "yes" ? "bg-one" : ""}`}
     >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span>{contact.subtitle}</span>
              <h2 className='display-6'>{contact.title}</h2>
              <div className='section-divider divider-traingle'></div>
            </div>
          </div>
        </div>

        <div className="row">
          <div
            className="col-lg-8 col-md-6 col-sm-12 m-25px-b"
            data-aos="fade-right"
            data-aos-duration='1000'
            data-aos-delay='200'
          >
            <div className="contant-form-box">
              <form 
              id="contact-form"
              >
                <div className="mb13">
                  <input 
                  name="name"
                  className="conatct-name"
                  id="contact-name"
                  type="text"
                  placeholder="Your Name"
                  required
                  />
                </div>
                <div className="mb13">
                  <input 
                  name="email"
                  className="conatct-email"
                  id="contact-email"
                  type="text"
                  placeholder="Your Email"
                  required
                  />
                </div>
                <div className="mb13">
                  <input 
                  name="subject"
                  className="conatct-subject"
                  id="contact-subject"
                  type="text"
                  placeholder="Your Subject"
                  required
                  />
                </div>
                <div className="mb13">
                  <textarea 
                  name="message"
                  className="conatct-message"
                  id="contact-message"
                  type="text"
                  placeholder="Your Message"
                  required
                  ></textarea>
                </div>
                <button
                type="submit"
                className="button button__primary align-items-center"
                >
                  <span>{contact.btnText}</span>
                </button>
              </form>
            </div>
          </div>
          <div 
          className="col-lg-4 col-md-6 col-sm-12 m-25px-b"
          data-aos="fade-left"
          data-aos-duration='1000'
          data-aos-delay='300'
          >
            <div className="contact__address p-30px">
            <ul className="contact__address__content">
              <li>
                <span>{contact.address}</span>
                {contact.addressText1}
                <br />
                {contact.addressText2}
              </li>
              <li>
                <span>{contact.phone}</span>
                <a target="blank_" href="tel:11255576665">{contact.number}</a>
              </li>
              <li>
                <span>{contact.email}</span>
                <Link to="/#">{contact.emailText}</Link>
              </li>
            </ul>
            <h4>{contact.socialTitle}</h4>
            <ul className="social-icon mt-3">
                {socialLink.facebook === "" ? (
                  ""
                ) : (
                  <li>
                    <a target="blank_" href={socialLink.facebook}>
                      <img
                        className="img-fluid"
                        src="assets/icons/facebook.svg"
                        alt="icon"
                        width="25"
                        height="25"
                      />
                    </a>
                  </li>
                )}
                {socialLink.twitter === "" ? (
                  ""
                ) : (
                  <li>
                    <a target="blank_" href={socialLink.twitter}>
                      <img
                        className="img-fluid"
                        src="assets/icons/twitter.svg"
                        alt="icon"
                        width="25"
                        height="25"
                      />
                    </a>
                  </li>
                )}
                {socialLink.linkedin === "" ? (
                  ""
                ) : (
                  <li>
                    <a target="blank_" href={socialLink.linkedin}>
                      <img
                        className="img-fluid"
                        src="assets/icons/linkedin.svg"
                        alt="icon"
                        width="25"
                        height="25"
                      />
                    </a>
                  </li>
                )}
                {socialLink.youtube === "" ? (
                  ""
                ) : (
                  <li>
                    <a target="blank_" href={socialLink.youtube}>
                      <img
                        className="img-fluid"
                        src="assets/icons/youtube-play.svg"
                        alt="icon"
                        width="25"
                        height="25"
                      />
                    </a>
                  </li>
                )}
                {socialLink.whatsapp === "" ? (
                  ""
                ) : (
                  <li>
                    <a target="blank_" href={socialLink.whatsapp}>
                      <img
                        className="img-fluid"
                        src="assets/icons/whatsapp.svg"
                        alt="icon"
                        width="25"
                        height="25"
                      />
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;