import React from "react"
import ModalImage from "react-modal-image";
import '../../containers/animations/animations.css';

class Animations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const newItems = this.state.aniList;
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
      <div>
        <div className="anime_heading app_bg">
        <h1 className="page_heading">3D / Animations</h1>
        </div>
      <div className='animation page_anime'>
        {this.renderItems()}
      </div>
      </div>
      
    )
  }
}

export default Animations;