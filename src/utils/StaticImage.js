import React from 'react';
import { Image } from 'react-konva';

import imageUnavailable from '../img/image-unavailable.svg';

class StaticImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      scaleX: 1,
      scaleY: 1
    };
  }

  componentDidMount() {
    this.setImage(this.props.src);
  }

  setImage(src) {
    const image = new window.Image();
    image.onload = () => {
      let scaleX = 1, scaleY = 1;
      switch (this.props.sizing) {
        case 'contain':
        case 'letterbox':
          scaleX = scaleY = Math.min(
            this.props.width / image.width, 
            this.props.height / image.height
          );
          break;
        case 'cover':
          scaleX = scaleY = Math.max(
            this.props.width / image.width, 
            this.props.height / image.height
          );
          break;
        case 'fit':
        case 'stretch':
          scaleX = this.props.width / image.width;
          scaleY = this.props.height / image.height;
          break;
        default:
        case 'original':
          break;
      }
      this.setState({
        image,
        scaleX,
        scaleY
      });
    };
    image.onerror = this.resetImage.bind(this);
    image.src = src;
  }

  resetImage() {
    this.setImage(imageUnavailable);
  }

  render() {
    return (
      <Image image={ this.state.image } scaleX={ this.state.scaleX } scaleY={ this.state.scaleY } />
    );
  }
}


// class StaticImage extends React.Component {
//     state = {
//       image: null
//     }
//     componentDidMount() {
//       const image = new window.Image();
//       image.src = this.props.src;
//       image.onload = () => {
//         this.setState({
//           image: image
//         });
//       }
//     }

//     render() {
//         return (
//             <Image image={this.state.image} />
//         );
//     }
// }


export default StaticImage;