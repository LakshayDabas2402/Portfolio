import React from "react";
import { Row } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1>
        <b>
          Let's Get <br />
          Together.
        </b>
      </h1>
      <br />

      <div style={{ padding: "10px 10px 10px 0px" }}>
        <h5>
          If you'd like to learn more about me, feel free to add me on one or
          all of the following sites.
        </h5>
        <br />
        <br />
        <a
          href="www.linkedin.com/in/lakshay-dabas-85471423b"
          className="hvr-sweep-to-right-white btn-lg btn-black"
        >
          <span>Linked In</span>
        </a>
        {/* <a
          href="."
          className="hvr-sweep-to-right-white btn-lg btn-black"
        >
          <span>Facebook</span>
        </a> */}
        {/* <a
          href="."
          className="hvr-sweep-to-right-white btn-lg btn-black"
        >
          <span>Instagram</span>
        </a> */}
      </div>

      <div className="github">
        <a href="https://github.com/LakshayDabas2402">
          {/* <i className="fab fa-github git"></i> */}
          <FaGithub size={70} className="giticon" />
        </a>
      </div>

      <div className="contact-footer">
        <p>
          Copyright © 2024 - <a href=".">Lakshay Dabas</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
