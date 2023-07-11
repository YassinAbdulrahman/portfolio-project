import React from "react";

import "../assets/pages/_Project.scss";

function Projects({
  prjectDesc,
  projectSrc,
  projectTitle,
  projectAlt,
  githubLink,
  WebsiteIcon,
  githubIcon,
  linkgithub,
  webIcon
}) {
  return (
    <div className="projects">
      <div className="container">
        <div
          className="row align-items-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="col-lg-6 project-info">
            <h2>{projectTitle}</h2>
            <p>{prjectDesc}</p>
            {
              githubIcon && (<a href={linkgithub} target={"_blank"}>
              <img src="https://skillicons.dev/icons?i=github&theme=dark"/>
            </a>)
            }
            {
              webIcon && (
                <a href={githubLink} target={"_blank"} >
                <img src={WebsiteIcon} alt="icon"/>
              </a>
              )
            }
            
            
          </div>
          <div className="col-lg-6 project-image">
            <img src={projectSrc} alt={projectAlt} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
