import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import reactlogo from '../assets/images/reactjs-icon.svg'
import '../assets/pages/_slider.scss'
import bootstrap from '../assets/images/bootstrap.svg';
import vue from '../assets/images/vue.svg';
import git from '../assets/images/git.svg';
import firebase from '../assets/images/firebase.svg';
import javascript from '../assets/images/javascript.svg';
import html from '../assets/images/html.svg';
import css from '../assets/images/css.svg';
import sass from '../assets/images/sass.svg';

function Slider() {
    //Owl Carousel Settings
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        autoplay: true,
        smartSpeed: 800,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 5,
            }
        },
    };
    return (
        <OwlCarousel className='owl-theme' {...options}>
            <div class='item'>
                <a href="https://reactjs.org/" target={'_blank'}><img src={reactlogo} /></a>
                <p>React</p>
            </div>
            <div class='item txt-c'>
                <a href="https://getbootstrap.com/" target={'_blank'}><img src={bootstrap} /></a>
                <p>Bootstrap</p>
            </div>
            <div class='item'>
                <a href="https://vuejs.org/" target={'_blank'}><img src={vue} /></a>
                <p>Vue</p>
            </div>
            <div class='item'>
                <a href="https://github.com/" target={'_blank'}><img src={git} /></a>
                <p>Git Version Control</p>
            </div>
            <div class='item'>
                <a href="https://firebase.google.com/" target={'_blank'}><img src={firebase} /></a>
                <p>firebase</p>
            </div>
            <div class='item'>
                <a href="https://www.javascript.com/" target={'_blank'}><img src={javascript} /></a>
                <p>Javascript</p>
            </div>
            <div class='item'>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target={'_blank'}><img src={css} /></a>
                <p>CSS</p>
            </div>
            <div class='item'>
                <a href="https://sass-lang.com/" target={'_blank'}><img src={sass} /></a>
                <p>SASS</p>
            </div>
        </OwlCarousel>
    );
}

export default Slider