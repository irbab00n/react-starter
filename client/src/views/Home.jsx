import React from 'react';

import Jumbotron from '../components/Jumbotron';
import SkillCarousel from '../components/SkillCarousel';

const Home = (props) => (
  <div className="main-page-layout">

    {/* Jumbotron */}
    <Jumbotron />

    {/* Skill Carousel */}
    <SkillCarousel />
    
    <div className="container blue-grey-background">
      <div className="inner-wrapper">
        Content
      </div>
    </div>


  </div>
);

export default Home;