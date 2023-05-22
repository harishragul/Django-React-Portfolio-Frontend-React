import React from 'react';
import './skill.css';

import after_effects from '../../assets/skill/after-effects.png';
import cinema_4d from '../../assets/skill/cinema_4d.png';
import Houdini from '../../assets/skill/Houdini.png';
import photo_shop from '../../assets/skill/photo-shop.png';
import arnold from '../../assets/skill/arnold.png';
import ds_max from '../../assets/skill/3ds_max.png';

const Skill2 = () => (
    <div className='skill_content' id="home">
      <img src={ds_max} alt="Ablaton Live" className='skill_image' />
      <img src={after_effects} alt="Ablaton Live" className='skill_image' />
      <img src={cinema_4d} alt="Ablaton Live" className='skill_image' />
      <img src={Houdini} alt="Ablaton Live" className='skill_image' />
      <img src={photo_shop} alt="Ablaton Live" className='skill_image' />
      <img src={arnold} alt="Ablaton Live" className='skill_image' />
    </div>
);
  
  export default Skill2;