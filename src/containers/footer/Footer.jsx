import React from 'react';
import './footer.css'

import { Skill, Skill2 } from '../../components';

const Footer = () => (
  <div className='footer' id='footer'>
    <h1>Dhawheedfx</h1>
    <div className='footer-content'>
      <p>Milwaukee, <br />WI 53215,<br />United States<br />+1-414-736-8676</p>
    </div>
    <div className='footer-content'>
      <ul>
      <li><a href="https://twitter.com/djshaheed21"><i class="fa fa-twitter-square"> Twitter</i></a></li>
      <li><a href="https://www.instagram.com/djshaheed21"><i class="fa fa-instagram"> Instagram</i></a></li>
      <li><a href="https://soundcloud.com/shaheed21"><i class="fa fa-soundcloud"> Sound Cloud</i></a></li>
      </ul>
    </div>
    <div className='footer_skill'>
      <Skill />
      <Skill2 />
    </div>
    <div>
      <h3 className='ad'>Finished with love <i class="fa fa-heart"/> <a href="https://finlarks.com" className='ad'>Finlarks</a></h3>
    </div>
  </div>
);

export default Footer;
