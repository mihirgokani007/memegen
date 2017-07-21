import React from 'react';
import { Image } from 'react-konva';

const DEFAULT_IMAGE = '';

class StaticImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      scale: 1
    };
  }

  componentDidMount() {
    this.setImage(this.props.src);
  }

  setImage(src) {
    const image = new window.Image();
    image.onload = () => {
      const scaleX = this.props.width / image.width;
      const scaleY = this.props.height / image.height;
      const scale = Math.min(scaleX, scaleY);
      this.setState({
        image,
        scale
      });
    };
    image.onerror = this.resetImage.bind(this);
    image.src = src;
  }

  resetImage() {
    this.setImage(DEFAULT_IMAGE);
  }

  render() {
    return (
      <Image image={ this.state.image } scaleX={ this.state.scale } scaleY={ this.state.scale } />
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