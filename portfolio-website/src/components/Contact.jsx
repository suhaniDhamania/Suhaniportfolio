


import React from "react";
import contactImage from "../assets/contact.jpg";
import "./Contact.css";
// import backgroundvideo from "../assets/background.mp4"

const Contact = () => {
  return (
<>
  {/* <video autoPlay loop muted playsInline className="bg-video">
                   <source src={backgroundvideo} type="video/mp4" />
                 </video> */}
     
    <div className="contact-container" id="contact">
      <div className="head">
       <h1 dstyle={{textAlign:"center",color:"#e4d94e",backgroundColor:"#1a1a1a"}}ata-aos="fade-right"  >Contact.</h1>
    </div>
      <div className="contact-content">
        <div data-aos="fade-right" className="contact-image">
          <img src={contactImage} alt="Contact" />
        </div>

        <div data-aos="fade-left" className="contact-text">
          <p>
            Let's Connect! Whether you have a project idea, a question, or just want to say hello — I'm always open to meaningful conversations.
            Feel free to drop a message using the form below or reach out via email or social media. Looking forward to hearing from you!
          </p>
          <h5 className="contact-email">suhanidhamania157@gmail.com</h5>
          <h5 className="contact-phone">8851648618</h5>
        </div>
      </div>
    </div>

</>
  );
};

export default Contact;
