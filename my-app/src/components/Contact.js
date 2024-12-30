import React from 'react';
import Contact_form from "./Contact_form";
import Trending from "./Trending";

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <Contact_form/>
        <Trending/>
      </div>
    </section>
  );
};

export default Contact;
