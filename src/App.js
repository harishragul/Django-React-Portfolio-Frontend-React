import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import { Navbar } from './components';
import { Footer } from './containers';
import Main from './main';

import Animations from './pages/animations/Animations';
import Musics from './pages/musics/Musics';
import Photo from './pages/photo_manipulation/Photo_manipulation';

const App = () => {
  return(
    <Router>
      <div className="App">
        <div className="app_bg">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/animations" element={<Animations />} />
          <Route path="/music" element={<Musics />} />
          <Route path="/photo" element={<Photo />} />
        </Routes>
        <div className="main">
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
