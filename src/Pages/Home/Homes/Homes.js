import React from 'react';
import About from '../../About/About';
import Contract from '../../Contract/Contract';
import Portfolio from '../../Portfolio/Portfolio';
import Skill from '../../Skill/Skill';
import Home from '../Home';

const Homes = () => {
    return (
        <div>
            <Home></Home>
            <About></About>
            <Portfolio></Portfolio>
            <Skill></Skill>
            <Contract></Contract>
        </div>
    );
};

export default Homes;