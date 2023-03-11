import React from 'react'

import '../assets/pages/_Project.scss'

function Projects({ prjectDesc, projectSrc, projectTitle, projectAlt, githubLink, WebsiteIcon }) {
  return (
    <div className='projects'>
      <div className='container'>
        <div className="row align-items-center">
          <div className="col-lg-6 project-info" data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <h2>{projectTitle}</h2>
            <p>{prjectDesc}</p>
            <a href={githubLink} target={'_blank'}><img src={WebsiteIcon} alt="icon" /></a>
          </div>
          <div className="col-lg-6 project-image" data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <img src={projectSrc} alt={projectAlt} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects