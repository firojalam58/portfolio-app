import React from 'react';
import Typical from 'react-typical';
import '../Home/Home.css'
const Home = () => {
    return (
        <div>
        <div className='home-container'>
            <div className='home-parent'>
                <div className="home-details">
                    <div className="home-icon">
                        <a href="#" target={'_blank'}><i className='fa fa-facebook-square'></i> </a>
                        <a href="#" target={'_blank'}><i className='fa fa-github-square'></i> </a>
                        <a href="#" target={'_blank'}><i className='fa fa-linkedin-square'></i> </a>
                        <a href="#" target={'_blank'}><i className='fa fa-google-plus-square'></i> </a>
                    </div>
                </div>
                <div className="portfolio-details-name">
                    <span className='primary-text text-name'>
                        {""}
                        Hello I'M <span className='highlighted-text'>Firoj 👨‍💼</span>
                    </span>
                </div>
                <div className="portfolio-details-role">
                    <span className='primary-text'>
                        {""}
                        <h1>
                            {""}
                            <Typical
                            steps={[
                                'Full Stack Developer💻', 1000,
                                 'REACT Developer💻', 1000,
                                 'MERN Stack Developer💻', 1000,
                        ]}
                            loop={Infinity}
                            wrapper="p"
                            ></Typical>
                        </h1>
                        <span className='portfolio-role-tagline'>
                        I design and code beautiful things, and I love what I do.!
                        </span>
                    </span>
                </div>
                <div className="portfolio-option">
                    <button className='btn btn-primary sm'>{""}Hire Me {""}</button>
                    <a className='resume' target={'_blank'} href="https://drive.google.com/file/d/1oRA48tch9LsFDMlZn__K9gPq2Gn097R4/view?usp=share_link" download={'https://drive.google.com/file/d/1oRA48tch9LsFDMlZn__K9gPq2Gn097R4/view?usp=share_link'}>
                        <button className='btn btn-primary'>Get Resume</button>
                    </a>
                </div>
            </div>
            <div className="portfolio-img">
                <div className="portfolio-img-background">

                </div>
            </div>
        </div>
        </div>
    );
};

export default Home;