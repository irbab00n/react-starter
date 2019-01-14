import React from 'react';

import Footer from '../components/Footer/';
import Jumbotron from '../components/Jumbotron/';
import SkillCarousel from '../components/SkillCarousel/';

import skills from '../lib/skills';

const Home = (props) => (
  <main className="main-page-layout">

    {/* Jumbotron */}
    <Jumbotron />

    {/* Skill Carousel */}
    <SkillCarousel
      skills={skills}
    />

    <Jumbotron />
    
    <Footer />


  </main>
);

export default Home;