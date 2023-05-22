import React from 'react';
import { Link } from "react-router-dom";
import './musics.css'

class Musics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewMain: true,
      activeItem: {
        description: "",
        main: false
      },
      musicList: []
      };
  }

  async componentDidMount() {
    try {
      const res = await fetch('https://shaheedbackend.herokuapp.com/api/music/');
      //const res = await fetch('http://127.0.0.1:8000/api/music/');
      const musicList = await res.json();
      this.setState({
        musicList
      });
    } catch (e) {
      console.log(e);
  }
  }

  renderItems = () => {
    const { viewMain } = this.state;
    const newItems = this.state.musicList.filter(
      item => item.main === viewMain
    );

    const music = newItems.map(item => (
      <div class="music_container">
        <p>{item.description}</p>
        <img className='music_img' src={item.thumbnail} alt={item.description} />
        <audio src={item.audio} controls></audio>
        </div>
      ));


      return music;
    };
    
  render() {
    return (
      <div className='music'>
        <h1>Musics</h1>
        {this.renderItems()}
        <br />
        <div className="link">
        <Link to="/music">
          Show More
        </Link>
        </div>
      </div>
    )
  }
}

export default Musics;