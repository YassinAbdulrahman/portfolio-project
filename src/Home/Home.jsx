import React from 'react'
import '../assets/pages/_hero-section.scss'
import Slider from '../compenents/Slider'
import '../assets/pages/_slider.scss'
import Projects from '../projects/Projects';
import { NavLink } from 'react-router-dom'


// Src Image Is here
import Royal from '../assets/images/Royal.jpeg';
import movieproject from '../assets/images/movieproject.webp';
import GithubIcon from '../assets/images/github.svg';
import WebsiteIcon from '../assets/images/website.svg';
import hero from '../assets/images/hero.webp';
import Midlib from '../assets/images/Midlib.png';
import cv from '../assets/images/CV.png';


function Home() {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <>
            <section className='hero-section'>
                <div className="container">
                    <div className='row align-items-center'>
                        <div className='col-lg-6 left-section' data-aos="fade-up">
                            <span>Hi there, my name is</span>
                            <h2>Yassin Alhumaidi</h2>
                            <h3>We ensure that sites meet user expectations</h3>
                            <p>I am a Junior Frontend Web Developer based in Sana'a, who is passionate about building user-friendly websites. I am a student of Re:Coded Web Development bootcamp</p>
                            <a href={cv} download="CV" className='btn-cv'>
                                <button class="cssbuttons-io-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"></path></svg>
                                    <span>Download C.V</span>
                                </button>
                            </a>
                        </div>
                        <div className='col-lg-6 right-section text-center' data-aos="fade-down">
                            <img src={hero} alt="Yassin Alhuamidi" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='second-section'>
                <div className='container'>
                    <h1>Skills</h1>
                    <Slider/>
                </div>
            </section>
            <section className='projects-section'>
                <h1 className='title'>Projects</h1>
                <Projects prjectDesc="Royal Pharama is Dynamic website that introduce company information , I worked with 2 teammate on it , We used HTML SCSS Bootstrap Vue.js Leravel and Adobe Xd For Desgining" projectSrc={Royal} projectTitle="Royal Pharama" projectAlt="Royal Pharama" githubLink="https://github.com/" WebsiteIcon={WebsiteIcon} />
                <Projects prjectDesc="Movie Project is a website had made for the second project in the Yemen 🇾🇪 bootcamp 2023 🎉 , it had built by fetching movies API and manipulating the DOM by HTML,CSS, and Javascript, Our AWESOME team has collaborated on this work and has done their best." projectSrc={movieproject} projectTitle="Movie Project" projectAlt="Movie Project" githubLink="https://202212-giz-ye-few.github.io/movie-project-made-by-us/" WebsiteIcon={WebsiteIcon} />
                <Projects prjectDesc="MidLibs Project is a webSite we made I worked in With 3 teammember as group of a project in the Yemen 🇾🇪 bootcamp 2023 we used JavaScript , HTMl Css to build the WebSite." projectSrc={Midlib} projectTitle="MidLibs Project" projectAlt="MidLibs Project" githubLink="https://github.com/202212-GIZ-YE-FEW/mad-libs-errorshttps://github.com/202212-GIZ-YE-FEW/mad-libs-errors" WebsiteIcon={WebsiteIcon} />
                <NavLink onClick={scrollToTop} to="/ListProject" className='projectlist-link'>See More Project    </NavLink>
            </section>
        </>

    )
}

export default Home