import React from 'react';
import './skill.css';

import a_live from '../../assets/skill/a_live.png';
import fl from '../../assets/skill/fl.png';
import nuke from '../../assets/skill/nuke.png';
import pr from '../../assets/skill/pr.png';
import redshift from '../../assets/skill/redshift.png';
import vray from '../../assets/skill/vray.png';

const Skill = () => (
    <div className='skill_content' id="home">
      <img src={vray} alt="Ablaton Live" className='skill_image' />
      <img src={a_live} alt="Ablaton Live" className='skill_image' />
      <img src={fl} alt="Ablaton Live" className='skill_image' />
      <img src={nuke} alt="Ablaton Live" className='skill_image' />
      <img src={pr} alt="Ablaton Live" className='skill_image' />
      <img src={redshift} alt="Ablaton Live" className='skill_image' />
    </div>
);
  
  export default Skill;