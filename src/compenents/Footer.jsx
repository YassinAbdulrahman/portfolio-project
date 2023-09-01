import React from "react";
import GithubIcon from "../assets/images/github.svg";
import LinkedinIcon from "../assets/images/linkedin.svg";
import "../assets/pages/_footer.scss";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 left-side">
            <span>What’s Next? 😉</span>
            <h3>Get In Touch</h3>
          </div>
          <div className="col-lg-6 right-side">
            <p>
              I’m currently looking for any new opportunities, my inbox is
              always open. Whether you have a question or just want to say hi,
              I’ll try my best to get back to you!
            </p>
            <a href="mailto:yassinalhumaidi@gmail.com">
              yassinalhumaidi@gmail.com
            </a>{" "}
            <br />
            <a
              href="https://www.linkedin.com/in/yassinalhumaidi/"
              target={"_blank"}
            >
              <img src={LinkedinIcon} alt="icon" />
            </a>
            <a
              href="www.linkedin.com/in/yassinalhumaidi

"
              target={"_blank"}
            >
              <img src={GithubIcon} alt="icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
