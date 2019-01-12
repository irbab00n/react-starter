import React from 'react';

import Jumbotron from '../components/Jumbotron/';
import SkillCarousel from '../components/SkillCarousel/';

import skills from '../lib/skills';

const Home = (props) => (
  <div className="main-page-layout">

    {/* Jumbotron */}
    <Jumbotron />

    {/* Skill Carousel */}
    <SkillCarousel
      skills={skills}
    />

    <Jumbotron />
    
    {/* <div className="container blue-grey-background">
      <div className="inner-wrapper">
        Content
      </div>
    </div> */}


  </div>
);

export default Home;