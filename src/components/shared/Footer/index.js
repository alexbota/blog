import React from "react";
// import styles
import "./index.sass";

const Footer = () => {
  return (
    <footer className="p-d-flex p-jc-center p-ai-center">
      <nav>
        <ul className="p-d-flex">
          <li className="p-mx-3">
            <a
              href="https://www.linkedin.com/in/alexbota/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li className="p-mx-3">
            <a href="mailto:alexbota@outlook.it">Email</a>
          </li>
          <li className="p-mx-3">
            <a
              href="https://github.com/alexbota"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
