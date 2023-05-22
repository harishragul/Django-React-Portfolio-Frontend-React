import React from 'react';
import './App.css';

import { Softwares } from './components';
import { Header, About, Animations, Photo, Musics } from './containers';

const Main = () => {
    return (
        <div className="App">
        <div className="app_bg">
        <Header />
        </div>
        <Softwares />
        <About />
        <div className="main">
        <Animations />
        <Photo />
        <Musics />
        </div>
        </div>
    );
    }

    export default Main;