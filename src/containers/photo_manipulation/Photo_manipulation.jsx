import React from 'react';
import ModalImage from "react-modal-image";
import { Link } from "react-router-dom";
import './photo_manipulation.css';

class Photo_manipulation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewMain: true,
      activeItem: {
        description: "",
        main: false
      },
      pmList: []
      };
  }

  async componentDidMount() {
    try {
      const res = await fetch('https://shaheedbackend.herokuapp.com/api/photo/');
      //const res = await fetch('http://127.0.0.1:8000/api/photo/');
      const pmList = await res.json();
      this.setState({
        pmList
      });
    } catch (e) {
      console.log(e);
  }
  }

  renderItems = () => {
    const { viewMain } = this.state;
    const newItems = this.state.pmList.filter(
      item => item.main === viewMain
    );

    const images = newItems.map(item => (
        <div className='photo_content'>
          <ModalImage className='model_photo' small={item.image} large={item.image} alt={item.description}/>
        </div>
      ));

      return images;
    };

  render() {
    return (
      <div className='photo'>
        <h1>Photo Manipulation</h1>
        {this.renderItems()}
        <br />
        <div className="link">
        <Link to="/photo">
          Show More
        </Link>
        </div>
      </div>
    )
  }
}

export default Photo_manipulation;
