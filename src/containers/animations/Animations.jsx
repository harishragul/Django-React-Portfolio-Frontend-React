import React from "react"
import ModalImage from "react-modal-image";
import { Link } from "react-router-dom";
import './animations.css';

class Animations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewMain: true,
      activeItem: {
        description: "",
        main: false
      },
      aniList: []
      };
  }

  async componentDidMount() {
    try {
      const res = await fetch('https://shaheedbackend.herokuapp.com/api/animation/');
      //const res = await fetch('http://127.0.0.1:8000/api/animation/');
      const aniList = await res.json();
      this.setState({
        aniList
      });
    } catch (e) {
      console.log(e);
  }
  }

  renderItems = () => {
    const { viewMain } = this.state;
    const newItems = this.state.aniList.filter(
      item => item.main === viewMain
    );
    const imgItems = newItems.filter(
      item => item.image === true
    );
    const videoItems = newItems.filter(
      item => item.image === false
    );

    const images = imgItems.map(item => (
        <div className='animation_content'>
          <ModalImage className='d_model_photo' small={item.video} large={item.video} alt={item.description}/>
        </div>
      ));

      const videos = videoItems.map(item => (
          <div className='animation_video_content'>
            <video controls src={item.video}></video>
          </div>
        ));
        
        const anime = images;
        
        anime.push(videos);

      return anime;
    };
    
  render() {
    return (
      <div className='animation'>
        <h1>3D / Animations</h1>
        {this.renderItems()}
        <br />
        <div className="link">
        <Link to="/animations">
          Show More
        </Link>
        </div>
      </div>
    )
  }
}

export default Animations;