import React from 'react';
import '../../containers/musics/musics.css'

class Musics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const newItems = this.state.musicList

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
    <div>
        <div className="music_heading app_bg">
        <h1 className="page_heading">Music</h1>
        </div>
    <div className='music page_music'>
    {this.renderItems()}
    </div>
    </div>
    )
  }
}

export default Musics;