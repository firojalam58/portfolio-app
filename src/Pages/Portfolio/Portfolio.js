import React from 'react';
import '../About/About.css'
import img1 from '../../../src/images/car-selling.png'
import img2 from '../../../src/images/sports.png'
import img3 from '../../../src/images/eduhas.png' 
import { Fade  } from 'react-reveal';
import { Link } from 'react-router-dom';
const Portfolio = () => {
    return (
        <div className='bg margin-auto py-5'>
            <div className="title text-center">
                <h2>MY PROJECTS <span className='about-text'>HERE</span></h2>
                <span className='title_p'>I design and code beautiful things, and I love what I do.</span>
            </div>
<div className="grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2   gap-10 mx-4 py-4">
<div className="card  bg-base-100 shadow-xl">
        <figure><img src={img1} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">
           Car Selling!
            <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
            <a href='https://github.com/firojalam58/car-selling-client' target={'_blank'} className="btn btn-primary">Github</a>
            <a href='https://car-selling-f1fd9.web.app/' target={'_blank'} className="btn">Live</a>
            </div>
  </div>
</div>
<Fade left>
<div className="card  bg-base-100 shadow-xl">
        <figure><img src={img2} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">
            Photograohy!
            <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
                <Link to={'/photography'} className="btn btn-primary">View Details</Link>
            {/* <a href='https://github.com/firojalam58/simple-react-app'target={'_blank'} className="btn btn-primary"></a> */}
            <a href='https://github.com/firojalam58/simple-react-app'target={'_blank'} className="btn btn-primary">Github Link</a>
            <a href='https://assignment11-8b96d.web.app/'target={'_blank'} className="btn">Live Link</a>
            </div>
  </div>
</div>
</Fade >
<div className="card  bg-base-100 shadow-xl">
        <figure><img src={img3} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">
            Edu Hash!
            <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
            <a href='https://github.com/firojalam58/eduhas-client-site'target={'_blank'} className="btn btn-primary">Github</a>
            <a href='https://asignment-10-710fa.web.app/'target={'_blank'} className="btn">Live</a>
            </div>
  </div>
</div>
</div>
        </div>
    );
};

export default Portfolio;