import React from 'react';
import ModalImage from "react-modal-image";
import '../../containers/photo_manipulation/photo_manipulation.css';

class Photo_manipulation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const newItems = this.state.pmList

    const images = newItems.map(item => (
        <div className='photo_content'>
          <ModalImage className='model_photo' small={item.image} large={item.image} alt={item.description}/>
        </div>
      ));

      return images;
    };

  render() {
    return (
    <div>
        <div className="photo_heading app_bg">
        <h1 className="page_heading">Photo Manipulation</h1>
        </div>
    <div className='photo page_photo'>
        {this.renderItems()}
    </div>
    </div>
    )
  }
}

export default Photo_manipulation;
