import React from 'react';
import ProjectBox from './ProjectBox';
import shake from '../images/Screenshot 2024-10-29 195532.png';
import laimonah from '../images/Screenshot 2024-10-29 200446.png';
import stone from '../images/Screenshot 2024-10-29 200052.png';
import rent from '../images/Screenshot 2024-10-29 195600.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={shake} projectName="Shake Shake" />
        <ProjectBox projectPhoto={laimonah} projectName="Laimonah" />
        <ProjectBox projectPhoto={stone} projectName="Hand Stone" />
        <ProjectBox projectPhoto={rent} projectName="Rent Chicken" />
      </div>

    </div>
  )
}

export default Projects