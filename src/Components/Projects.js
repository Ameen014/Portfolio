import React from 'react';
import ProjectBox from './ProjectBox';
import shake from '../images/Screenshot (295).png';
import laimonah from '../images/Screenshot (296).png';
import stone from '../images/Screenshot (297).png';
import rent from '../images/Screenshot (298).png';

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