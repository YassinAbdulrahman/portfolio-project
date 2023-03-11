import React from 'react'
import '../assets/pages/_hero-section.scss';
import Projects from '../projects/Projects';

// Src Image Is here
import Royal from '../assets/images/Royal.jpeg';
import movieproject from '../assets/images/movieproject.webp';
import GithubIcon from '../assets/images/github.svg';
import WebsiteIcon from '../assets/images/website.svg';
import hero from '../assets/images/hero.webp';
import Midlib from '../assets/images/Midlib.png';

function ListProject() {
    return (
        <div className='projects-section'>
            <h1 className='title'>Projects</h1>
            <Projects prjectDesc="Royal Pharama is Dynamic website that introduce company information , I worked with 2 teammate on it , We used HTML SCSS Bootstrap Vue.js Leravel and Adobe Xd For Desgining" projectSrc={Royal} projectTitle="Royal Pharama" projectAlt="Royal Pharama" githubLink="https://github.com/" WebsiteIcon={WebsiteIcon} />
            <Projects prjectDesc="Movie Project is a website had made for the second project in the Yemen 🇾🇪 bootcamp 2023 🎉 , it had built by fetching movies API and manipulating the DOM by HTML,CSS, and Javascript, Our AWESOME team has collaborated on this work and has done their best." projectSrc={movieproject} projectTitle="Movie Project" projectAlt="Movie Project" githubLink="https://202212-giz-ye-few.github.io/movie-project-made-by-us/" WebsiteIcon={WebsiteIcon} />
            <Projects prjectDesc="MidLibs Project is a webSite we made I worked in With 3 teammember as group of a project in the Yemen 🇾🇪 bootcamp 2023 we used JavaScript , HTMl Css to build the WebSite." projectSrc={Midlib} projectTitle="MidLibs Project" projectAlt="MidLibs Project" githubLink="https://github.com/202212-GIZ-YE-FEW/mad-libs-errorshttps://github.com/202212-GIZ-YE-FEW/mad-libs-errors" WebsiteIcon={WebsiteIcon} />
        </div>
    )
}

export default ListProject